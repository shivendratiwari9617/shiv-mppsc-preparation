import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { api, SessionInfo, SessionQuestion } from '../api/client';
import { ErrorState } from '../components/Feedback';
import PriorityBadge from '../components/PriorityBadge';
import ProgressBar from '../components/ProgressBar';

interface LocationState {
  session: SessionInfo;
  questions: SessionQuestion[];
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function PracticeSessionPage() {
  const { sessionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | undefined;

  const [questions, setQuestions] = useState<SessionQuestion[]>(state?.questions || []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [tally, setTally] = useState({ correct: 0, wrong: 0, skipped: 0 });
  const [remaining, setRemaining] = useState<number | null>(state?.session.timeLimitSec ?? null);
  const questionStartedAt = useRef<number>(Date.now());
  const finishing = useRef(false);

  const session = state?.session;
  const current = questions[index];

  const attemptMutation = useMutation({
    mutationFn: async (payload: { questionId: number; selectedIndex: number | null }) => {
      const timeTakenMs = Date.now() - questionStartedAt.current;
      const { data } = await api.post(`/sessions/${sessionId}/attempts`, { ...payload, timeTakenMs });
      return data as { isCorrect: boolean; correctIndex: number; explanation: string | null };
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: async (questionId: number) => (await api.post(`/bookmarks/${questionId}/toggle`)).data as { bookmarked: boolean },
  });

  const finishMutation = useMutation({
    mutationFn: async () => (await api.post(`/sessions/${sessionId}/finish`)).data,
  });

  const goToResults = () => {
    if (finishing.current) return;
    finishing.current = true;
    finishMutation.mutate(undefined, {
      onSettled: () => navigate(`/results/${sessionId}`),
    });
  };

  // Countdown timer for MOCK sessions
  useEffect(() => {
    if (remaining === null) return;
    if (remaining <= 0) {
      goToResults();
      return;
    }
    const t = setTimeout(() => setRemaining((r) => (r !== null ? r - 1 : r)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining]);

  if (!state || !session || !questions.length) {
    return (
      <ErrorState message="Session data was lost (perhaps the page was refreshed). Please start a new practice session from Home." />
    );
  }

  function selectOption(optIdx: number) {
    if (answered || !current) return;
    setSelected(optIdx);
    setAnswered(true);
    attemptMutation.mutate(
      { questionId: current.id, selectedIndex: optIdx },
      {
        onSuccess: (data) => setLastCorrect(data.isCorrect),
      }
    );
    setTally((t) => (optIdx === current.correctIndex ? { ...t, correct: t.correct + 1 } : { ...t, wrong: t.wrong + 1 }));
  }

  function skip() {
    if (answered || !current) return;
    setAnswered(true);
    setLastCorrect(false);
    attemptMutation.mutate({ questionId: current.id, selectedIndex: null });
    setTally((t) => ({ ...t, skipped: t.skipped + 1 }));
  }

  function toggleBookmark() {
    if (!current) return;
    bookmarkMutation.mutate(current.id, {
      onSuccess: (data) => {
        setQuestions((qs) => qs.map((q, i) => (i === index ? { ...q, bookmarked: data.bookmarked } : q)));
      },
    });
  }

  function next() {
    if (index + 1 >= questions.length) {
      goToResults();
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setAnswered(false);
    setLastCorrect(null);
    setShowExplanation(false);
    questionStartedAt.current = Date.now();
  }

  const isLast = index + 1 >= questions.length;
  const timeCritical = remaining !== null && session.timeLimitSec ? remaining / session.timeLimitSec < 0.2 : false;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {remaining !== null && (
        <div className={`card p-3 flex items-center justify-between ${timeCritical ? 'border-red-400' : ''}`}>
          <span className="text-sm font-medium">⏱️ Time Remaining</span>
          <span className={`font-mono text-lg font-bold ${timeCritical ? 'text-red-600' : ''}`}>{formatTime(remaining)}</span>
        </div>
      )}

      <div className="card p-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span>
            Question {index + 1} of {questions.length}
          </span>
          <span className="flex gap-3">
            <span className="text-green-600 dark:text-green-400">✅ {tally.correct}</span>
            <span className="text-red-600 dark:text-red-400">❌ {tally.wrong}</span>
            {tally.skipped > 0 && <span className="text-slate-500">⏭ {tally.skipped}</span>}
          </span>
        </div>
        <ProgressBar value={index + (answered ? 1 : 0)} max={questions.length} />
      </div>

      {current && (
        <div className="card p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <PriorityBadge tag={current.priorityTag} />
            <button
              onClick={toggleBookmark}
              className="text-xl shrink-0"
              title={current.bookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            >
              {questions[index].bookmarked ? '🔖' : '📑'}
            </button>
          </div>

          <div className="font-medium text-lg leading-relaxed">{current.questionText}</div>

          <div className="space-y-2">
            {current.options.map((opt, i) => {
              let cls =
                'block w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition text-sm';
              if (answered) {
                if (i === current.correctIndex) cls += ' bg-green-50 dark:bg-green-900/30 border-green-400 font-semibold';
                else if (i === selected) cls += ' bg-red-50 dark:bg-red-900/30 border-red-400';
              } else {
                cls += ' hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 cursor-pointer';
              }
              return (
                <button key={i} className={cls} disabled={answered} onClick={() => selectOption(i)}>
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 flex-wrap pt-1">
            {!answered && (
              <button className="btn-secondary" onClick={skip}>
                Skip
              </button>
            )}
            {answered && (
              <>
                <button className="btn-secondary" onClick={() => setShowExplanation((v) => !v)}>
                  {showExplanation ? 'Hide' : 'Show'} Explanation
                </button>
                <button className="btn-primary ml-auto" onClick={next}>
                  {isLast ? 'Finish' : 'Next Question →'}
                </button>
              </>
            )}
          </div>

          {answered && showExplanation && (
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-sm whitespace-pre-wrap">
              {current.explanation || 'व्याख्या उपलब्ध नहीं है।'}
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <Link to="/" className="text-xs text-slate-400 hover:text-brand-600">
          Exit to Home
        </Link>
      </div>
    </div>
  );
}

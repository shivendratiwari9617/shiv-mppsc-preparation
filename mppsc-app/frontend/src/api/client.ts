import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
});

export interface UnitSummary {
  id: number;
  code: string;
  name: string;
  slug: string;
  topicCount: number;
  questionCount: number;
  attempted: number;
  correct: number;
  wrong: number;
  accuracy: number;
}

export interface TopicSummary {
  id: number;
  title: string;
  coverageNote: string | null;
  questionCount: number;
  attempted: number;
  accuracy: number;
}

export interface UnitDetail {
  unit: { id: number; code: string; name: string; slug: string };
  stats: { questionCount: number; attempted: number; correct: number; wrong: number; accuracy: number };
  topics: TopicSummary[];
}

export interface QuestionFull {
  id: number;
  orderIndex: number;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string | null;
  priorityTag: string;
  bookmarked: boolean;
  reviewState: { box: number; timesWrong: number; timesCorrect: number; nextDueAt: string | null } | null;
}

export interface TopicDetail {
  topic: { id: number; title: string; coverageNote: string | null; vyakhya: string | null; unit: { id: number; name: string; code: string } };
  questions: QuestionFull[];
}

export interface SessionQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string | null;
  priorityTag: string;
  topicTitle: string;
  bookmarked: boolean;
}

export interface SessionInfo {
  id: number;
  mode: string;
  unitId: number | null;
  topicId: number | null;
  priorityFilter: string | null;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  timeLimitSec: number | null;
  startedAt: string;
  finishedAt: string | null;
}

export interface CreateSessionPayload {
  mode: 'PRACTICE' | 'MOCK' | 'WRONG_DECK' | 'DUE' | 'BOOKMARKS' | 'CUSTOM';
  unitId?: number;
  topicId?: number;
  priorityTags?: string[];
  count?: number;
  shuffle?: boolean;
  timeLimitSec?: number;
  questionIds?: number[];
}

export interface ReviewQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string | null;
  priorityTag: string;
  topicId: number;
  topicTitle: string;
  unitName: string;
  box?: number;
  timesWrong?: number;
  timesCorrect?: number;
  nextDueAt?: string | null;
  bookmarkedAt?: string;
}

export interface OverviewStats {
  totalUnits: number;
  totalTopics: number;
  totalQuestions: number;
  attemptedQuestions: number;
  accuracy: number;
  currentStreak: number;
  todayAttempted: number;
  dailyGoal: number;
  goalMet: boolean;
  wrongDeckCount: number;
  dueCount: number;
  bookmarksCount: number;
}

export interface DailyStatRow {
  date: string;
  questionsAttempted: number;
  correctCount: number;
  wrongCount: number;
  goalMet: boolean;
}

// --- MPSI study notes ---

export interface NoteCategorySummary {
  id: number;
  code: string;
  name: string;
  slug: string;
  fileCount: number;
  readCount: number;
}

export interface NoteFileSummary {
  id: number;
  title: string;
  orderIndex: number;
  isRead: boolean;
}

export interface NoteCategoryDetail {
  category: { id: number; code: string; name: string };
  files: NoteFileSummary[];
}

export interface NoteFileDetail {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  category: { id: number; name: string };
  prev: { id: number; title: string } | null;
  next: { id: number; title: string } | null;
}

// --- Full MPPSC syllabus checklist ---

export interface ChecklistUnitSummary {
  id: number;
  code: string;
  name: string;
  fileCount: number;
  itemCount: number;
  checkedCount: number;
}

export interface ChecklistFileSummary {
  id: number;
  title: string;
  groupLabel: string | null;
  itemCount: number;
  checkedCount: number;
}

export interface ChecklistUnitDetail {
  unit: { id: number; code: string; name: string };
  files: ChecklistFileSummary[];
}

export interface ChecklistItemRow {
  id: number;
  label: string;
  text: string;
  heading: string | null;
  isChecked: boolean;
}

export interface ChecklistFileDetail {
  file: { id: number; title: string; groupLabel: string | null; unit: { id: number; name: string } };
  items: ChecklistItemRow[];
}

// --- Fact-based MPPSC Prelims content notes ---

export interface PrelimsNoteUnitSummary {
  id: number;
  code: string;
  name: string;
  topicCount: number;
  noteCount: number;
  readCount: number;
}

export interface PrelimsNoteTopicSummary {
  id: number;
  title: string;
  groupLabel: string | null;
  noteCount: number;
  readCount: number;
}

export interface PrelimsNoteUnitDetail {
  unit: { id: number; code: string; name: string };
  topics: PrelimsNoteTopicSummary[];
}

export interface PrelimsNoteFileSummary {
  id: number;
  title: string;
  orderIndex: number;
  isRead: boolean;
}

export interface PrelimsNoteTopicDetail {
  topic: { id: number; title: string; groupLabel: string | null; unit: { id: number; name: string } };
  files: PrelimsNoteFileSummary[];
}

export interface PrelimsNoteFileDetail {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  topic: { id: number; title: string; unit: { id: number; name: string } };
  prev: { id: number; title: string } | null;
  next: { id: number; title: string } | null;
}

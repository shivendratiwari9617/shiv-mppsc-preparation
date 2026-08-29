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

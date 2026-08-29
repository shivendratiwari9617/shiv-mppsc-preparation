import { prisma } from '../db';

export interface QuestionStats {
  questionCount: number;
  attempted: number;
  correct: number;
  wrong: number;
  accuracy: number;
}

export async function getStatsForWhere(questionWhere: Record<string, any>): Promise<QuestionStats> {
  const questionCount = await prisma.question.count({ where: questionWhere });
  const agg = await prisma.reviewState.aggregate({
    where: { question: questionWhere },
    _count: { _all: true },
    _sum: { timesCorrect: true, timesWrong: true },
  });
  const attempted = agg._count._all;
  const correct = agg._sum.timesCorrect || 0;
  const wrong = agg._sum.timesWrong || 0;
  const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
  return { questionCount, attempted, correct, wrong, accuracy };
}

export async function getUnitStats(unitId: number): Promise<QuestionStats> {
  return getStatsForWhere({ topic: { unitId } });
}

export async function getTopicStats(topicId: number): Promise<QuestionStats> {
  return getStatsForWhere({ topicId });
}

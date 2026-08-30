import { useQuery } from '@tanstack/react-query';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { api, DailyStatRow } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';

interface UnitStatRow {
  unitId: number;
  name: string;
  questionCount: number;
  attempted: number;
  accuracy: number;
}
interface PriorityStatRow {
  priorityTag: string;
  questionCount: number;
  attempted: number;
  accuracy: number;
}

function colorForCount(count: number) {
  if (count === 0) return 'bg-slate-100 dark:bg-slate-800';
  if (count < 5) return 'bg-brand-200 dark:bg-brand-900';
  if (count < 15) return 'bg-brand-400 dark:bg-brand-700';
  if (count < 30) return 'bg-brand-600';
  return 'bg-brand-800';
}

function ActivityHeatmap({ data }: { data: DailyStatRow[] }) {
  if (!data.length) return null;
  const firstDate = new Date(data[0].date + 'T00:00:00');
  const startPad = firstDate.getDay();
  const cells: (DailyStatRow | null)[] = [...Array(startPad).fill(null), ...data];
  const weeks: (DailyStatRow | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div className="flex gap-1 overflow-x-auto pb-2">
      {weeks.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {week.map((day, di) => (
            <div
              key={di}
              title={day ? `${day.date}: ${day.questionsAttempted} questions` : ''}
              className={`h-3.5 w-3.5 rounded-sm ${day ? colorForCount(day.questionsAttempted) : 'bg-transparent'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function StatsPage() {
  const dailyQ = useQuery({
    queryKey: ['stats-daily'],
    queryFn: async () => (await api.get<DailyStatRow[]>('/stats/daily?days=90')).data,
  });
  const unitsQ = useQuery({
    queryKey: ['stats-units'],
    queryFn: async () => (await api.get<UnitStatRow[]>('/stats/units')).data,
  });
  const priorityQ = useQuery({
    queryKey: ['stats-priority'],
    queryFn: async () => (await api.get<PriorityStatRow[]>('/stats/priority')).data,
  });

  if (dailyQ.isLoading || unitsQ.isLoading || priorityQ.isLoading) return <Loading label="Loading stats…" />;
  if (!dailyQ.data || !unitsQ.data || !priorityQ.data) return <ErrorState message="Could not load stats." />;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold">📊 Statistics</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Your practice activity and performance over time.</p>
      </div>

      <div className="card p-5">
        <h2 className="font-bold mb-3">Activity — last 90 days</h2>
        <ActivityHeatmap data={dailyQ.data} />
      </div>

      <div className="card p-5">
        <h2 className="font-bold mb-3">Questions Attempted per Day</h2>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <AreaChart data={dailyQ.data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} minTickGap={20} />
              <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />
              <Tooltip />
              <Area type="monotone" dataKey="questionsAttempted" stroke="#0f766e" fill="#0f766e33" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-bold mb-3">Accuracy by Unit</h2>
        <div style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <BarChart data={unitsQ.data} layout="vertical" margin={{ left: 40 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} />
              <YAxis type="category" dataKey="name" width={160} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#0f766e" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-bold mb-3">Accuracy by Priority</h2>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <BarChart data={priorityQ.data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="priorityTag" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#2f8f83" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

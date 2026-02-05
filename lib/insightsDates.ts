import { FlossStatus } from '../components/context/FlossContext';

export type DayData = {
  date: Date;
  status: FlossStatus | null;
};

export type WeekData = {
  days: DayData[];
  achievedStreak: boolean;
};

export function getWeeksForMonth(
  year: number,
  month: number,
  trackedDays: Map<string, FlossStatus>,
  weeklyGoal = 5
): WeekData[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const weeks: WeekData[] = [];
  let currentWeek: DayData[] = [];

  // Pad start
  for (let i = 0; i < firstDay.getDay(); i++) {
    currentWeek.push({ date: new Date(NaN), status: null });
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day);
    const key = date.toISOString().slice(0, 10);

    currentWeek.push({
      date,
      status: trackedDays.get(key) ?? null,
    });

    if (currentWeek.length === 7) {
      weeks.push(buildWeek(currentWeek, weeklyGoal));
      currentWeek = [];
    }
  }

  if (currentWeek.length) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: new Date(NaN), status: null });
    }
    weeks.push(buildWeek(currentWeek, weeklyGoal));
  }

  return weeks;
}

function buildWeek(days: DayData[], weeklyGoal: number): WeekData {
  const flossedCount = days.filter(d => d.status === 'yes').length;
  const complete = days.every(d => !isNaN(d.date.getTime()));
  return {
    days,
    achievedStreak: complete && flossedCount >= weeklyGoal,
  };
}

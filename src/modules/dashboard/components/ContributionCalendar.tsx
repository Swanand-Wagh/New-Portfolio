import { useMemo } from 'react';

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
  firstDay: string;
}

interface ContributionMonth {
  name: string;
  totalWeeks: number;
  firstDay: string;
}

interface ContributionCalendarProps {
  data: {
    weeks: ContributionWeek[];
    months: ContributionMonth[];
    colors: string[];
  };
}

const LEVELS = [
  'bg-neutral-200 dark:bg-neutral-800',
  'bg-green-200 dark:bg-green-900',
  'bg-green-400 dark:bg-green-700',
  'bg-green-500 dark:bg-green-500',
  'bg-green-700 dark:bg-green-400',
];

const getLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
};

const ContributionCalendar = ({ data }: ContributionCalendarProps) => {
  const { weeks, months } = data || {};

  const monthLabels = useMemo(() => {
    if (!months) return [];
    return months.map((month) => month.name);
  }, [months]);

  if (!weeks?.length) {
    return (
      <p className='text-sm text-neutral-500'>
        No contribution data available.
      </p>
    );
  }

  return (
    <div className='animate-fade-in space-y-2'>
      <div className='overflow-x-auto'>
        <div className='inline-flex flex-col gap-1'>
          <div className='flex gap-[3px] pl-0'>
            {monthLabels.map((name, i) => (
              <span
                key={i}
                className='text-[10px] text-neutral-500 dark:text-neutral-400'
                style={{
                  minWidth: `${(months[i]?.totalWeeks || 4) * 13}px`,
                }}
              >
                {name.slice(0, 3)}
              </span>
            ))}
          </div>

          <div className='flex gap-[3px]'>
            {weeks.map((week, wi) => (
              <div key={wi} className='flex flex-col gap-[3px]'>
                {week.contributionDays.map((day) => (
                  <div
                    key={day.date}
                    className={`h-[10px] w-[10px] rounded-[2px] ${LEVELS[getLevel(day.contributionCount)]}`}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2 text-[10px] text-neutral-500 dark:text-neutral-400'>
        <span>Less</span>
        {LEVELS.map((cls, i) => (
          <div key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionCalendar;

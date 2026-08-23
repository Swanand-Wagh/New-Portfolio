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

// GitHub's own green palettes, so the calendar matches github.com exactly
// rather than approximating with Tailwind greens. The empty square keeps this
// site's neutral instead of GitHub's blue-slate #161b22.
const LEVELS = [
  'bg-[#ebedf0] dark:bg-[#262626]',
  'bg-[#9be9a8] dark:bg-[#0e4429]',
  'bg-[#40c463] dark:bg-[#006d32]',
  'bg-[#30a14e] dark:bg-[#26a641]',
  'bg-[#216e39] dark:bg-[#39d353]',
];

// GitHub already buckets every day relative to that year's own volume, so use
// the colour it hands back instead of re-deriving from raw counts (fixed
// thresholds flatten a normal year into one shade).
//
// `colors` holds only the FOUR non-empty shades — the empty square's colour is
// not in it — so a hit at index i is level i+1, and an empty day misses and
// falls through to 0.
export const getLevel = (
  day: Pick<ContributionDay, 'color' | 'contributionCount'>,
  colors: string[] | undefined,
): number => {
  const index = colors?.indexOf(day.color) ?? -1;
  if (index >= 0) return index + 1;
  if (day.contributionCount === 0) return 0;
  // Only reachable if `colors`/`color` are absent from the response.
  return Math.min(Math.ceil(day.contributionCount / 3), LEVELS.length - 1);
};

const ContributionCalendar = ({ data }: ContributionCalendarProps) => {
  const { weeks, months, colors } = data || {};

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
          {/* No gap here: each label is already exactly totalWeeks * the 13px
              column pitch (10px cell + 3px gap). Adding a flex gap on top
              stacked 3px per month, drifting the labels ~3 columns right of
              the data they name by the end of the year. */}
          <div className='flex pl-0'>
            {monthLabels.map((name, i) => (
              <span
                key={i}
                className='shrink-0 text-[10px] text-neutral-500 dark:text-neutral-400'
                style={{
                  width: `${(months[i]?.totalWeeks || 4) * 13}px`,
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
                    className={`h-[10px] w-[10px] rounded-[2px] ${LEVELS[getLevel(day, colors)]}`}
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

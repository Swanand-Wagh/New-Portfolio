import AnimateCounter from '@/common/components/elements/AnimateCounter';
import Card from '@/common/components/elements/Card';

interface ContributionOverviewProps {
  data: {
    totalContributions: number;
    weeks: {
      contributionDays: {
        contributionCount: number;
        date: string;
      }[];
    }[];
  };
}

const ContributionOverview = ({ data }: ContributionOverviewProps) => {
  const totalContributions = data?.totalContributions || 0;

  const allDays = data?.weeks?.flatMap((week) => week.contributionDays) || [];

  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const startOfWeekStr = startOfWeek.toISOString().split('T')[0];

  const thisWeekContributions = allDays
    .filter((day) => day.date >= startOfWeekStr)
    .reduce((sum, day) => sum + day.contributionCount, 0);

  const bestDay = allDays.reduce(
    (best, day) =>
      day.contributionCount > best.count
        ? { count: day.contributionCount }
        : best,
    { count: 0 },
  );

  const totalDays = allDays.length || 1;
  const average = Math.round(totalContributions / totalDays);

  const stats = [
    { label: 'Total', value: totalContributions },
    { label: 'This Week', value: thisWeekContributions },
    { label: 'Best Day', value: bestDay.count },
    { label: 'Average', value: average, suffix: '/ day' },
  ];

  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className='flex flex-col rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800'
        >
          <span className='text-xs text-neutral-500 dark:text-neutral-500'>
            {stat.label}
          </span>
          <div className='flex items-baseline gap-1'>
            <AnimateCounter
              className='text-xl font-semibold text-green-600'
              total={stat.value}
            />
            {stat.suffix && (
              <span className='text-xs text-neutral-500'>{stat.suffix}</span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContributionOverview;

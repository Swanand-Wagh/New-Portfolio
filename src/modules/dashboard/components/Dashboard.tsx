import { GoGitCommit as ContribIcon } from 'react-icons/go';
import useSWR from 'swr';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';

import ContributionCalendar from './ContributionCalendar';
import ContributionOverview from './ContributionOverview';

const Dashboard = () => {
  const { data: githubData, isLoading } = useSWR(
    '/api/github?type=personal',
    fetcher,
  );

  const contributionCalendar =
    githubData?.contributionsCollection?.contributionCalendar;

  return (
    <div className='space-y-10'>
      <section className='space-y-5'>
        <div className='space-y-2'>
          <SectionHeading title='Contributions' icon={<ContribIcon />} />
          <SectionSubHeading>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              My contributions from last year on GitHub.
            </p>
          </SectionSubHeading>
        </div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : contributionCalendar ? (
          <div className='space-y-4'>
            <ContributionOverview data={contributionCalendar} />
            <ContributionCalendar data={contributionCalendar} />
          </div>
        ) : (
          <div className='rounded-xl border border-dashed border-neutral-300 px-6 py-10 text-center dark:border-neutral-700'>
            <p className='text-sm text-neutral-500'>
              Unable to load GitHub contribution data.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className='space-y-3'>
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className='h-16 animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800'
        />
      ))}
    </div>
    <div className='h-32 animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800' />
  </div>
);

export default Dashboard;

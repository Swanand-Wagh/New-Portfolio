import Router from 'next/router';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-6'>
      <div className='space-y-4'>
        <SectionHeading title='What I Believe' />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          Smart people from great schools are trained to win competitions -
          internships, prestige, brand names. Over time, that becomes the
          default definition of success. And when everyone around you optimizes
          for the same thing, it quietly shapes you.
          <br />
          <br />
          The hard truth is this: you don&apos;t change your life by trying to
          “think differently.” You change it by changing your environment.
          Surround yourself with people who are living a later stage of your
          dream - not society&apos;s.
          <br />
          <br />I choose to build. To take risks. To spend my best years
          creating meaningful things instead of optimizing for safety.
        </p>
      </div>

      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-5'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Building Bold Things</h3>
        </div>

        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          If you&apos;re working on something ambitious, unconventional, or
          technically deep - I&apos;d love to connect.
        </p>

        <Button
          data-umami-event='Click Contact Button'
          onClick={() => Router.push('/contact')}
        >
          Start a Conversation
        </Button>
      </Card>
    </section>
  );
};

export default Services;

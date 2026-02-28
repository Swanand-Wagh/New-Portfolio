const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Swanand</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Born in Pune, India <span className='ml-1'>🇮🇳</span>
            </li>
            <li>
              Currently staying in SFO, California
              <span className='ml-1.5'>🇺🇸</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

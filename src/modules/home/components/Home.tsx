import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Introduction />
      {/* <Breakline className='mt-8 mb-7' /> */}
      <Breakline className='my-8' />
      <Services />
    </>
  );
};

export default Home;

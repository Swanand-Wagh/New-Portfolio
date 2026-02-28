import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='my-8' />
      <Services />
    </>
  );
};

export default Home;

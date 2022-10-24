import HomeNewsBlock from '../components/HomePage/NewsBlock';
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row w-full mb-12'>
        <div className='w-full lg:w-1/2 lg:ml-28 flex flex-col items-start p-12 lg:p-0'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#1D1D1F] mb-9'>Агропромышленный комплекс</h1>
          <HomeNewsBlock />
        </div>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img className='h-[400px] md:h-[500px] xl:h-[600px]' src='HomePage/home-image.png' alt='plants' />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

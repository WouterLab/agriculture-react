import Layout from "../components/Layout";

const WeatherPage = () => {
  const key = process.env.REACT_APP_USER_TOKEN;
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='text-[#06C167] text-6xl font-bold mb-4'>ПОГОДА</h1>
        <p className='w-3/5 text-center text-xl mb-4'>
          Будьте в курсе текущих погодных условий для вашей фермы, включая
          температуру, скорость ветра и видимость. Эта страница также содержит
          24-часовой и 7-дневный прогноз.
        </p>
      </div>
    </Layout>
  );
};

export default WeatherPage;

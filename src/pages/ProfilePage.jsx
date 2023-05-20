import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import ProfileImg from "../assets/avatar.png";

const ProfilePage = ({ setIsLogged }) => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='Профиль' />
        <img
          src={ProfileImg}
          alt='profile'
          className='rounded-full w-[300px] h-[300px] mt-4 mb-8'
        />
        <p className='text-2xl font-bold mb-4'>Данил Панов</p>
        <div className='flex items-center space-x-2'>
          <p className='text-2xl font-semibold'>Местоположение:</p>
          <p className='text-2xl'>г. Москва, Российская Федерация</p>
        </div>
        <div className='flex items-center space-x-2 mb-8'>
          <p className='text-2xl font-semibold'>E-mail:</p>
          <p className='text-2xl'>danilpanov@mtuci.ru</p>
        </div>
        <button
          onClick={() => {
            setIsLogged(false);
          }}
          className='rounded-2xl bg-green-400 text-2xl mb-4 px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400'
        >
          Выйти
        </button>
      </div>
    </Layout>
  );
};

export { ProfilePage };

import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import ProfileImg from "../assets/avatar.png";
import { Button } from "../shared/Button";

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
        <div className='flex flex-col md:flex-row items-center text-center mb-4 md:mb-0 space-x-2'>
          <span className='text-2xl font-semibold'>Местоположение:</span>
          <span className='text-2xl'>г. Москва, Российская Федерация</span>
        </div>
        <div className='flex flex-col md:flex-row items-center text-center mb-4 md:mb-0 space-x-2'>
          <span className='text-2xl font-semibold'>E-mail:</span>
          <span className='text-2xl'>danilpanov@mtuci.ru</span>
        </div>
        <div className='flex flex-col md:flex-row items-center text-center space-x-2 mb-8'>
          <span className='text-2xl font-semibold'>Пароль:</span>
          <span className='text-2xl'>***************</span>
          <p className='text-xl text-green-300 cursor-pointer text-center'>
            Сменить пароль
          </p>
        </div>
        <Button
          onClick={() => {
            setIsLogged(false);
          }}
        >
          Выйти
        </Button>
      </div>
    </Layout>
  );
};

export { ProfilePage };

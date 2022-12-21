import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ProfileImg from "../assets/avatar.png";

const ProfilePage = () => {
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
      </div>
    </Layout>
  );
};

export default ProfilePage;

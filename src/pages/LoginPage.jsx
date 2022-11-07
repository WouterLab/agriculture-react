import Layout from "../components/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center mb-12'>
        <p className='text-xl mb-2 text-neutral-700 '>Введите логин:</p>
        <input type='text' placeholder='Логин' className='mb-4 text-2xl focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300' />
        <p className='text-xl mb-2 text-neutral-700'>Введите пароль:</p>
        <input type='password' placeholder='Пароль' className='text-2xl focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-4 focus:border-green-600 border-green-400 border-2 transition-all duration-300' />
        <button className='rounded-full bg-green-400 text-2xl px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400'>Войти</button>
      </div>
    </Layout>
  );
};

export default LoginPage;

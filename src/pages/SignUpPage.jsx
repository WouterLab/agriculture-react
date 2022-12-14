import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const SignUpPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='РЕГИСТРАЦИЯ' />
        <input
          type='text'
          placeholder='E-mail'
          className='mb-4 text-2xl w-1/5 focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <input
          type='text'
          placeholder='Логин на сайте'
          className='mb-4 text-2xl w-1/5 focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <input
          type='password'
          placeholder='Пароль'
          className='text-2xl w-1/5 focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-4 focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <input
          type='password'
          placeholder='Подтверждение пароля'
          className='text-2xl w-1/5 focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-4 focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <select className='text-2xl w-1/5 focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-8 focus:border-green-600 border-green-400 border-2 transition-all duration-300'>
          <option value='Физическое лицо'>Физическое лицо</option>
          <option value='Юридическое лицо'>Юридическое лицо</option>
        </select>
        <button className='rounded-2xl mb-8 bg-green-400 text-2xl px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400'>
          Зарегистрироваться
        </button>
      </div>
    </Layout>
  );
};

export default SignUpPage;

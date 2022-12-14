import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const LoginPage = ({ login }) => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  return (
    <Layout>
      <div className='flex flex-col items-center mb-12'>
        <p className='text-xl mb-2 text-neutral-700 '>Введите логин:</p>
        <input
          type='text'
          value={loginData.login}
          onChange={(e) =>
            setLoginData({ ...loginData, login: e.target.value })
          }
          placeholder='Логин...'
          className='mb-4 text-2xl focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <p className='text-xl mb-2 text-neutral-700'>Введите пароль:</p>
        <input
          type='password'
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder='Пароль...'
          className='text-2xl focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-8 focus:border-green-600 border-green-400 border-2 transition-all duration-300'
        />
        <div className='space-x-4'>
          <button
            onClick={() => {
              login(loginData);
            }}
            className='rounded-2xl bg-green-400 text-2xl px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400'>
            Войти
          </button>
          <Link to={"/signup"}>
            <button className='rounded-2xl bg-neutral-400 text-2xl px-8 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-neutral-400'>
              Регистрация
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

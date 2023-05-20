import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center mb-8'>
        <h2 className='text-5xl font-bold mb-4 text-center'>
          Страница не найдена...
        </h2>
        <p className='text-lg'>Переход на главную через 3 секунды</p>
      </div>
    </Layout>
  );
};

export { NotFound };

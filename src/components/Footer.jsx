import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className='h-28 bottom-0 border-t w-full flex flex-col justify-center items-center'>
      <p>Copyright © 2022 Agroprom.ru</p>
      <p
        className='underline cursor-pointer'
        onClick={() => navigate("/privacy")}
      >
        Политика конфиденциальности
      </p>
    </footer>
  );
};

export { Footer };

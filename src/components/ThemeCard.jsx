import { useNavigate } from "react-router-dom";

const ThemeCard = ({ id, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(`/discussion/${id}`);
      }}
      className='text-2xl rounded-lg border-2 px-2 py-2 mb-4 w-full cursor-pointer hover:text-gray-400 transition-all duration-300'
    >
      <p>{title}</p>
    </div>
  );
};

export { ThemeCard };

import { useNavigate } from "react-router-dom";

const NewsCard = ({ title, desc, src }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col lg:flex-row pb-4 mt-4 border-b border-black'>
      <div className='pr-8'>
        <h3
          className='text-[#06C167] cursor-pointer hover:text-[#06c167a8] transition-all duration-300 font-bold text-xl mb-4'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/news/1");
          }}
        >
          {title}
        </h3>
        <p className='text-lg'>{desc}</p>
      </div>
      <img
        src={src}
        alt='pic'
        className='cursor-pointer hover:opacity-60 transition-all duration-300 object-contain'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/news/1");
        }}
      />
    </div>
  );
};

export { NewsCard };

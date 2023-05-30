import { useNavigate } from "react-router-dom";

const ServiceItem = ({ title, icon, desc, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(link);
      }}
      className='min-w-[200px] min-h-[180px] w-4/5 cursor-pointer border rounded-xl hover:shadow-xl transition-all duration-300 p-4 bg-neutral-50'
    >
      <h3 className='font-bold xl:text-3xl text-[#323234] text-xl mb-2 text-elipsis overflow-hidden'>
        {title}
      </h3>
      <p className='text-green-400 text-xl'>{desc}</p>
    </div>
  );
};

export { ServiceItem };

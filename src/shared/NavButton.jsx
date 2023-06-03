import { Link } from "react-router-dom";

const NavButton = ({ text, active, link }) => {
  return (
    <Link to={link} className='relative'>
      <p
        className={`cursor-pointer md:text-base text-4xl ${
          active && "text-[#06C167]"
        }`}
      >
        {text}
      </p>
      {active && (
        <p className='text-[#06C167] absolute text-5xl md:text-xl rounded-full text-center w-full md:top-3 top-8 hidden sm:block'>
          •
        </p>
      )}
    </Link>
  );
};

export { NavButton };

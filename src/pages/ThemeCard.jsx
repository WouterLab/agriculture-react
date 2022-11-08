const ThemeCard = ({ title }) => {
  return (
    <div className='text-2xl rounded-lg border-2 px-2 py-2 mb-4 w-full cursor-pointer hover:text-gray-400 transition-all duration-300'>
      <p>{title}</p>
    </div>
  );
};

export default ThemeCard;

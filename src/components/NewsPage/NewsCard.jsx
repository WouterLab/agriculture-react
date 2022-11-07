const NewsCard = ({ title, desc, src }) => {
  return (
    <div className='flex pb-4 mt-4 border-b border-black'>
      <div className='pr-8'>
        <h3 className='text-[#06C167] cursor-pointer hover:text-[#06c167a8] transition-all duration-300 font-bold text-xl mb-4'>
          {title}
        </h3>
        <p className='text-lg'>{desc}</p>
      </div>
      <img src={src} alt='pic' className='cursor-pointer hover:opacity-60 transition-all duration-300' />
    </div>
  );
};

export default NewsCard;

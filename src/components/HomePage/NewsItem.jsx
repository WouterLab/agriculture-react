const NewsItem = ({ news }) => {
  return (
    <div className='ml-4 mb-4'>
      <h3 className='font-semibold text-lg'>{news.title}</h3>
      <p className='text-[#6D9363]'>{news.date}</p>
    </div>
  );
};

export default NewsItem;

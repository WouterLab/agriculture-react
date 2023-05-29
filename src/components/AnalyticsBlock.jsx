const AnalyticsBlock = ({
  title,
  img = "https://source.unsplash.com/random/200×200",
}) => {
  return (
    <div className='cursor-pointer box-border bg-neutral-100 rounded-lg overflow-hidden w-full md:w-5/6 sm:w-3/5 mx-auto mb-8'>
      <img src={img} alt='analytics-img' className='mb-4 object-cover' />
      <p className='text-xl text-black px-8 w-full pb-1 mb-4'>{title}</p>
    </div>
  );
};

export { AnalyticsBlock };

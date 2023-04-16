const ServiceItem = ({ title, icon, desc }) => {
  return (
    <div className='min-w-[200px] h-[180px] w-1/3 xl:w-[40%] cursor-pointer border rounded-xl hover:shadow-xl transition-all duration-300 p-4 bg-neutral-50'>
      <h3 className='font-bold xl:text-lg text-[#323234] mb-2 text-elipsis overflow-hidden'>
        {title}
      </h3>
      <p className='text-green-400'>{desc}</p>
    </div>
  );
};

export default ServiceItem;

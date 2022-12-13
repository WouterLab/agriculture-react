const ServiceItem = ({ title, icon, desc }) => {
  return (
    <div className='ml-4 mb-4 w-1/4 cursor-pointer border rounded-xl hover:shadow-xl transition-all duration-300 p-4'>
      <h3 className='font-bold text-xl text-[#323234] mb-2'>{title}</h3>
      <p className='text-green-400'>{desc}</p>
    </div>
  );
};

export default ServiceItem;

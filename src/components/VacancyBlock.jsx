import VacancyIcon from "../assets/vacancy.png";

const VacancyBlock = ({ job, desc }) => {
  return (
    <div className='bg-gray-100 mb-4 px-4 py-4 rounded-md'>
      <div className='flex items-center'>
        <img src={VacancyIcon} className='w-12 mr-2' alt='vacancy' />
        <p className='font-bold text-2xl cursor-pointer'>{job}</p>
      </div>
      <p className='mb-4'>{desc}</p>
      <button className='rounded-2xl px-4 py-2 font-semibold bg-green-400 hover:text-white transition-all duration-300'>
        Откликнуться
      </button>
    </div>
  );
};

export default VacancyBlock;

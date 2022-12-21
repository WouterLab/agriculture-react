import { UserCircleIcon } from "@heroicons/react/24/outline";

const VacancyBlock = ({ job, desc }) => {
  return (
    <div className='bg-gray-100 mb-4 px-2 py-4 rounded-md'>
      <div className='flex items-center'>
        <UserCircleIcon className='w-12 mr-2' />
        <p className='font-bold text-2xl'>{job}</p>
      </div>
      <p className='mb-4'>{desc}</p>
      <button className='rounded-2xl px-4 py-2 font-semibold bg-green-400 hover:text-white transition-all duration-300'>Откликнуться</button>
    </div>
  );
};

export default VacancyBlock;

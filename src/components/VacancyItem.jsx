import { UserIcon } from "@heroicons/react/24/outline";

const VacancyItem = ({ title }) => {
  return (
    <div className='flex flex-col w-4/5 md:w-1/5 cursor-pointer mb-4 items-center'>
      <UserIcon className='w-36 mb-4' />
      <h3 className='text-center text-xl md:text-base lg:text-xl font-semibold'>{title}</h3>
    </div>
  );
};

export default VacancyItem;

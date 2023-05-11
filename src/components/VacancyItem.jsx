import VacancyIcon from "../assets/vacancy.png";

const VacancyItem = ({ title }) => {
  return (
    <div className='flex flex-col w-4/5 md:w-1/5 cursor-pointer mb-4 items-center'>
      <img src={VacancyIcon} className='w-36 mb-4' alt='vacancy' />
      <h3 className='text-center text-xl md:text-base lg:text-xl font-semibold'>
        {title}
      </h3>
    </div>
  );
};

export default VacancyItem;

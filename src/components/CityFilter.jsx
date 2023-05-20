import { CityCheckbox } from "./CityCheckbox";

const CityFilter = () => {
  return (
    <div className='py-4 px-2'>
      <p className='mb-2 text-lg'>Регион</p>
      <CityCheckbox city='Москва' />
      <CityCheckbox city='Санкт-Петербург' />
      <CityCheckbox city='Краснодарский край' />
      <CityCheckbox city='Алтайский край' />
      <CityCheckbox city='Красноярский край' />
      <CityCheckbox city='Республика Татарстан' />
      <CityCheckbox city='Республика Хакасия' />
    </div>
  );
};

export { CityFilter };

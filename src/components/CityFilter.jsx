import { CityCheckbox } from "./CityCheckbox";

const CityFilter = ({ setRegionFilter, regionFilter, regionInitial }) => {
  return (
    <div className='py-4 px-2'>
      <p className='mb-2 text-lg'>Регион</p>
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Москва'
        region='msk'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Санкт-Петербург'
        region='spb'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Краснодарский край'
        region='krasnodar'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Алтайский край'
        region='altai'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Красноярский край'
        region='krasnoyarsk'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Республика Татарстан'
        region='tatarstan'
      />
      <CityCheckbox
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        city='Республика Хакасия'
        region='hakasiya'
      />
      <p
        className='cursor-pointer text-gray-500'
        onClick={() => setRegionFilter(regionInitial)}
      >
        Включить все
      </p>
    </div>
  );
};

export { CityFilter };

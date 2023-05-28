import { Input } from "../shared/Input";

const CityCheckbox = ({ city, setRegionFilter, regionFilter, region }) => {
  return (
    <div className='flex items-center space-x-2 mb-2'>
      <Input
        type='checkbox'
        style={{ marginBottom: 0, minWidth: 20, minHeight: 20 }}
        className='w-5 h-5'
        checked={regionFilter[region]}
        onChange={() => {
          setRegionFilter({ ...regionFilter, [region]: !regionFilter[region] });
        }}
      />
      <p>{city}</p>
    </div>
  );
};

export { CityCheckbox };

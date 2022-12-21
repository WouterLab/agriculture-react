import Input from "../ui/Input";

const CityCheckbox = ({ city }) => {
  return (
    <div className='flex h-4 items-center space-x-2 mb-2'>
      <Input type='checkbox' style={{ marginBottom: 0 }} className='w-5 h-5' />
      <p>{city}</p>
    </div>
  );
};

export default CityCheckbox;

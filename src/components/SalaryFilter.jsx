import { Input } from "../shared/Input";

const SalaryFilter = ({ salaryFilter, setSalaryFilter }) => {
  return (
    <div className='px-2 space-y-1 mb-4'>
      <p className='mb-2 text-lg'>Уровень дохода</p>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setSalaryFilter("none")}
      >
        <Input
          type='radio'
          value='none'
          checked={salaryFilter === "none"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Не имеет значения</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setSalaryFilter("15")}
      >
        <Input
          type='radio'
          value='15'
          checked={salaryFilter === "15"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>От 15 тыс. рублей</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setSalaryFilter("30")}
      >
        <Input
          type='radio'
          value='30'
          checked={salaryFilter === "30"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>От 30 тыс. рублей</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setSalaryFilter("50")}
      >
        <Input
          type='radio'
          value='50'
          checked={salaryFilter === "50"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>От 50 тыс. рублей</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setSalaryFilter("75")}
      >
        <Input
          type='radio'
          value='75'
          checked={salaryFilter === "75"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>От 75 тыс. рублей</p>
      </div>
      <div className='flex space-x-2' onClick={() => setSalaryFilter("100")}>
        <Input
          type='radio'
          value='100'
          checked={salaryFilter === "100"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>От 100 тыс. рублей</p>
      </div>
    </div>
  );
};

export { SalaryFilter };

import { Input } from "../shared/Input";

const ScheduleFilter = ({ scheduleFilter, setScheduleFilter }) => {
  return (
    <div className='px-2 space-y-1'>
      <p className='mb-2 text-lg'>График работы</p>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("any")}
      >
        <Input
          type='radio'
          value='any'
          checked={scheduleFilter === "any"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Любой</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("full")}
      >
        <Input
          type='radio'
          value='full'
          checked={scheduleFilter === "full"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Полный день</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("remote")}
      >
        <Input
          type='radio'
          value='remote'
          checked={scheduleFilter === "remote"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Удаленная работа</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("flex")}
      >
        <Input
          type='radio'
          value='flex'
          checked={scheduleFilter === "flex"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Гибкий график</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("change")}
      >
        <Input
          type='radio'
          value='change'
          checked={scheduleFilter === "change"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Сменный график</p>
      </div>
      <div
        className='flex space-x-2 cursor-pointer'
        onClick={() => setScheduleFilter("shift")}
      >
        <Input
          type='radio'
          value='shift'
          checked={scheduleFilter === "shift"}
          className='mb-0 w-5 cursor-pointer'
          readOnly
        />
        <p>Вахтовый метод</p>
      </div>
    </div>
  );
};

export { ScheduleFilter };

import Input from "../ui/Input";

const ScheduleFilter = ({ scheduleFilter, setScheduleFilter }) => {
  return (
    <div className='px-2 space-y-1'>
      <p className='mb-2 text-lg'>График работы</p>
      <div className='flex space-x-2'>
        <Input
          type='radio'
          value='none'
          checked={scheduleFilter === "full"}
          onClick={() => setScheduleFilter("full")}
          className='mb-0 w-5'
        />
        <p>Полный день</p>
      </div>
      <div className='flex space-x-2'>
        <Input
          type='radio'
          value='15'
          checked={scheduleFilter === "remote"}
          className='mb-0 w-5'
          onClick={() => setScheduleFilter("remote")}
        />
        <p>Удаленная работа</p>
      </div>
      <div className='flex space-x-2'>
        <Input
          type='radio'
          value='30'
          checked={scheduleFilter === "flex"}
          onClick={() => setScheduleFilter("flex")}
          className='mb-0 w-5'
        />
        <p>Гибкий график</p>
      </div>
      <div className='flex space-x-2'>
        <Input
          type='radio'
          value='50'
          checked={scheduleFilter === "change"}
          onClick={() => setScheduleFilter("change")}
          className='mb-0 w-5'
        />
        <p>Сменный график</p>
      </div>
      <div className='flex space-x-2'>
        <Input
          type='radio'
          value='75'
          checked={scheduleFilter === "shift"}
          onClick={() => setScheduleFilter("shift")}
          className='mb-0 w-5'
        />
        <p>Вахтовый метод</p>
      </div>
    </div>
  );
};

export default ScheduleFilter;

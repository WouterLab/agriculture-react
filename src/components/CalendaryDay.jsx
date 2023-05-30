import { useState } from "react";
import { Tooltip } from "react-tooltip";

const CalendaryDay = ({ id, day, event, region }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className='border-2 p-4 w-[150px] h-[150px] cursor-pointer hover:bg-neutral-200 hover:border-green-200 transition-all'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tooltip-id={id}
      data-tooltip-content={`${event}, ${region}`}
    >
      <p className='text-5xl mb-8'>{day}</p>
      {showTooltip && (
        <p className='text-sm transition-all text-neutral-600'>
          Перейти на сайт события
        </p>
      )}
      <Tooltip
        id={id}
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
    </div>
  );
};

export { CalendaryDay };

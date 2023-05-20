import { useState } from "react";
import { Input } from "../ui/Input";

const CityCheckbox = ({ city }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex items-center space-x-2 mb-2'>
      <Input
        type='checkbox'
        style={{ marginBottom: 0, minWidth: 20, minHeight: 20 }}
        className='w-5 h-5'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{city}</p>
    </div>
  );
};

export { CityCheckbox };

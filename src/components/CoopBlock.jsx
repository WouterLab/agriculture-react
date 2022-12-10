import { BriefcaseIcon } from "@heroicons/react/24/outline";

const CoopBlock = ({ job, desc }) => {
  return (
    <div className='bg-gray-100 mb-4 px-2 py-4 rounded-md'>
      <div className='flex items-center'>
        <BriefcaseIcon className='w-12' />
        <p className='font-bold text-2xl'>{job}</p>
      </div>
      <p className='mb-4'>{desc}</p>
      <button className='rounded-2xl px-4 py-2 font-semibold bg-green-400 hover:text-white transition-all duration-300'>Связаться</button>
    </div>
  );
};

export default CoopBlock;

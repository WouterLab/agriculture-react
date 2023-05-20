export const UserAnswer = ({ user, message, date }) => {
  return (
    <div className='p-6 text-xl rounded-xl border-2 my-4'>
      <p className='text-green-500'>{user}:</p>
      <p className='text-neutral-400 mb-4'>{date}</p>
      <div>{message}</div>
    </div>
  );
};

const HomeImage = () => {
  return (
    <div className='relative'>
      <img
        className='w-full rounded-lg max-w-[600px] shadow-2xl'
        src='https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80'
        alt='plants'
      />
      <p className='absolute top-1/3 w-full text-2xl sm:text-5xl inline-block uppercase font-black text-center text-white z-1 shadow-2xl'>
        Agriculture
      </p>
    </div>
  );
};

export { HomeImage };

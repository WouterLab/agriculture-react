const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-2xl bg-green-400 text-2xl px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

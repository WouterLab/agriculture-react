const Input = (props) => {
  return (
    <input
      {...props}
      className={`text-lg focus:outline-none bg-white text-neutral-700 px-8 py-2 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300 mb-2 ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export { Input };

const Textarea = (props) => {
  return (
    <textarea
      {...props}
      className={`text-lg w-3/5 focus:outline-none h-36 bg-white m text-neutral-700 px-8 py-2 placeholder:text-neutral-700 rounded-xl focus:border-green-600 border-green-400 border-2 transition-all duration-300 mb-2 ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export { Textarea };

const Button = ({
  label,
  backgroungColor,
  textColor,
  borderColor,
  textSize,
  hover,
}) => {
  return (
    <button
      className={`mt-8 border
      ${
        backgroungColor
          ? `${backgroungColor} ${textColor} ${borderColor} ${textSize} ${hover}`
          : "border-coral-red bg-coral-red text-white hover:bg-coral-red hover:text-white"
      }
      px-6 py-2 rounded-full text-lg leading-none `}
    >
      {label}
    </button>
  );
};

export default Button;

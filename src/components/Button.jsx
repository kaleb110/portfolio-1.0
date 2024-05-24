const Button = ({
  label
}) => {
  return (
    <div>
      <button className="btn-gradient text-white text-lg px-6 py-2 rounded-full max-sm:w-full">
        {label}
      </button>
    </div>
  );
};

export default Button;


const InputField = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
      />
    </div>
  );
};

export default InputField;

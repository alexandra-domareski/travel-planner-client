interface InputProps {
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "email" | "password" | "number" | "checkbox";
  value?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

const Input = ({
  label,
  onChange,
  type = "text",
  value = "",
  className = "",
  required,
  placeholder,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-md border border-[#D4C8BE] bg-white p-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] ${className}`}
      />
    </div>
  );
};
export default Input;

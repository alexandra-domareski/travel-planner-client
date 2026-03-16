interface InputProps {
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "checkbox"
    | "date"
    | "file";
  value?: string;
  checked?: boolean;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

const Input = ({
  label,
  onChange,
  type = "text",
  value = "",
  checked,
  className = "",
  required,
  placeholder,
}: InputProps) => {
  const isCheckbox = type === "checkbox";

  return (
    <div
      className={`flex ${isCheckbox ? "flex-row items-center gap-2" : "flex-col gap-1"}`}
    >
      {label && (
        <label className="block text-sm font-medium text-[#3A2A1A]">
          {label}
        </label>
      )}
      <input
        type={type}
        value={isCheckbox ? undefined : value}
        checked={isCheckbox ? checked : undefined}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`rounded-md border border-[#D4C8BE] bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] ${
          isCheckbox ? "w-4 h-4" : "w-full p-2"
        } ${className}`}
      />
    </div>
  );
};
export default Input;

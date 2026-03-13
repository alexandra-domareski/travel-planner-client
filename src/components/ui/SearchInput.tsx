import type { ChangeEvent } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const SearchInput = ({ value, onChange, placeholder, className }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder || "Search..."}
      className={`px-3 py-2 border rounded-md w-64 ${className}`}
    />
  );
};
export default SearchInput;

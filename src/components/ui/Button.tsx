import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  const variants = {
    primary: "text-white bg-[#3B82F6] hover:bg-[#60A5FA]",
    secondary:
      "bg-white border border-[#F3F4F6] text-[#1F2937] hover:bg-[#F3F4F6]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md px-4 py-2 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

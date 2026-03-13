interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md px-4 py-2 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#60A5FA] transition ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

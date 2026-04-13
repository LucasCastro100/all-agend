interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'site' | 'dash' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'site', children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50";

  const variants = {
    site: "bg-blue-950 text-blue-100 hover:bg-blue-700 shadow-md",

    dash: "bg-sky-500 text-indigo-950 hover:bg-sky-400 font-bold shadow-[0_0_15px_rgba(14,165,233,0.3)]",

    outline: "border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-100"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
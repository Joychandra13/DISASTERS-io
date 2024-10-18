import { cn } from "../lib";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "py-[8px] px-[25px] mb-1.5 bg-button opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-[6px] text-sm font-Onest",
        className
      )}
    >
      {children}
    </button>
  );
};
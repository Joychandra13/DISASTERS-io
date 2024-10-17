import { cn } from "../lib";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "py-[12.5px] px-[25px] bg-button opacity-90 transition-all delay-150 hover:opacity-100 font-bold text-white rounded-[6px] text-sm font-Onest",
        className
      )}
    >
      {children}
    </button>
  );
};
import { cn } from "../lib";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-[12.5px] px-[25px] bg-button opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-[6px] text-xs font-Onest",
        className
      )}
    >
      {children}
    </button>
  );
};
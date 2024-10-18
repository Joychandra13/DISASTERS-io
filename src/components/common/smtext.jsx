import { cn } from "../lib";

export const SmText = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-secondary text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
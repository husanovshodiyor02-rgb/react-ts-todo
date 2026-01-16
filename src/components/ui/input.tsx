import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
export { Input };

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../lib/utils";

export function Checkbox({ className, ...props }: any) {
  return (
    <CheckboxPrimitive.Root
      className={cn("w-4 h-4 border rounded", className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="bg-black w-full h-full" />
    </CheckboxPrimitive.Root>
  );
}

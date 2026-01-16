import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

export function Progress({ value }: { value: number }) {
  return (
    <ProgressPrimitive.Root className="w-full h-2 bg-gray-200 rounded">
      <ProgressPrimitive.Indicator
        style={{ width: `${value}%` }}
        className="h-full bg-black rounded"
      />
    </ProgressPrimitive.Root>
  );
}

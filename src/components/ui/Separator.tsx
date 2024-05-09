import { cn } from "@/lib/utils";

export default function Separator({ className }: { className?: string }) {
  return <div className={cn("w-full h-[1px] mx-auto bg-zinc-300 dark:bg-zinc-700", className)}></div>;
}

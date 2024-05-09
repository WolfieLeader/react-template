import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa6";

export default function WebIcon({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-warp items-end justify-center", className)}>
      <FaReact className="size-11 mr-0.5 text-sky-500" />
      <span className="flex flex-col items-start">
        <div className="text-2xl leading-4 font-extrabold text-blue-600 dark:text-blue-500">React</div>
        <div className="text-md leading-5 font-medium text-zinc-900 dark:text-zinc-50">Template</div>
      </span>
    </div>
  );
}

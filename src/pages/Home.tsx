import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { FaMeta } from "react-icons/fa6";
import { SiEslint, SiPrettier, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full max-h-full px-6 sm:px-10 md:px-14 mt-0 sm:mt-10">
      <Tools />
      <main className="flex flex-col">
        <h1 className="text-4xl xs:text-5xl font-semibold leading-tight dark:text-zinc-50">
          Tired Of Setting Up <br /> A <span className="text-blue-500">New Project</span> Every Time?🥴
        </h1>
        <h2 className="text-3xl sm:text-[2.65rem] font-normal leading-tight dark:text-zinc-100 mt-4">
          here's The Solution For You!
        </h2>
        <p className="text-[1.75rem] sm:text-4xl font-thin leading-tight">
          Use our well crafted templates and <br /> keep your work-flow going with <br /> no distraction!💯
        </p>
        <div className="text-xl sm:text-2xl font-bold my-6 w-full flex flex-row items-center justify-start">
          <a href="https://github.com/WolfieLeader/react-template" target="_blank" rel="noreferrer">
            <button className="bg-blue-500 text-zinc-50 rounded-2xl py-4 px-4 mx-4">Use Template</button>
          </a>
          <span className="text-blue-600/30 dark:text-blue-400/30">EASY TO USE</span>
        </div>
      </main>
      <Stats />
      <div className="hidden sm:block w-fit absolute right-0 bottom-0 overflow-hidden">
        <Blocks />
      </div>
    </div>
  );
}
function Tools() {
  return (
    <div className="flex flex-row flex-wrap justify-items-center sm:flex-nowrap sm:justify-start gap-3 md:gap-4 mt-8 mb-4">
      <Tool title="TypeScript" Icon={SiTypescript} />
      <Tool title="Vite" Icon={SiVite} />
      <Tool title="Tailwind" Icon={SiTailwindcss} />
      <Tool title="Prettier" Icon={SiPrettier} />
      <Tool title="ESlint" Icon={SiEslint} />
    </div>
  );
}

function Tool({ title, Icon }: { title: string; Icon: IconType }) {
  return (
    <div className="flex flex-row opacity-40 w-max">
      <Icon className="size-6 tiny:size-7 mr-1" />
      <h3 className="text-md tiny:text-xl font-semibold">{title}</h3>
    </div>
  );
}

function Blocks() {
  return (
    <div className="grid grid-cols-4 gap-1.5 rotate-45 translate-x-48 translate-y-52">
      <Block className="bg-blue-500" />
      <Block className="bg-slate-900" />
      <Block className="bg-slate-400" />
      <Block className="bg-slate-600" />
      <Block className="bg-blue-500" />
      <Block className="bg-slate-300" />
      <Block className="bg-slate-400" />
      <Block className="bg-slate-800" />
      <Block className="bg-slate-400" />
      <Block className="bg-slate-500" />
      <Block className="bg-slate-800" />
      <Block className="bg-transparent" />
      <Block className="bg-slate-300" />
      <Block className="bg-slate-800" />
      <Block className="bg-blue-500" />
      <Block className="bg-transparent" />
      <Block className="bg-blue-500" />
      <Block className="bg-slate-100" />
      <Block className="bg-slate-700" />
    </div>
  );
}

function Block({ className }: { className?: string }) {
  return <div className={cn("size-[clamp(5rem,12vw,9rem)] rounded-xl", className)}></div>;
}

function Stats() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-5">
      <div className="flex flex-col text-lg font-semibold pt-2">
        <div className="text-xs">Developed By:</div>
        <div className="flex flex-row -mt-1 ml-4">
          <FaMeta className="size-8 text-blue-500 mr-0.5" />
          Meta
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <Stat title="17.8M" subTitle="Downloads" />
        <Stat title="1.6K" subTitle="Contributors" />
        <Stat title="18.2.0" subTitle="Current Version" />
      </div>
    </div>
  );
}

function Stat({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-85% to-blue-900">
        {title}
      </div>
      <div className="-mt-2.5 font-semibold text-sm sm:text-md">{subTitle}</div>
    </div>
  );
}

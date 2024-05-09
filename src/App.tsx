import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import "./styles/tailwind.css";

// ! Add all your page components here like so
const Home = lazy(() => import("./pages/Home"));

// ! Add all your components here
import Loading from "./pages/Loading";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="relative w-full h-full min-h-svh max-h-screen text-zinc-900 dark:text-zinc-200">
      <Suspense fallback={<Loading />}>
        <div className="w-full h-full bg-gradient-to-br from-purple-200 dark:from-blue-950 via-30% dark:via-0% via-blue-200 to-55% to-zinc-200 dark:to-slate-900">
          <div className="flex flex-col max-w-screen-2xl mx-auto">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

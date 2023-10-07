import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";
import ThemeProvider from "./providers/ThemeProvider";

import Loading from "./pages/Loading";
import NavBar from "./components/NavBar";

// * Import Here Any Page Component
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen w-screen flex-col px-6 md:px-20 text-text-lightMode dark:text-text-darkMode bg-background-lightMode dark:bg-background-darkMode">
        <Suspense fallback={<Loading />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;

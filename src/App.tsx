import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";

import ThemeProvider from "./providers/ThemeProvider";

import NavBar from "./components/NavBar";
import Loading from "./pages/Loading";

// * Import Here Any Page Component
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen text-textColor bg-backgroundColor">
        <NavBar />
        <Suspense fallback={<Loading />}>
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

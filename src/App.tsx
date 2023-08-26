import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";

import Loading from "./pages/Loading";
import NavBar from "./components/NavBar";

// * Import Here Any Page Component
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

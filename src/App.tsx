import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardClasses from "./pages/CardClasses";
import CardState from "./context/CardState";

function App() {
  return (
    <CardState>
      <div className="bg-primary-background bg-cover bg-no-repeat bg-center min-h-screen ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/choose-card-type" element={<CardClasses />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CardState>
  );
}

export default App;

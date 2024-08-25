import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

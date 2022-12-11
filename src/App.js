import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "./components/index";
import {
  Home,
  FourZeroFour,
} from "./pages/index";
import "./App.css";



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route index element={<Home />} />
          
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

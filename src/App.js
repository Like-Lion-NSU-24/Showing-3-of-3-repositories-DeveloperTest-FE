import { Route, Routes } from "react-router-dom";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Test from "./test/Input.js";
import Result from "./result/result.js"; 
import React from 'react';
import Inquiry from "./inquiry/inquiry.js";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/result" element={<Result />} /> 
      </Routes>
    </div>
  );
}

export default App;

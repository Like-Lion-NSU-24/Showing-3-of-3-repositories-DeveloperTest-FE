import { Route, Routes } from "react-router-dom";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Test from "./test/Input.js";
import Inquiry from "./inquiry/inquiry.js";
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/result" element={<result />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Test from "./test/test.js";
import Inquiry from "./inquiry/inquiry.js";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </div>
  );
}

export default App;

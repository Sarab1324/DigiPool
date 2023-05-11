import DashBoard from "./components/DashBoard";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import "./style.css";
import Partners from "./components/Partners";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<DashBoard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/for-partners" element={<Partners />} /> */}
      </Routes>
    </>
  );
}

export default App;

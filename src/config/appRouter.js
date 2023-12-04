import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Profile from "../pages/profile";
import Setting from "../pages/Setting";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/form" element={<Profile/>} /> 
      <Route path="/setting" element={<Setting/>}/>
    </Routes>
  );
};

export default AppRouters;

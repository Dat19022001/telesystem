import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Profile from "../pages/profile";
import Setting from "../pages/Setting";
import Login from "../pages/login";
import Register from "../pages/Register";
import ForgotPass from "../pages/forgotPass";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/form" element={<Profile/>} /> 
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/dashboard" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotPass" element={<ForgotPass/>}/>
    </Routes>
  );
};

export default AppRouters;

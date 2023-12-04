import { useState } from "react";
import Information from "./components/infomation";
import "./style.scss";
import Automatic from "./components/automatic";
const Setting = () => {
  const [tab, setTab] = useState("1");
  return (
    <div className="Setting">
      <div className="Setting-menu">
        <div
          className={`Setting-item ${tab === "1" ? "active" : ""}`}
          onClick={() => setTab("1")}
        >
          {" "}
          Thông tin người dùng
        </div>
        <div
          className={`Setting-item ${tab === "2" ? "active" : ""}`}
          onClick={() => setTab("2")}
        >
          {" "}
          Tự động hóa
        </div>
      </div>
      <div className="Setting-content">
        {tab === "1" ? <Information /> : <Automatic />}
      </div>
    </div>
  );
};
export default Setting;

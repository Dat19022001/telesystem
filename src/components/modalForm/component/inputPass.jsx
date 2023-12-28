import "./inputPass.scss";
import Eye from "../../../asset/Eye.png";
import EyeClose from "../../../asset/Eye-close.png";
import { useState } from "react";

const InputForm = ({ data }) => {
  const [showPass, setShowPass] = useState(true);
  const handleChange = (e) => {
    if (data.check === "Email") {
      data.handleUrl(e.target.value);
    }
    if (data.check === "Password") {
      data.handlePass(e.target.value);
    }
    if (data.check === "forgotPass") {
      data.handleEmail(e.target.value);
    }
  };
  return (
    <div className="inputPass">
      <div className="inputPass-content">
        <label>{data.title}</label>
        <input
        value={data.value}
          placeholder={data.placeholder}
          type={showPass ? data.type : "text"}
          onChange={handleChange}
        />
      </div>
      <div className="inputPass-icon">
        {data.icon && (
          <div> 
            {showPass ? (
              <img src={Eye} alt=""  onClick={()=> setShowPass(false)} />
            ) : (
              <img src={EyeClose} alt=""  onClick={()=> setShowPass(true)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;

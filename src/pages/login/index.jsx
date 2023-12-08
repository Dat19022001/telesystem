import InputForm from "../../components/modalForm/component/inputPass";
import Btn from "../../components/modalForm/component/btn";
import ModalForm from "../../components/modalForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutoRegister,
  setDisplayName,
  setOutboundProxy,
  setPassword,
  setSipUri,
} from "../../actions/stateActions";
import { useContext, useState } from "react";
import SipCallerContext from "../../sipCallerContext";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const sipCaller = useContext(SipCallerContext);
  const {autoRegister} = useSelector(states => states.user)
  const [url, setUrl] = useState("");
  const handleUrl = (value) => {
    setUrl(value);
  };
  const [pass, setPass] = useState("");
  const handlePass = (value) => {
    setPass(value);
  };
  const Register = () => {
    dispatch(setDisplayName({ displayName: "Dat" }));
    dispatch(setSipUri({ sipUri: url }));
    dispatch(setPassword({ password: pass }));
    dispatch(setOutboundProxy({ outboundProxy: "wss://fsivietnam.com.vn:8089/ws" }));
    sipCaller.register();
    dispatch(setAutoRegister({autoRegister:!autoRegister}))
    navigate("/dashboard", { replace: true })
  };
  
  return (
    <ModalForm
      data={{
        title: "Đăng nhập",
        sub: "Vui lòng nhập thông tin để truy cập hệ thống",
      }}
    >
      <InputForm
        data={{
          title: "Email",
          placeholder: "user1@techcombank.com.vn",
          type: "text",
          handleUrl ,
        }}
      />
      <InputForm
        data={{
          title: "Password",
          placeholder: "*******",
          type: "password",
          handlePass,
        }}
      />
      <div className="ModalForm-sub">
        <div className="ModalForm-checkBox">
          <input type="Checkbox" />
          <label>Ghi nhớ</label>
        </div>
        <Link to="/">
          <span>Quên mật khẩu ?</span>
        </Link>
      </div>
      <Btn title={"Đăng nhập"} link="/dashboard" register={Register} />
    </ModalForm>
  );
};
export default Login;

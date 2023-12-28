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
import { useContext, useEffect, useState } from "react";
import SipCallerContext from "../../sipCallerContext";
import { setRemember } from "../../reducers/appReduce";
import { setMenuActive } from "../../reducers/dashboard";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sipCaller = useContext(SipCallerContext);
  const {remember} = useSelector(states => states.appReduce)
  const {sipUri,password} = useSelector(states => states.user)

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
    dispatch(
      setOutboundProxy({ outboundProxy: "wss://fsivietnam.com.vn:8089/ws" })
    );
    sipCaller.register();
    dispatch(setAutoRegister({ autoRegister: true }));
    dispatch(setMenuActive("Home"))
    navigate("/dashboard", { replace: true });
  };
  useEffect(()=>{
    if(remember){
      setPass(password)
      setUrl(sipUri)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <ModalForm
      data={{
        title: "Đăng nhập",
        sub: "Vui lòng nhập thông tin để truy cập hệ thống",
      }}
    >
      <InputForm
        data={{
          value: url,
          check: "Email",
          title: "Email",
          placeholder: "user1@techcombank.com.vn",
          type: "text",
          handleUrl,
        }}
      />
      <InputForm
        data={{
          value: pass,
          check:"Password",
          title: "Mật Khẩu",
          placeholder: "*******",
          type: "password",
          icon: true,
          handlePass,
        }}
      />
      <div className="ModalForm-sub">
        <div className="ModalForm-checkBox">
          <input type="checkbox" id="myCheckbox" onClick={()=> dispatch(setRemember(!remember))} checked={remember} />
          <label for="myCheckbox" className="custom-checkbox">Ghi nhớ</label>
        </div>
        <Link to="/forgotPass">
          <span>Quên mật khẩu ?</span>
        </Link>
      </div>
      <Btn title={"Đăng nhập"} link="/dashboard" register={Register} />
    </ModalForm>
  );
};
export default Login;

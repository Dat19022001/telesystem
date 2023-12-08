import ArrowDown from "../../asset/Arrow - Down 2.png";
import Online from "../../asset/Ellipse 2.png";
import Notification from "../../asset/Notify.png";
import Calling from "../../asset/Calling.png";
import Avatar from "../../asset/Image-60.png";
import Checkbox from "../../asset/checkbox.png";
import "./header.scss";
import { useDispatch } from "react-redux";
import Form from "../form";
import { setCall } from "../../reducers/appReduce";
// import {
//   setDisplayName,
//   setOutboundProxy,
//   setPassword,
//   setSipUri,
// } from "../../actions/stateActions";

const Header = () => {
  // const sipCaller = new SipCaller();
  const dispatch = useDispatch();
  // const Register = (sipUri, password, displayName, outboundProxy) => {
  //   dispatch(setDisplayName({ displayName: displayName }));
  //   dispatch(setSipUri({ sipUri: sipUri }));
  //   dispatch(setPassword({ password: password }));
  //   dispatch(setOutboundProxy({ outboundProxy: outboundProxy }));
  //   sipCaller.register();
  // };

  return (
    <div className="header">
      <Form />
      <div className="header-select">
        <div className="header-checkbox">
          <img className="header-input" src={Checkbox} alt="checkbox" />
          <label>Sẵn sàng</label>
        </div>
        <img className="header-arrow" src={ArrowDown} alt="ArrowDown" />
      </div>
      <div className="header-select">
        <div className="header-checkbox">
          <img className="header-online" src={Online} alt="Online" />
          <label>Sẵn sàng</label>
        </div>
        <img className="header-arrow" src={ArrowDown} alt="ArrowDown" />
      </div>
      <div
        className="header-Notification"
        // onClick={() =>
        //   Register(
        //     // displayName,
        //     // password,
        //     "Dat",
        //     "wss://fsivietnam.com.vn:8089/ws"
        //   )
        // }
      >
        <img src={Notification} alt="Notification" />
      </div>
      <div
        className="header-call"
        onClick={() => {
          dispatch(setCall(true))
        }}
      >
        <img src={Calling} alt="Calling" />
      </div>
      <div className="header-acount">
        <img src={Avatar} alt="Avatar" />
        <div className="header-info">
          <p className="header-name">Teckcombank</p>
          <span className="header-email">nguyenthedat1902@gmai.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

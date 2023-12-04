import ArrowDown from "../../asset/Arrow - Down 2.png";
import Online from "../../asset/Ellipse 2.png";
import Notification from "../../asset/Notify.png";
import Calling from "../../asset/Calling.png";
import Avatar from "../../asset/Image-60.png";
import Checkbox from "../../asset/checkbox.png";
import "./header.scss";
// import SipCaller from "../../sipCaller";
import { useDispatch, useSelector} from "react-redux";
import { setOpenModal } from "../../redux/slice/appReduce";
import Form from "../form";
// import {
//   setDisplayName,
//   setOutboundProxy,
//   setPassword,
//   setSipUri,
// } from "../../actions/stateActions";
const Header = () => {
  // const sipCaller = new SipCaller();
  // const dispatch = useDispatch();
  // const Register = (sipUri, password, displayName, outboundProxy) => {
  //   dispatch(setDisplayName({ displayName: displayName }));
  //   dispatch(setSipUri({sipUri: sipUri}));
  //   dispatch(setPassword({password: password}));
  //   dispatch(setOutboundProxy({outboundProxy: outboundProxy}));
  //   sipCaller.register();
  // };
  // const Call = (requestUri) => {
  //   // console.log(sipCaller)
  //   sipCaller.invite(requestUri, "1");
  // };
  const {openModal} = useSelector(states => states.appReduce)
  const dispatch = useDispatch()
  const handleOpen = ()=> {
    dispatch(setOpenModal(!openModal))
  }
  return (
    <div className="header">
      <Form/>
      <div className="header-select">
        <div className="header-checkbox">
          {/* <input type="checkbox" /> */}
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
        //     "sip:dat@192.168.12.21",
        //     "dat",
        //     "Dat",
        //     "wss://fsivietnam.com.vn:8089/ws"
        //   )
        // }
      >
        <img src={Notification} alt="Notification" />
      </div>
      <div
        className="header-call"
        onClick={() => handleOpen()}
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

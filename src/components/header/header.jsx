import ArrowDown from "../../asset/Arrow - Down 2.png";
import Online from "../../asset/Ellipse 2.png";
import Notification from "../../asset/Notify.png";
import Calling from "../../asset/Calling.png";
import Avatar from "../../asset/Image-60.png";
import Checkbox from "../../asset/checkbox.png";
import Beak from "../../asset/beak.png";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import Form from "../form";
import { setCall } from "../../reducers/appReduce";

const Header = () => {
  const { autoReceived,call } = useSelector((states) => states.appReduce);
  const dispatch = useDispatch();
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
      <div className="header-Notification">
        <img src={Notification} alt="Notification" />
      </div>
      <div
        className={`header-call ${autoReceived ? "header-call-active" : ""}  `}
        onClick={() => {
          dispatch(setCall(!call));
        }}
      >
        <img src={Calling} alt="Calling" />
        <div className="header-hover">
          <img src={Beak} alt="Beak" />
          <div className="hover-content">
            <p>Đã kết nối với:</p>
            <span>0869394765</span>
          </div>
        </div>
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

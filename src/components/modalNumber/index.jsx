import Rectangle from "../../asset/Rectangle 1.png";
import Setting from "../../asset/lets-icons_setting-line-light.png";
import Polygon from "../../asset/Polygon 2.png";
import CallAgree from "../../asset/CallAgree.png";
import Widget from "../../asset/Widget.png";
import Account from "../../asset/User Rounded.png";
import Close from "../../asset/Close_square_light.png";
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import SipCallerContext from "../../sipCallerContext";
import { setCall } from "../../reducers/appReduce";
const ModalNumber = () => {
  const {call} = useSelector(states => states.appReduce)
  const sipCaller = useContext(SipCallerContext);
  const dispatch = useDispatch()
   const Call = (requestUri) => {
    sipCaller.invite(requestUri, "1");
    dispatch(setCall(false))
  };
  return (
    <div className={`answered modal number ${call ? "number-active" : ""}`}>
      <div className="modal-title" onClick={()=>  dispatch(setCall(false))}>
        <div className="modal-name">Le Thi Soa</div>
        <div className="modal-icon">
          <img className="modal-rectangle" src={Rectangle} alt="Rectangle" />
          <img className="modal-setting" src={Setting} alt="Setting" />
          <img className="modal-polygon" src={Polygon} alt="Polygon" />
        </div>
      </div>
      <div className="number-body">
        <div className="number-input">
          <input placeholder="+8491575541" />
          <img src={Close} alt="close" />
        </div>
        <div className="number-content">
          <div className="number-item">
            <p>1</p>
            <span></span>
          </div>
          <div className="number-item">
            <p>2</p>
            <span>ABC</span>
          </div>
          <div className="number-item">
            <p>3</p>
            <span>DEF</span>
          </div>
          <div className="number-item">
            <p>4</p>
            <span>GHI</span>
          </div>
          <div className="number-item">
            <p>5</p>
            <span>JKL</span>
          </div>
          <div className="number-item">
            <p>6</p>
            <span>MNO</span>
          </div>
          <div className="number-item">
            <p>7</p>
            <span>PQRS</span>
          </div>
          <div className="number-item">
            <p>8</p>
            <span>TUV</span>
          </div>
          <div className="number-item">
            <p>9</p>
            <span>WXYZ</span>
          </div>
          <div className="number-item">
            <p>*</p>
            <span></span>
          </div>
          <div className="number-item">
            <p>0</p>
            <span></span>
          </div>
          <div className="number-item">
            <p>#</p>
            <span></span>
          </div>
        </div>
        <div className="number-phone">
          <span>Sử dựng số</span>
          <div className="phone-item">
            <p>+8491575541</p>
            <strong>+8491575541</strong>
          </div>
        </div>
      </div>

      <div className="answered-footer">
        <img src={Widget} alt="Rectangle" />
        <img
          className="answered-call"
          src={CallAgree}
          alt="Setting"
          style={{top: -25,left:"38%"}}
          onClick={() => Call("sip:webrtc_client@192.168.16.21")}
        />
        <img src={Account} alt="Polygon" />
      </div>
    </div>
  );
};
export default ModalNumber;

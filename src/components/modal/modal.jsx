import Rectangle from "../../asset/Rectangle 1.png";
import Setting from "../../asset/lets-icons_setting-line-light.png";
import Polygon from "../../asset/Polygon 2.png";
import Call from "../../asset/Call.png";
import CallAgree from "../../asset/CallAgree.png";

import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswered,
  setCall,
  setOpenModal,
} from "../../redux/slice/appReduce";
import { useNavigate } from "react-router-dom";
const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal, collapse } = useSelector((states) => states.appReduce);
  const handleAnswered = () => {
    dispatch(setAnswered(true));
    dispatch(setOpenModal(false));
    dispatch(setCall(true));
    navigate("/form", { replace: true });
  };
  const handleClose = () => {
    dispatch(setOpenModal(false));
  };
  return (
    <div className={`modal ${openModal ? "modal-active" : ""}`}>
      <div className="modal-title">
        <div className="modal-name">Le Thi Soa</div>
        <div className="modal-icon">
          <img className="modal-rectangle" src={Rectangle} alt="Rectangle" />
          <img className="modal-setting" src={Setting} alt="Setting" />
          <img className="modal-polygon" src={Polygon} alt="Polygon" />
        </div>
      </div>
      <div className="modal-content">
        <div className="modal-info">
          <div className="modal-header">
            <p>Cuộc gọi đến</p>
          </div>

          <div className="modal-time">00:12</div>
        </div>
        <p className="modal-caller">Anh Vu</p>
        <div style={{ marginBottom: 34 }}>
          <span className="modal-phone">via</span>
          <strong>842873030065</strong>
        </div>
        <div
          className={`modal-InformationCaller ${
            collapse ? "modal-InformationCaller-active" : ""
          }`}
        >
          <p className="modal-InfoName">Nguyen Anh Vu</p>
          <p className="modal-InfoName">CID: 989312</p>
          <p className="modal-InfoName"> Camp: 98122</p>
        </div>
      </div>
      <div className="modal-iconCall">
        <div className="modal-refuse">
          <img src={Call} alt="call" onClick={() => handleClose()} />
          <div className="modal-point1  modal-point"></div>
          <div className="modal-point2 modal-point"></div>
          <div className="modal-point3 modal-point"></div>
          <div className="modal-point4 modal-point"></div>
        </div>
        <div className="modal-agree">
          <div className="modal-point4  modal-point"></div>
          <div className="modal-point3 modal-point"></div>
          <div className="modal-point3 modal-point"></div>
          <div className="modal-point1 modal-point"></div>
          <img src={CallAgree} alt="call" onClick={() => handleAnswered()} />
        </div>
      </div>
    </div>
  );
};
export default Modal;

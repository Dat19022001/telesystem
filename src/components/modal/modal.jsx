import Rectangle from "../../asset/Rectangle 1.png";
import Setting from "../../asset/lets-icons_setting-line-light.png";
import Polygon from "../../asset/Polygon 2.png";
import Call from "../../asset/Call.png";
import CallAgree from "../../asset/CallAgree.png";
import * as sessionStates from "../../sessionStates";
import { v4 as uuidv4 } from "uuid";
import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  // setAnswered,
  // setCall,
  // setOpenModal,
} from "../../redux/slice/appReduce";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SipCallerContext from "../../sipCallerContext";
import { setFormId, setTab } from "../../reducers/appReduce";

const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sipCaller = useContext(SipCallerContext);
  const { collapse } = useSelector((states) => states.appReduce);
  const sessions = useSelector((state) => state.sessions);

  const incomingSessions = Object.values(sessions).filter(
    (session) =>
      session.sessionState === sessionStates.NEW &&
      session.direction === sessionStates.INCOMING
  );

  const generateRandomId = () => {
    return uuidv4();
  };
  const random = () => {
    const randomFraction = Math.random();

    const randomChar = randomFraction < 0.5 ? "1" : "2";

    return randomChar;
  };

  const handleAnswered = (data) => {
    dispatch(setTab(data));
    // dispatch(setCall(true));
    navigate("/form", { replace: true });
  };
  return (
    <div
      className={`modal ${incomingSessions.length !== 0 ? "modal-active" : ""}`}
    >
      {incomingSessions.map((session, index) => (
        <div key={index}>
          <div className="modal-title">
            <div className="modal-name">Le Thi Soa</div>
            <div className="modal-icon">
              <img
                className="modal-rectangle"
                
                src={Rectangle}
                alt="Rectangle"
              />
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
            <div
              className="modal-refuse"
              onClick={() => sipCaller.terminate(session.sipSession)}
            >
              <img src={Call} alt="call" />
              <div className="modal-point1  modal-point"></div>
              <div className="modal-point2 modal-point"></div>
              <div className="modal-point3 modal-point"></div>
              <div className="modal-point4 modal-point"></div>
            </div>
            <div
              className="modal-agree"
              onClick={() => {
                const id = generateRandomId()
                const data = {
                  id: id,
                  phone: "0869394765",
                  form: random(),
                };
                dispatch(setFormId(id))
                handleAnswered(data);
                sipCaller.accept(session.sipSession);
              }}
            >
              <div className="modal-point4  modal-point"></div>
              <div className="modal-point3 modal-point"></div>
              <div className="modal-point3 modal-point"></div>
              <div className="modal-point1 modal-point"></div>
              <img
                src={CallAgree}
                alt="call"
                // onClick={() => handleAnswered()}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Modal;

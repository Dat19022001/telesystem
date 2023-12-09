import Rectangle from "../../asset/Rectangle 1.png";
import Setting from "../../asset/lets-icons_setting-line-light.png";
import Polygon from "../../asset/Polygon 2.png";
import Micro from "../../asset/MicrophoneSlash.png";
import Pause from "../../asset/Pause.png";
import DotsNine from "../../asset/DotsNine.png";
import Share from "../../asset/ShareNetwork.png";
import Plus from "../../asset/Plus.png";
import Widget from "../../asset/Widget.png";
import Call from "../../asset/Call-off.png";
import Account from "../../asset/User Rounded.png";
import "./style.scss";
import { useSelector } from "react-redux";

import MediaView from "./components/MediaView";
import { useContext} from "react";
import SipCallerContext from "../../sipCallerContext";
import * as sessionStates from "../../sessionStates";


const ModalAnswered = () => {
  const sipCaller = useContext(SipCallerContext);
  const sessions = useSelector((states) => states.sessions);
  const { currentSession } = useSelector((states) => states.userStatus);
  const session = sessions[currentSession];
  console.log(session)
  return (
    <div
      className={`modal answered ${
        session && session.remoteStream && (session.sessionState === sessionStates.ACCEPTED) ? "answered-active" : ""
      }`}
    >
      <div className="modal-title">
        <div className="modal-name">Le Thi Soa</div>
        <div className="modal-icon">
          <img className="modal-rectangle" src={Rectangle} alt="Rectangle" style={{cursor:"pointer"}} />
          <img className="modal-setting" src={Setting} alt="Setting" />
          <img className="modal-polygon" src={Polygon} alt="Polygon" />
        </div>
      </div>
      <div className={`modal-content`}>
        <div className="modal-info">
          <div className="modal-header">
            <p>Đã Trả lời</p>
          </div>

          <div className="modal-time">00:12</div>
        </div>
        <p className="modal-caller">Anh Vu</p>
        <div style={{ marginBottom: 34 }}>
          <span className="modal-phone">via</span>
          <strong>842873030065</strong>
        </div>
        {session && session.remoteStream && (
          <MediaView mediaStream={session.remoteStream} />
        )}

        <div className="answered-tool">
          <img src={Micro} alt="Micro" />
          <img src={Pause} alt="Pause" />
          <img src={DotsNine} alt="Micro" />
          <img src={Share} alt="Share" />
          <img src={Plus} alt="Plus" />
        </div>
        <div className={`modal-InformationCaller`}>
          <p className="modal-InfoName">Nguyen Anh Vu</p>
          <p className="modal-InfoName">CID: 989312</p>
          <p className="modal-InfoName"> Camp: 98122</p>
        </div>
        <div className="answered-footer">
          <img src={Widget} alt="Rectangle" />
          <img
            className="answered-call"
            src={Call}
            alt="Setting"
            onClick={() => sipCaller.terminate(session.sipSession)}
          />
          <img src={Account} alt="Polygon" />
        </div>
      </div>
    </div>
  );
};
export default ModalAnswered;

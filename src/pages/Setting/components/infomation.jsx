import Avatar from "../../../asset/Image-60.png";
import Edit from "../../../asset/Edit-info.png";
import Save from "../../../asset/save.png";
import Lock from "../../../asset/Lock.png"

import "./infomation.scss";
import { useDispatch } from "react-redux";
import { setChangePass } from "../../../redux/slice/appReduce";
const Information = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setChangePass(true));
  };
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-avatar">
          <img className="information-img" src={Avatar} alt="avatar" />
          <div className="information-edit">
            <img src={Edit} alt="edit" />
          </div>

          <p>Techcombank</p>
        </div>
        <div className="information-form">
          <div className="information-item">
            <div className="contract-input information-input">
              <label>ĐT cố định</label>
              <input placeholder="1000000035" />
            </div>
            <div className="contract-input information-input">
              <label>ĐT cố định</label>
              <input placeholder="1000000035" />
            </div>
          </div>
          <div className="information-item">
            <div className="contract-input information-input">
              <label>ĐT cố định</label>
              <input placeholder="1000000035" />
            </div>
            <div className="contract-input information-input">
              <label>Mật khẩu</label>
              <div className="information-pass">
                <input placeholder="*******" type="password" />
                <div className="information-change" onClick={()=> handleOpen()}>
                  <p>Đổi mật khẩu</p>
                  <img src={Lock} alt="lock"/>
                </div>
              </div>
            </div>
          </div>
          <div className="information-item">
            <div className="contract-input information-input">
              <label>ĐT cố định</label>
              <input placeholder="1000000035" style={{ width: "46%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="information-footer">
        <div className="information-btn">
          <img src={Save} alt="save" />
          Lưu tác nghiệp
        </div>
      </div>
    </div>
  );
};
export default Information;

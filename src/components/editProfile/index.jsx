import { useDispatch, useSelector } from "react-redux";
import Close from "../../asset/Close_square_light.png";

import "./style.scss";
import { setEditProfile } from "../../redux/slice/appReduce";

const EditProfile = () => {
  const dispatch = useDispatch()
  const {editProfile} = useSelector(states => states.appReduce)
  const handClose = () => {
    dispatch(setEditProfile(false))
  }
  return (
    <div className={`edit ${editProfile ? "edit-active" : ""} `}>
      <div className="edit-body">
        <div className="edit-header">
          <p>Danh sách đối tượng</p>
          <img src={Close} alt="close" onClick={()=> handClose()} />
        </div>
        <div className="edit-content">
          <div className="edit-title">Cập nhật danh sách đối tượng</div>
          <div className="edit-form">
            <div className="edit-item" style={{ width: "30%" }}>
              <div className="contract-input">
                <label>Tên</label>
                <input placeholder="1000000035" />
              </div>
              <div className="contract-input">
                <label>Chức vụ</label>
                <input placeholder="1000000035" />
              </div>
              <div className="contract-input">
                <label>Doanh nghiệp</label>
                <input placeholder="1000000035" />
              </div>
            </div>
            <div className="edit-item" style={{ width: "30%" }}>
              <div className="contract-input">
                <label>ĐT cố định</label>
                <input placeholder="1000000035" />
              </div>
              <div className="contract-input">
                <label>ĐT cố định</label>
                <input placeholder="1000000035" />
              </div>
              <div className="contract-input">
                <label>ĐT cố định</label>
                <input placeholder="1000000035" />
              </div>
            </div>
            <div className="edit-item" style={{ width: "30%" }}>
              <div className="contract-input edit-input">
                <label>ĐT cố định</label>
                <input placeholder="1000000035" />
              </div>
            </div>
          </div>
        </div>
        <div className="edit-footer">
          <div className="edit-btn">Xác nhận</div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

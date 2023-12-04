import { useDispatch, useSelector } from "react-redux";
import Close from "../../asset/Close_square_light.png";
import { setChangePass } from "../../redux/slice/appReduce";
const ChangePass = () => {
  const dispatch = useDispatch()
  const {changePass} = useSelector(states => states.appReduce)
  
  const handClose = () => {
    dispatch(setChangePass(false))
  }
  return (
    <div className={`edit ${changePass ? "edit-active" : ""}`}>
      <div className="edit-body changePass" style={{ width: 330 }}>
        <div className="edit-header">
          <p>Xác nhận mật khẩu</p>
          <img src={Close} alt="close" onClick={()=> handClose()} />
        </div>
        <div className="edit-content">
          <div className="edit-title">
            Nhập mật khẩu cũ để thực hiện thao tác.
          </div>
          <div className="edit-form" style={{ display: "block" }}>
            <div className="edit-item">
              <div className="contract-input">
                <label>Mật khẩu</label>
                <input placeholder="******" type="password" />
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

export default ChangePass;

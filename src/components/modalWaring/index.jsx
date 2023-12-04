import Close from "../../asset/Close_square_light.png";
import IconWaring from "../../asset/close-circle.png";

const ModalWaring = () => {
  return (
    <div className="edit">
      <div className="edit-success edit-waring">
        <div className="edit-header">
          <div className="edit-icon">
            <img src={IconWaring} alt="success" />
            <p>Cập nhập thành công</p>
          </div>
          <img src={Close} alt="close" />
        </div>
        <div className="edit-content">
          <div className="edit-title">
            Thông tin không được cập nhật lên hệ thống.
          </div>
        </div>
        <div className="edit-footer">
          <div className="edit-btn">Xác nhận</div>
        </div>
      </div>
    </div>
  );
};

export default ModalWaring;

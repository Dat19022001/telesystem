import Close from "../../asset/Close_square_light.png";
import IconSuccess from "../../asset/check-circle.png";

const ModalSuccess = () => {
  return (
    <div className="edit">
      <div className="edit-success">
        <div className="edit-header">
          <div className="edit-icon">
            <img src={IconSuccess} alt="success" />
            <p>Cập nhập thành công</p>
          </div>
          <img src={Close} alt="close" />
        </div>
        <div className="edit-content">
          <div className="edit-title">Thông tin đã được cập nhật lên hệ thống.</div>
        </div>
        <div className="edit-footer">
          <div className="edit-btn">Xác nhận</div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;

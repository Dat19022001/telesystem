import Logo from "../../asset/login.png";
import "./styles.scss";
import { Link } from "react-router-dom";

const ModalForm = ({ data, children }) => {
  return (
    <div className="ModalForm ">
      <div className="ModalForm-title">
        <img src={Logo} alt="Logo" />
        <p>Techcombank</p>
      </div>
      <div className="ModalForm-form">
        <strong>{data.title}</strong>
        <p>{data.sub}</p>
        {children}

        {data.title === "Đăng nhập" ? (
          <div className="ModalForm-register">
            Chưa có tài khoản?
            <Link to="/register">
              <span>Đăng ký</span>
            </Link>
          </div>
        ) : (
          <div className="ModalForm-register">
            Đã có tài khoản?
            <Link to="/">
              <span>Đăng Nhập</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default ModalForm;

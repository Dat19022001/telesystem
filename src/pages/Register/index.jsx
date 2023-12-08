import InputForm from "../../components/modalForm/component/inputPass";
import ModalForm from "../../components/modalForm";
import Btn from "../../components/modalForm/component/btn";

const Register = () => {
  return (
    <ModalForm
      data={{
        title: "Đăng ký",
        sub: "Vui lòng nhập thông tin để truy cập hệ thống",
      }}
    >
      <InputForm
        data={{
          title: "Email",
          placeholder: "user1@techcombank.com.vn",
          type: "text",
        }}
      />
       <InputForm
        data={{
          title: "Số máy lẻ",
          placeholder: "-",
          type: "text",
        }}
      />
      <InputForm
        data={{ title: "Mật khẩu", placeholder: "*******", type: "password" }}
      />
       <InputForm
        data={{ title: "Nhập lại mật khẩu", placeholder: "*******", type: "password" }}
      />
      <Btn title={"Đăng Ký"} link="/" />
    </ModalForm>
  );
};
export default Register;

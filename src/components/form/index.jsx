import Logo from "../../asset/image 2.png";
import Logo2 from "../../asset/image3.png";
import Close from "../../asset/Close_square_light.png";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../redux/slice/appReduce";
const Form = () => {
  const { tab,call } = useSelector((states) => states.appReduce);
  const dispatch = useDispatch()
  const handleTab = (value) => {
    dispatch(setTab(value))
  }
  return (
    <div className={`form ${call ? "form-check": ""}`}>
      <div className={`form-item ${tab === "1" ? "form-active" : ""}`} onClick={()=> handleTab("1")}>
        {tab === "1" ? (
          <img src={Logo} alt="logo" />
        ) : (
          <img src={Logo2} alt="logo" />
        )}

        <p>Cuộc gọi từ +84 23...</p>
        <img src={Close} alt="Close" />
      </div>
      <div className={`form-item ${tab === "2" ? "form-active" : ""}`} onClick={()=> handleTab("2")}>
        {tab === "2" ? (
          <img src={Logo} alt="logo" />
        ) : (
          <img src={Logo2} alt="logo" />
        )}
        <p>Cuộc gọi từ +84 23...</p>
        <img src={Close} alt="Close" />
      </div>
    </div>
  );
};
export default Form;

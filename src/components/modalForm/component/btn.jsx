// import { useNavigate } from "react-router-dom";
import "./btn.scss";
const Btn = ({ title,link,register }) => {
  // console.log(register)
  // const navigate = useNavigate()
  return <div className="btn" onClick={()=>  register()}>{title}</div>;
};
export default Btn;

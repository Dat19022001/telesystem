import Logo from "../../asset/imageForm.png";
import Logo2 from "../../asset/image3.png";
import Close from "../../asset/Close_square_light.png";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
// import { setTab } from "../../redux/slice/appReduce";
import { useEffect, useState } from "react";
import { setDeleteTab, setFormId } from "../../reducers/appReduce";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const { tabs, formId } = useSelector((states) => states.appReduce);
  const [active, setActive] = useState("");
  const [close, setClose] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTab = (id) => {
    setActive(id);
    dispatch(setFormId(id))
  };
  const closeTab = (id) => {
    dispatch(setDeleteTab(id));
    if (id === active) {
      if (tabs.length === 1) {
        navigate("/dashboard", { replace: true });
      }
      dispatch(setFormId(tabs[tabs.length - 1].id));
      setClose(!close);
    }
  };
  useEffect(() => {
    setActive(formId);
  }, [formId, close]);
  return (
    <div className={`form ${tabs.length !== 0 ? "form-check" : ""}`}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`form-item ${active === tab.id ? "form-active" : ""}`}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            onClick={() => handleTab(tab.id)}
          >
            {tab.id === active ? (
              <img src={Logo} alt="logo" />
            ) : (
              <img src={Logo2} alt="logo" />
            )}

            <p> {`Cuộc gọi từ ${tab.phone}`}</p>
          </div>
          <img
          className="form-close"
            src={Close}
            alt="Close"
            onClick={() => {
              closeTab(tab.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default Form;

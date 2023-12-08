import Logo from "../../asset/image 2.png";
import Logo2 from "../../asset/image3.png";
import Close from "../../asset/Close_square_light.png";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
// import { setTab } from "../../redux/slice/appReduce";
import { useEffect, useState } from "react";
import { setDeleteTab } from "../../reducers/appReduce";
// import { useNavigate } from "react-router-dom";
const Form = () => {
  const { tabs, formId } = useSelector((states) => states.appReduce);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const handleTab = (id) => {
    setActive(id);
  };
  const closeTab = (id) => {
    dispatch(setDeleteTab(id));
  };
  useEffect(() => {
    setActive(formId);
  }, [formId]);
  // useEffect(() => {
  //   if (tabs.length === 0) {
  //     navigate("/", { replace: true });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[tabs]);
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
              gap: 8,
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

            <p>Cuộc gọi từ {tab.phone}</p>
          </div>
          <img src={Close} alt="Close" onClick={() => closeTab(tab.id)} />
        </div>
      ))}
    </div>
  );
};
export default Form;

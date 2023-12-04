import { useSelector } from "react-redux";
import Contract from "./components/Contract";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

import InfoConcat from "./components/Infoconcat";
import MenuProfile from "./components/menu";

const Profile = () => {
  const {tab} = useSelector(states => states.appReduce)
  return (
    <div className="Profile">
      <MenuProfile />
      <div
        className="Profile-content"
        style={{ display: "flex" }}
      >
        <Contract />
        {tab === "1" && <Form1/>}
        {tab === "2" && <Form2/>}
        <InfoConcat />
      </div>
    </div>
  );
};
export default Profile;

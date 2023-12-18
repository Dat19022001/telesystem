import { Link } from "react-router-dom";
import Home from "../../asset/Home.png";
import HamburgerMenu from "../../asset/Hamburger Menu.png";
import Profile from "../../asset/Profile.png";
import Bookmark from "../../asset/Bookmark.png";
import BoltCircle from "../../asset/Bolt Circle.png";
import Activity from "../../asset/Activity.png";
import Message from "../../asset/Message.png";
import Work from "../../asset/Work.png";
import Setting from "../../asset/Setting.png";
import Logo from "../../asset/Logo 2.png"
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="sidebar-item active">
          <Link to="/dashboard">
            <img src={Home} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/">
            <img src={HamburgerMenu} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={Profile} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={Bookmark} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={BoltCircle} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={Activity} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={Message} alt="Home" />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="">
            <img src={Work} alt="Home" />
          </Link>
        </div>
      </div>
      <div className="sidebar-setting">
        <div className="sidebar-item">
          <Link to="/setting">
            <img src={Setting} alt="Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

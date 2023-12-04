import ClockLight from "../../../asset/Clock_light.png";
import IconSearch from "../../../asset/Search.png";
import BtnSearch from "../../../asset/prime_search-plus.png";
import Excel from "../../../asset/MicrosoftExcelLogo.png";
import "./menu.scss"
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <div className="menu-item active">Cuộc gọi</div>
        <div className="menu-item ">Nhắn tin </div>
        <div className="menu-item">Khảo sát</div>
        <div className="menu-time">
          <img src={ClockLight} alt="clock" />
          <span>28/08/2020 00:00</span>
          <strong>-</strong>
          <span>29/08/2020 00:00</span>
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-search">
          <img className="menu-icon" src={IconSearch} alt="IconSearch" />
          <input className="menu-input" placeholder="Tìm kiếm" />
          <img className="menu-btn" src={BtnSearch} alt="btnSearch" />
        </div>
        <div className="menu-excel">
          <img src={Excel} alt="excel" />
          <span>Xuất Excel</span>
        </div>
      </div>
    </div>
  );
};
export default Menu;

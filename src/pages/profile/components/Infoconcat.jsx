import Edit from "../../../asset/Edit.png";
import Avatar from "../../../asset/Image-60.png";
import History from "../../../asset/ClockCounterClockwise.png";
import CallHistory from "../../../asset/Group 237551.png";
import "./Infoconcat.scss";
import { useDispatch } from "react-redux";
import { setEditProfile } from "../../../redux/slice/appReduce";
const InfoConcat = () => {
  const dispatch = useDispatch()
  const handleOpen=()=> {
    dispatch(setEditProfile(true))
    console.log("1")
  }
  return (
    <div className="infoConcat">
      <div className="infoConcat-title">
        <p>CHI TIẾT LIÊN HỆ</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
          onClick={() => handleOpen()}
        >
          <img src={Edit} alt="dit" />
          <span>Sửa</span>
        </div>
      </div>
      <div className="infoConcat-avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="infoConcat-content">
        <div className="infoConcat-item">
          <p>Tên</p>
          <span>Nguyễn Văn A</span>
        </div>
        <div className="infoConcat-item">
          <p>Chức Vụ</p>
          <span></span>
        </div>
        <div className="infoConcat-item">
          <p>Doanh nghiệp</p>
          <span></span>
        </div>
        <div className="infoConcat-item">
          <p>Tài khoản quản lý</p>
          <span></span>
        </div>
        <div className="infoConcat-item">
          <p>Miêu tả thông tin</p>
          <span></span>
        </div>
        <div className="infoConcat-item">
          <p>Email</p>
          <span></span>
        </div>
        <div className="infoConcat-item">
          <p>Phone:</p>
          <span>0869394765</span>
        </div>
      </div>
      <div className="infoConcat-history">
        <div className="infoConcat-history-title">
          <img src={History} alt="history" />
          <p>LỊCH SỬ LIÊN HỆ</p>
        </div>
        <div className="infoConcat-history-item">
          <img src={CallHistory} alt="callHistory" />
          <div className="infoConcat-history-info">
            <p>Cuộc gọi từ: +84 59831346</p>
            <div>
              <span>Giao cho:</span>
              <strong>Nguyễn Văn A</strong>
            </div>
            <div>
              <span>Cập nhật:</span>
              <strong>27/07/2020 2:46:44 CH</strong>
            </div>
          </div>
        </div>
        <div className="infoConcat-history-item">
          <img src={CallHistory} alt="callHistory" />
          <div className="infoConcat-history-info">
            <p>Cuộc gọi từ: +84 59831346</p>
            <div>
              <span>Giao cho:</span>
              <strong>Nguyễn Văn B</strong>
            </div>
            <div>
              <span>Cập nhật:</span>
              <strong>27/07/2020 2:46:44 CH</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoConcat;

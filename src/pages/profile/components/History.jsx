import Avatar from "../../../asset/Image-60.png";
const History = () => {
  return (
    <div className="from1-comment-history">
      <div className="from1-history-item">
        <div className="from1-history-user">
          <img src={Avatar} alt="avatar" />
          <div className="from1-history-name">
            <p>Nguyễn Văn A</p>
            <span>27/07/2020 2:46:44 CH</span>
          </div>
        </div>
        <div style={{ marginLeft: 80 }}>
          <input placeholder="KH có nhu cầu mua hàng" />
        </div>
      </div>
      <div className="from1-history-item">
        <div className="from1-history-user">
          <img src={Avatar} alt="avatar" />
          <div className="from1-history-name">
            <p>Nguyễn Văn A</p>
            <span>27/07/2020 2:46:44 CH</span>
          </div>
        </div>
        <div style={{ marginLeft: 80 }}>
          <input placeholder="KH có nhu cầu mua hàng" />
        </div>
      </div>
    </div>
  );
};
export default History;

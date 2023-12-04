import InfoCaller from "./Infocaller";
import "./Form2.scss";
import { useState } from "react";
import History from "./History";
import Save from "../../../asset/save.png"
const Form2 = () => {
  const [tab, setTab] = useState("1");
  return (
    <div className="form2 form1">
      <InfoCaller />
      <div className="form2-info">
        <div className="form2-title">Thông tin khách hàng</div>
        <div className="from2-item">
          <div className="contract-input">
            <label>Id Khách hàng</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>CMND</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>Tên khách hàng</label>
            <input placeholder="1000000035" />
          </div>
        </div>
        <div className="from2-item">
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
        </div>
        <div className="from2-item">
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
        </div>
        <div className="from2-item">
          <div className="contract-input from2-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
          <div className="contract-input from2-input">
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
        </div>
        <div className="from2-item">
          <div className="contract-input" style={{ width: "100%" }}>
            <label>ĐT cố định</label>
            <input placeholder="1000000035" />
          </div>
        </div>
      </div>
      <div className="form2-content form2-info">
        <div className="form2-tab">
          <div
            className={`from2-tab-item ${tab === "1" ? "active" : ""}`}
            onClick={() => setTab("1")}
          >
            Tác Nghiệp
          </div>
          <div
            className={`from2-tab-item ${tab === "2" ? "active" : ""}`}
            onClick={() => setTab("2")}
          >
            Lịch sử Tác Nghiệp
          </div>
        </div>
        <div className="form2-tab-content">
          {tab === "1" ? (
            <div className="form1-tab1">
              <div className="from2-item">
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
              </div>
              <div className="from2-item">
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
              </div>
              <div className="from2-item">
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
              </div>
              <div className="from2-item">
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
              </div>
              <div className="from2-item">
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
                <div className="contract-input from2-input">
                  <label>ĐT cố định</label>
                  <input placeholder="1000000035" />
                </div>
              </div>
              <div className="contract-input" style={{ width: "100%" }}>
                <label>Chi tiết tác nghiệp</label>
                <input placeholder="1000000035" style={{ height: 124 }} />
              </div>
              <div className="form2-footer">
                <div className="from2-btn">
                  <img src={Save} alt="save"/>
                  Lưu tác nghiệp
                </div>
                <div className="from2-btn btn-active">
                  Lưu tác nghiệp
                </div>
              </div>
            </div>
          ) : (
            <History />
          )}
        </div>
      </div>
    </div>
  );
};
export default Form2;

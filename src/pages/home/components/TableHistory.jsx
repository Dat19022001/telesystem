import Record from "../../../asset/Play.png";
import Note from "../../../asset/File Text.png";
import Form from "../../../asset/Pen New Round.png";
import React, { useState } from "react";
import { Pagination } from "antd";
import "./TableHistory.scss";
const TableHistory = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="history">
      <table className="history-table">
        <tr className="history-header">
          <th style={{ width: 22 }}>#</th>
          <th style={{ width: 58 }}>Agent</th>
          <th style={{ width: 129 }}>Số điện thoại</th>
          <th style={{ width: 209 }}>Thời gian gọi</th>
          <th style={{ width: 98 }}>Trạng thái</th>
          <th style={{ width: 108 }}>File ghi âm</th>
          <th style={{ width: 74 }}>Ghi chú</th>
          <th style={{ width: 106 }}>Form nhập</th>
        </tr>
        <tr>
          <td>1</td>
          <td>20988</td>
          <td>90902254563</td>
          <td>2023/09/09 12:04:22</td>
          <td>Answered</td>
          <td>
            <div className="history-img">
              <img src={Record} alt="record" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Note} alt="Note" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Form} alt="Note" />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>20988</td>
          <td>90902254563</td>
          <td>2023/09/09 12:04:22</td>
          <td>Answered</td>
          <td>
            <div className="history-img">
              <img src={Record} alt="record" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Note} alt="Note" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Form} alt="Note" />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>20988</td>
          <td>90902254563</td>
          <td>2023/09/09 12:04:22</td>
          <td>Answered</td>
          <td>
            <div className="history-img">
              <img src={Record} alt="record" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Note} alt="Note" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Form} alt="Note" />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>20988</td>
          <td>90902254563</td>
          <td>2023/09/09 12:04:22</td>
          <td>Answered</td>
          <td>
            <div className="history-img">
              <img src={Record} alt="record" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Note} alt="Note" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Form} alt="Note" />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>20988</td>
          <td>90902254563</td>
          <td>2023/09/09 12:04:22</td>
          <td>Answered</td>
          <td>
            <div className="history-img">
              <img src={Record} alt="record" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Note} alt="Note" />
            </div>
          </td>
          <td>
            <div className="history-img">
              <img src={Form} alt="Note" />
            </div>
          </td>
        </tr>
      </table>
      <div className="history-subTable">
        <p className="history-total">Có tổng: 70 bản ghi</p>
        <div className="history-paginate">
          <div className="history-select">
            <label for="number">Hiển thị:</label>

            <select className="history-select1" name="number" id="number">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <label>Bản ghi</label>
          </div>
          <div className="history-pagination">
            <Pagination current={current} onChange={onChange} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableHistory;

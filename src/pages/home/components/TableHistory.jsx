import Record from "../../../asset/Play.png";
import Note from "../../../asset/File Text.png";
import Form from "../../../asset/Pen New Round.png";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import "./TableHistory.scss";
const TableHistory = ({ data }) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const onChange = (page) => {
    setCurrent(page);
  };
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setPageSize(selectedOption);
  };
  useEffect(() => {}, [pageSize]);

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
        {data.records.map((record, index) => (
          <tr key={index}>
            <td>{record.stt}</td>
            <td>{record.agent}</td>
            <td>{record.mobile}</td>
            <td>{record.calldate}</td>
            <td>{record.status}</td>
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
        ))}
      </table>
      <div className="history-subTable">
        <p className="history-total">Có tổng: {data.total_records} bản ghi</p>
        <div className="history-paginate">
          <div className="history-select">
            <label for="number">Hiển thị:</label>

            <select
              className="history-select1"
              name="number"
              id="number"
              value={pageSize}
              onChange={handleChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <label>Bản ghi</label>
          </div>
          <div className="history-pagination">
            <Pagination
              current={current}
              onChange={onChange}
              pageSize={pageSize}
              total={data.total_page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableHistory;

import { PieChart, Pie } from "recharts";
import "./chart.scss"

const ChartsPage = () => {
 
  const data01 = [
    {
      name: "Missed",
      value: 400,
      fill:"#D12E2E"
    },
    {
      name: "Answered",
      value: 300,
      fill: "#169DFF"
    },
    {
      name: "Failed",
      value: 300,
      fill:"#B2F71E"
    },
    {
      name: "Busy",
      value: 200,
      fill:"#77E5E5"
    },
  ];
  return (
    <div className="chart">
      <div className="chart-title">
        Tỉ lệ cuộc gọi
      </div>
      <div className="chart-sub">
        <div className="chart-item">
          <div className="chart-point" style={{backgroundColor:"#169DFF"}}></div>
          <p>Miss</p>
        </div>
        <div className="chart-item">
          <div className="chart-point" style={{backgroundColor:"#B2F71E"}}></div>
          <p>Answered</p>
        </div>
        <div className="chart-item">
          <div className="chart-point" style={{backgroundColor:"#D12E2E"}}></div>
          <p>Failed</p>
        </div>
        <div className="chart-item">
          <div className="chart-point" style={{backgroundColor:"#77E5E5"}}></div>
          <p>Busy</p>
        </div>
      </div>
      
      <PieChart width={560} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
        />
      </PieChart>
    </div>
  );
};

export default ChartsPage;

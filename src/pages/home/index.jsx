import TableHistory from "./components/TableHistory";
import ChartsPage from "./components/chart";
// import ChartsPage from "./components/chart";
import Menu from "./components/menu";
import Summary from "./components/summary";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar"
import "./index.scss";

const Home = () => {
  const data = {
    total_page: "20",
    total_records: "25",
    current_page: "1",
    total_time: "00:14:01",
    total_answered: "10",
    total_missed: "0",
    total_failed: "0",
    total_busy: "1",
    last_update: "17:23:27",
    records: [
      {
        stt: "1",
        agent: "20998",
        mobile: "0909019201",
        calldate: "2023-09-09 12:04:22",
        status: "answered",
        uniqueid: "16081281882.11",
      },
      {
        stt: "2",
        agent: "20998",
        mobile: "0909019201",
        calldate: "2023-09-09 12:04:22",
        status: "answered",
        uniqueid: "16081281882.12",
      },
      {
        stt: "3",
        agent: "20998",
        mobile: "0909019201",
        calldate: "2023-09-09 12:04:22",
        status: "answered",
        uniqueid: "16081281882.13",
      },
      {
        stt: "4",
        agent: "20998",
        mobile: "0909019201",
        calldate: "2023-09-09 12:04:22",
        status: "answered",
        uniqueid: "16081281882.14",
      },
      {
        stt: "5",
        agent: "20998",
        mobile: "0909019201",
        calldate: "2023-09-09 12:04:22",
        status: "answered",
        uniqueid: "16081281882.15",
      },
    ],
  };
  return (
    <div className="home">
      <Sidebar/>
      <div className="home-body">
        <Header />
        <Menu />
        <Summary data={data} />
        <div className="home-content">
          <TableHistory data={data} />
          <ChartsPage />
        </div>
      </div>
    </div>
  );
};

export default Home;

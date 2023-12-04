import TableHistory from "./components/TableHistory";
import ChartsPage from "./components/chart";
// import ChartsPage from "./components/chart";
import Menu from "./components/menu";
import Summary from "./components/summary";
import "./index.scss"

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <Summary />
      <div className="home-content">
        <TableHistory/>
        <ChartsPage/>
      </div>
    </div>
  );
};

export default Home;

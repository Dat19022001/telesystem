import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import Modal from "./components/modal/modal";
import EditProfile from "./components/editProfile";
import ModalSuccess from "./components/modalSuccess";
import ModalWaring from "./components/modalWaring";
import ChangePass from "./components/modalChangePass";
import AppRouters from "./config/appRouter";
import ModalAnswered from "./components/modalAnswered";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-content">
          <Sidebar />
          <div className="App-right" style={{ position: "relative" }}>
            <Header />
            <AppRouters />
            <Modal />
            <EditProfile />
            <ModalSuccess />
            <ModalWaring />
            <ChangePass />
            <ModalAnswered />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

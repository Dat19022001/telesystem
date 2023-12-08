
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import Modal from "./components/modal/modal";
import EditProfile from "./components/editProfile";
import ModalSuccess from "./components/modalSuccess";
import ModalWaring from "./components/modalWaring";
import ChangePass from "./components/modalChangePass";
import AppRouters from "./config/appRouter";
import ModalAnswered from "./components/modalAnswered";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalNumber from "./components/modalNumber";
function App() {
  return (
    <div className="App">
      <ToastContainer className="foo" />
      <Router>
        <div className="App-content">
          <div className="App-right" style={{ position: "relative" }}>
            <AppRouters />
            <Modal />
            <EditProfile />
            <ModalSuccess />
            <ModalWaring />
            <ChangePass />
            <ModalAnswered />
            <ModalNumber/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

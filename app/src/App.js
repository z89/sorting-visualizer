import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Homepage from "./components/Hompage";

// import Header from "./components/Header.jsx";
// import Sidebars from "./components/Sidebars.jsx";
// import Home from "./components/Home.jsx";

import "./styles/App.css";

const App = () => (
  <>
    <Container fluid>
      <div className="App">
        <Homepage />
      </div>
    </Container>
  </>
);

export default App;

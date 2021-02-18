import React from "react";
import { Container } from "react-bootstrap";
import Sorter from "./components/Sorter";
import "./styles/App.css";

function App() {
  return (
    <>
      <Container fluid>
        <div className="App">
          <Sorter />
        </div>
      </Container>
    </>
  );
}

export default App;

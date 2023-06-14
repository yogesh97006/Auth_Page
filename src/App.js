import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authication } from "./UseContextAuth";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Authication>
            <Routes>
              <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </Authication>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

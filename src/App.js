import { QRData } from "./Pages/QRCode";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ProductQR/:id" element={<QRData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

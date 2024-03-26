// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TNavbar from "./components/TNavbar";

import TemperatureConverter from "./components/Temparature/Temparature";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<TemperatureConverter />} />
        </Routes>
    </Router>
  );
}

export default App;

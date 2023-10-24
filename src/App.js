import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Services from "./Component/Services";
import Team from "./Component/Team";
import AboutUs from "./Component/AboutUs";
import Process from "./Component/Process";
import Client from "./Component/Client";
import Work from "./Component/Work";
import Home from "./Component/Home";
import ContactUs from "./Component/ContactUs";
import Portfolio from "./Component/Portfolio";
import Login from "./Component/Login";
import Read from "./Component/Read";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Read" element={<Read />} />
      </Routes>
    </Router>
  );
}

export default App;

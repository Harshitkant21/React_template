import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Navbars  from "./Component/Navbar";
import  Services from "./Component/Services";
import Team from "./Component/Team";
import AboutUs from './Component/AboutUs';
import Process from "./Component/Process";
import Client from "./Component/Client";
import Work from "./Component/Work";
import Home from "./Component/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Process" element={<Process />}/>
        <Route path="/Client" element={<Client />}/>
        <Route path="/Work" element={<Work />}/>
      </Routes>
    </Router>
  );
}

export default App;

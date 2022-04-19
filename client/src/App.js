import "./App.css";
import Chart from "./components/Chart";
import Product from "./components/Product";
import Auction from "./pages/Auction";
import About from "./pages/About";
import Navbar from './components/Navbar';
import createAuction from "./pages/organization/createAuction";


import Home from "./pages/Home";
import Video from "./components/Video";
import { FaProductHunt } from "react-icons/fa";


function App() {
  return (

    <div className="App">
    
    <Auction />
 
    

    </div>
  );
}

export default App;

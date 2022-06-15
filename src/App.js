import React from "react";
import Navbar from "./Components/Navbar/NavBar";
import './Components/Navbar/App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action} from './Url'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall />

    </div>
  );
}

export default App;

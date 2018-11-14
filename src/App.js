
import React from "react";

import './App.css';
import Hourtime from "./components/hour";
import Mintime from "./components/min";
import Secondetime from "./components/seconde";
import Chifftime from "./components/hourchiff";


class App extends React.Component {
  render(){
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container card m-0">
            <div className="row">
            <div className="col-md-4 title">    <Hourtime/>      </div>
            <div className="col-md-4 title">    <Mintime/>      </div>
            <div className="col-md-4 title">    <Secondetime/>      </div>
            </div>
            <Chifftime/>
          </div>
          
      </div>
      </div>
       
      </div>
    )

  }
};

        
export default App;
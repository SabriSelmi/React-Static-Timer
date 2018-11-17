
import React from "react";


import './App.css';
import Hourtime from "./components/hour";
import Mintime from "./components/min";
import Secondetime from "./components/seconde";
import Chifftime from "./components/hourchiff";
import Boutons from "./components/bouton/bouton";
const time=10000000
const convert={
  hour: parseInt(time/3600000),
  minute: parseInt(time/60000)-parseInt(time/3600000)*60,
  seconde: parseInt(time/1000)-parseInt(time/60000)*60
}

class App extends React.Component {
  render(){
    return (
      <div className="card bg-dark">
      <div className="contain">
            <div className="contenu">
                <Hourtime aff={convert} />      
                <Mintime aff={convert}/>      
                <Secondetime aff={convert}/>      
            </div>
            
            <Chifftime/>
            </div>
        <Boutons/>
          
     
      
       
      </div>
    )

      
     
};
}

export default App;

        

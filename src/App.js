import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'; 
import './style.css'

class App extends Component {
  render() {
    return (
      <div style={{border:"solid(1px) black",maxWidth:"100vw"}}>

      <h1 className="deve "><center>Russia 2018</center></h1> 
 
      <center><img style={{minHeight : "200px", maxHeight : "200px"}} src={"/téléchargement (1).jpg"} /></center>
    
   
      <img src={"/imageInPublic.jpg"} />
    
    
    </div>

    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Village from "./Village.js";
import Form from "./Form.js";
import { getSmurf } from "../actions";



const App = () => {
  

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Form/>
        <Village/>
      </div>
    );
  }
  const mapStateToProps = state => {
    return {
      message: state.message,
      smurfs: state.smurfs
    };
  };

  
  
  export default connect(
    mapStateToProps,
    { getSmurf }
  )(App);
  
  




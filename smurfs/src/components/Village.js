import React, {useEffect} from "react";
import "./App.css";
import { connect } from "react-redux";
import {getSmurf} from "../actions"

const Village = props => {

const{etSmurf} = (props);
useEffect(() => {

 getSmurf()

}, [getSmurf])


  return (
    <div className="villageList">
      {props.smurfs.map(item => {
        return (
          <div className="smurf" key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurf} )
(Village);

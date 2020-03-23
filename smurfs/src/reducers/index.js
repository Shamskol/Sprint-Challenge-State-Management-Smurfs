import {
    GET_SMURF,
    GET_SUCCESS,
    GET_FAIL,
    ADD_SMURF,
    ADD_SUCCESS,
    ADD_FAIL
  } from "../actions";
  
//   {
//       name: "",
//       age: 20,
//       height: "",
//       id: 0
//     }
  
  const initialState = {
    message: "",
    smurfs: [],
    isFetching: false
  };
  
  export const smurfReducer = (state = initialState, action) => {
    console.log("smurfReducer", action);
    switch (action.type) {
      case GET_SMURF:
        return { ...state, isFetching: true, message:"" };
      case GET_SUCCESS:
        return { ...state, isFetching: false, message: "", smurfs: action.payload };
      case GET_FAIL:
        console.log(action.payload);
        return { ...state, message: action.payload };
      case ADD_SMURF:
        return { ...state, message: action.payload };
      case ADD_SUCCESS:
        return {...state,  isFetching: false, message: "", smurfs: action.payload };
      case ADD_FAIL:
        console.log(action.payload);
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };
  
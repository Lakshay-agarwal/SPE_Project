import axios from "axios";

export const uploadRoom = (userData, history) => dispatch => {
    axios
      .post("http://localhost:5000/upload", userData)
      .then(/*res => history.push("/login")*/ res => console.log(res));
  };
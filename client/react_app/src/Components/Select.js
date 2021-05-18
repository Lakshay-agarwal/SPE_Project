import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import { logoutUser } from "../actions/authAction";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Select.css'
import bg from  "../Images/green1.jpg"
import Dashboard from "./Dashboard";

class Select extends Component{


    handleClick = (event) =>{
        event.target.value === "Search" ? this.props.history.push('/search') : this.props.history.push('/upload')
    }

    handleLogout = (event) =>{
        this.props.logoutUser();
        this.props.history.push("/login");

    }

    render(){
        return(
            <div style={{ backgroundImage: `url("${bg}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 950
        }}>
            <Dashboard />
                <h1 style = {{textAlign : "center", paddingTop: 50, color : "#4B0082", fontFamily:"AmstelvarAlpha", textShadow: "2px 2px #f5fffa", fontWeight: "bold"}}>What do you want to do?</h1>
                <br /><br /><br />
                {/* <div style = {} */}
                {/* <div class="btn-group-vertical"> */}
                    {/* <div class = "btn-xl"> */}
                    <div style = {{marginLeft: "6em", marginTop : "1em", float:"left"}} class="speech-bubble">
                        Search for your favourite rooms here! You can apply filters to find the perfect match.
                        <br />
                        <input style = {{backgroundColor: "#4B0082", blockSize: 70, marginTop:30}} type = "button" className="btn btn-primary btn-lg" value = "Search" onClick = {this.handleClick} />
                    </div>
                    <div style = {{marginLeft: "5em", marginTop : "1em", float:"left"}}class="speech-bubble">
                        Upload rooms here! You can provide additional details about the room to help others recreate.
                        <br />
                        <input style = {{backgroundColor: "#4B0082", blockSize: 70, marginTop:30}} type = "button" className="btn btn-primary btn-lg" value = "Upload" onClick = {this.handleClick} />
                    </div>
                
                
                {/* <input style = {{backgroundColor: "#4B0082"}} type = "button" className="btn btn-primary btn-lg" value = "Logout" onClick = {this.handleLogout} /> */}
                {/* </div> */}
                {/* </div> */}

                
            </div>
        )
    }
}

Select.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
  )(Select));
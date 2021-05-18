import React, {Component} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { logoutUser } from "../actions/authAction";


class Dashboard extends Component{

    onLogout = (event) =>{
        this.props.logoutUser();
        this.props.history.push("/login");
    }
    onRegister = () =>{
        this.props.history.push("/signUp");
        // console.log("clicked");
    }
    onClick = () => {
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div style = {{textAlign: 'left', padding:20, float:'left'}}>
                <button onClick = {this.onClick}>Home</button>
            </div>
            <div style = {{textAlign : 'right', padding: 20}}>
                {this.props.auth.isAuthenticated ? 
                <div>
                    <button onClick = {this.onLogout}>Logout</button>
                </div>
                :
                <div>
                    {/* {console.log("entered")} */}
                    <button onClick = {this.onRegister}>Register</button>
                </div>}
                </div>
            
            </div>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard));
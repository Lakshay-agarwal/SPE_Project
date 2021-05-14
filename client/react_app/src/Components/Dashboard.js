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

    render(){
        return(
           <div>
               {this.props.auth.isAuthenticated ? 
               <div>
                   <button onClick = {this.onLogout}>Logout</button>
               </div>
               :
               <div>
                   <button onclick = {this.onRegister}>Register</button>

               </div>}
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
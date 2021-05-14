import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import { logoutUser } from "../actions/authAction";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
            <div>
                <h1>What do you want to do?</h1>
                <br />
                <input type = "button" value = "Search" onClick = {this.handleClick} />
                <br />
                <input type = "button" value = "Upload" onClick = {this.handleClick} />
                <br />
                <input type = "button" value = "Logout" onClick = {this.handleLogout} />
                <br />
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
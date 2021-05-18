import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
import { loginUser } from "../actions/authAction";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import bg from  "../Images/yellow2.jpg"
import classnames from "classnames";
import "./Login.css"
import Dashboard from "./Dashboard";

// import createHistory from 'history/createBrowserHistory'


class Login extends Component{

    state = {
        email : "",
        password : "",
        errors : {}
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            // const history = createHistory();
          this.props.history.push("/select");
        }
      }
      

    componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        // const history = createHistory();
        this.props.history.push("/select");
    }
    if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    onSubmit = (e) => {
        // console.log(this.props)
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
          };
      
        this.props.loginUser(userData);
        // this.props.history.push('/select');
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }
        )
    }
    render(){
        const { errors } = this.state;
        return(
          <div style={{ backgroundImage: `url("${bg}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height:1000
      }}>
        <Dashboard />
            
                {/* <div style={{ marginTop: "8rem" }} className="row"> */}
                <div className="col s8 offset-s2">
                <div className="col s12" style={{display: "flex", justifyContent:"center"}}>
                  <div className = "block-example border border-dark" style ={{marginTop:100, paddingInline:50, paddingBlock:70}}>
                <h4 style = {{marginLeft : 70, color: "#4169e1", paddingBottom: 30}}>
                <b>Login below </b>
                </h4>
                {/* <form onSubmit={this.onSubmit}> */}
                    {/* Login<br /><br /> */}
                    <form  onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input type="email" name = {"email"} value = {this.state.email} placeholder = {"email"} onChange = {this.handleChange}
                        error={errors.email} className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                          })} />
                        {/* <label htmlFor="email">Email</label> */}
                        <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>

                    <div className="input-field col s12">
                        <input type="password"  error={errors.password} name = "password" value = {this.state.password} placeholder = {"password"} onChange = {this.handleChange} 
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                          })}/>
                          {/* <label htmlFor="password">Password</label> */}
                        <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                        {/* <br /> */}
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button style={{
                    width: "280px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                    type = "submit" className="btn btn-primary btn-block">Login</button>
                    </div>
                {/* </form> */}
                </form> 
                </div>
                  
                </div>
                </div>

            // </div>      

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };    

const mapStateToProps = state => ({
auth: state.auth,
errors: state.errors
});

export default withRouter(connect(
    mapStateToProps,
    { loginUser }
  )(Login));
// export default withRouter(Login);
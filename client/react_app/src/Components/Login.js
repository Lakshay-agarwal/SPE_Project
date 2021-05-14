import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
import { loginUser } from "../actions/authAction";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
            <main>
                <h1> Login to your account </h1>
                <form onSubmit={this.onSubmit}>
                    {/* Login<br /><br /> */}
                        <input type="text" name = {"email"} value = {this.state.email} placeholder = {"email"} onChange = {this.handleChange} />
                        <span>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        <br />

                        <input type="password" name = "password" value = {this.state.password} placeholder = {"password"} onChange = {this.handleChange} />
                        <span>
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                        <br />
                    <button type = "submit">Login</button>
                </form>
                
            </main>            

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
import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
// import FormErrors from "./FormErrors"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authAction";
import bg from  "../Images/yellow2.jpg"
import Dashboard from "./Dashboard";

class Signup extends Component{

    state = {
        name : "",
        email : "",
        password : "",
        password2 : "",
        errors : {}
        // emailValid : true,
        // passwordValid : true,
        // formValid : false,
        // formErrors: {email: '', password: ''},

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    

    // validateField(fieldName, value) {
    //     let fieldValidationErrors = this.state.formErrors;
    //     let emailValid = this.state.emailValid;
    //     let passwordValid = this.state.passwordValid;
      
    //     switch(fieldName) {
    //       case 'email':
    //         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //         break;
    //       case 'password':
    //         passwordValid = value.length >= 6;
    //         fieldValidationErrors.password = passwordValid ? '': ' is too short';
    //         break;
    //       default:
    //         break;
    //     }
    //     this.setState({formErrors: fieldValidationErrors,
    //                     emailValid: emailValid,
    //                     passwordValid: passwordValid
    //                   }, this.validateForm);
    //   }
      
    //   validateForm() {
    //     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    //   }


    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
    
        this.props.registerUser(newUser, this.props.history);
        this.props.history.push("/login")
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }
        )
        // this.validateField(name, value)
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

            <div className="col s12" style={{display: "flex", justifyContent:"center"}}>
              <div className = "block-example border border-dark" style ={{marginTop:100, paddingInline:50, paddingBlock:70}}>
              <h4 style = {{marginLeft : 70, color: "#4169e1", paddingBottom: 30}}>
                <b>Register below </b>

              

              </h4>
                <form onSubmit = {this.onSubmit}>
                    {/* Login<br /><br /> */}
                    <div className="input-field col s12">
                        <input type="text" name = {"name"} value = {this.state.name} placeholder = {"name"} onChange = {this.handleChange} />
                        <span>{errors.name}</span>
                    </div>
                    <div className="input-field col s12">
                        <input type="email" name = {"email"} value = {this.state.email} placeholder = {"email-id"} onChange = {this.handleChange} />
                        <span>{errors.email}</span>
                    </div>
                    <div className="input-field col s12">
                        <input type="password" name = "password" value = {this.state.password} placeholder = {"password"} onChange = {this.handleChange} />
                        <span>{errors.password1}</span>
                    </div>
                    <div className="input-field col s12">
                        <input type="password" name = "password2" value = {this.state.password2} placeholder = {"re-enter password"} onChange = {this.handleChange} />
                        <span>{errors.password2}</span>
                    </div>
                        {/* {console.log(this.state.password+" "+this.state.password2)} */}
                        {/* <FormErrors formErrors={this.state.formErrors} /> */}
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button style={{
                      width: "280px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type = "submit" className="btn btn-primary btn-block"> Sign-up </button>
                    </div>
                </form>
                </div>
                </div>
                
            </div>
        )
        }

      

}
Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Signup));
// export default Login;
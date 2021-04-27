import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
import FormErrors from "./FormErrors"

class Signup extends Component{

    state = {
        email : "",
        username : "",
        password : "",
        emailValid : true,
        passwordValid : true,
        formValid : false,
        formErrors: {email: '', password: ''},

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }


    handleLogin = () => {
        console.log(this.props)
        this.props.history.push('/select');
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }
        )
        this.validateField(name, value)
    }
    render(){
        return(
            <main>
                <h1> Register here </h1>
                <form>
                    {/* Login<br /><br /> */}
                        <input type="email" name = {"email"} value = {this.state.email} placeholder = {"email-id"} onChange = {this.handleChange} />
                        <br />
                        <input type="text" name = {"username"} value = {this.state.username} placeholder = {"username"} onChange = {this.handleChange} />
                        <br />
                        <input type="password" name = "password" value = {this.state.password} placeholder = {"password"} onChange = {this.handleChange} />
                        <br />
                        <FormErrors formErrors={this.state.formErrors} />
                    <input type="button" value={'Sign-up'} disabled = {!this.state.formValid} onClick={this.handleLogin}/><br />
                </form>
                
            </main>
                

        )
    }
}

export default withRouter(Signup);
// export default Login;
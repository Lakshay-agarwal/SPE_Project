import React, {Component} from "react"
import { withRouter } from 'react-router-dom';

class Login extends Component{

    state = {
        username : "",
        password : "",
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
    }
    render(){
        return(
            <main>
                <h1> Login to your account </h1>
                <form>
                    {/* Login<br /><br /> */}
                        <input type="text" name = {"username"} value = {this.state.username} placeholder = {"username"} onChange = {this.handleChange} />
                        <br />

                        <input type="password" name = "password" value = {this.state.password} placeholder = {"password"} onChange = {this.handleChange} />
                        <br />
                    <input type="button" value={'Login'} onClick={this.handleLogin}/><br />
                </form>
                
            </main>            

        )
    }
}

export default withRouter(Login);
// export default Login;
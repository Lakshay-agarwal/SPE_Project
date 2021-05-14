import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
import Room from "./Room";
import room from "../Images/bedroom1.png"

class Home extends Component{

    handleClick = (event) =>{
        event.target.value === "Login" ? this.props.history.push('/login') : this.props.history.push('/signup')
    }

    render(){
        return(
            <div>
                <h1>Room Interiors</h1>
                <br />
                <input type = "button" value = "Login" onClick = {this.handleClick} />
                <br />
                <input type = "button" value = "Sign-up" onClick = {this.handleClick} />
                <br />
                <br />
                <br />
                <Room source = {room} price = {3000} height = {"14"} width = {"14"} description = "this is a very beatuful room and easy to create"/>
            </div>
        )
    }
}

export default withRouter(Home);
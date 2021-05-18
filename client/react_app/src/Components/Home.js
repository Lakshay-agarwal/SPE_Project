import React, {Component} from "react"
import { withRouter } from 'react-router-dom';
import Room from "./Room";
import room from "../Images/bedroom1.png"
import background_image from "../Images/Bg9.jpg"

class Home extends Component{

    handleClick = (event) =>{
        event.target.value === "Login" ? this.props.history.push('/login') : this.props.history.push('/signUp')
    }

    render(){
        return(
            <div  style={{ backgroundImage: `url("${background_image}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 900,
                        }}>
                <h1 style = {{color : "green" , textAlign : "center" , fontSize : 100, fontFamily: "Cursive", paddingTop : 150}}>Room Interiors</h1>
                <br />
                <p style = {{textAlign:"center", color : "brown", fontSize : 30, width : "auto", backgroundColor: ""}}> 
                        A platform to share your creative room design with others and also to help you look for a perfect room for yourself!
                </p>
                <input style = {{marginLeft: 400, marginTop: 100, backgroundColor: "brown", blockSize : 50, inlineSize:200, color: "white"}} type = "button" value = "Login" onClick = {this.handleClick} />
                <br />
                <input style = {{marginLeft: 400, marginTop: 20, backgroundColor: "brown", blockSize : 50, inlineSize:200, color: "white"}} type = "button" value = "Sign-up" onClick = {this.handleClick} />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default withRouter(Home);
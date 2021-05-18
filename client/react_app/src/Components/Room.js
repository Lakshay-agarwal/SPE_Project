import React, {Component} from "react"
import { Fragment } from "react";
import { NavLink } from "react-router-dom";


class Room extends Component{

    state = {
        source : this.props.source,
        price : this.props.price,
        height : this.props.height,
        width : this.props.width,
        description : this.props.description
    }
    render(){
        return(
            <div style = {{width : 450, textAlign : "center", display: "block", border: 1, marginLeft : 30, marginRight : 30, marginBottom: 20}}>
                <img style = {{backgroundColor: "purple"}} src = {this.state.source} alt = "bedroom1" height = {450} width = {450} /> <br />
                    <div style = {{color : "purple", fontFamily: "Cursive", fontSize: 20, backgroundColor: "#FFF0F5"}}>
                    height of the room : {this.state.height} <br />
                    width of the room : {this.state.width} <br />
                    Estimated price : Rs. {this.state.price} <br />

                    <NavLink className = "descriptionRoom" to = {{
                    pathname: '/room/description',
                        description : this.state.description
                    }}>
                    See full description of the room
                    </NavLink>
                    </div>
             

                
            </div>
            

        )
    }
}

export default Room;
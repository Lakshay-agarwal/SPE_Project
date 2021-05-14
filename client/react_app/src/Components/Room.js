import React, {Component} from "react"
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
            <div>
                <img src = {this.state.source} alt = "bedroom1" height = {350} width = {350} />
                <p> height of the room : {this.state.height} <br />
                    width of the room : {this.state.width} <br />
                    Estimated price : Rs. {this.state.price}
                </p>

                <NavLink className = "descriptionRoom" to = {{
                    pathname: '/room/description',
                        description : this.state.description
                }}>
                    See full description of the room
                </NavLink>

            </div>
            

        )
    }
}

export default Room;
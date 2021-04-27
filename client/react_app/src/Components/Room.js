import React, {Component} from "react"
import { NavLink } from "react-router-dom";

class Room extends Component{

    state = {
        source : this.props.source,
        price : this.props.price,
        size : this.props.size,
        description : this.props.description

    }
    render(){
        return(
            <div>
                <img src = {this.state.source} alt = "bedroom1" height = {350} width = {350} />
                <p> size of the room : {this.state.size} <br />
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
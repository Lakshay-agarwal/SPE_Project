import React, {Component} from "react"
import { withRouter } from 'react-router-dom';

class Select extends Component{


    handleClick = (event) =>{
        event.target.value === "Search" ? this.props.history.push('/search') : this.props.history.push('/upload')
    }

    render(){
        return(
            <div>
                <h1>What do you want to do?</h1>
                <br />
                <input type = "button" value = "Search" onClick = {this.handleClick} />
                <br />
                <input type = "button" value = "Upload" onClick = {this.handleClick} />
                <br />
            </div>
        )
    }
}

export default withRouter(Select);
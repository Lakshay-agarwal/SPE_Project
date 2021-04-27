import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';

class Description extends Component{
    render(){
        return(
           <div>
               <h1> Description </h1>
               {this.props.location.description}
           </div> 
        )
    }

}


export default withRouter(Description);
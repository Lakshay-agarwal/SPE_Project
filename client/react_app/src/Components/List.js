import React, {Component} from 'react'
import Room from "./Room"
import './List.css';
class List extends Component{
    

    state = {
        src : ""
    }


    // componentDidMount(){
    //     this.setState()
    // }

    arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));    
        bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    };

    render(){
        return(
            <div>
                {/* {console.log("the list is " + JSON.stringify(this.state.list))} */}
                <div style = {{marginInline:150}}>;
                <div style = {{display:'flex', alignContent: "space-between", flexWrap:"wrap"}}>
                {this.props.rooms_list.map(item => (
                <div key = {item._id}>
                    {/* <span style = {{display:'flex', flexDirection:'row'}}> */}
                        {console.log("The id is "+item._id)}
                        {/* {console.log("The image string is" + this.arrayBufferToBase64(item.image.data.data))} */}
                        <Room source = {'data:image/jpeg;base64, ' + this.arrayBufferToBase64(item.image.data.data)} price = {item.price} height = {item.height} width = {item.width} description = {item.description}/>
                    {/* </span> */}
                </div>
                ))}
                </div>
                </div>
            </div>
        )
    }
}

export default List
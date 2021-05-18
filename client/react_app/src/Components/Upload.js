import React, {Component} from 'react'
// import { uploadRoom } from "../actions/uploadAction";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import bg from  "../Images/purple2.jpg"
import Dashboard from './Dashboard';

class Upload extends Component{

    state = {
        image: null,
        roomType : "Small",
        price : "",
        width: "",
        height : "",
        description : ""
    }  

    onFileChange = event => {
    
        // let imageFormObj = new FormData();
        // imageFormObj.append("image", event.target.files[0]);
        this.setState({ image: event.target.files[0]});
        // console.log("the image is " + this.state.image);
    }

    onChange = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name] : value
        }
        )
        console.log(this.state.price)
    }
    
    handleUpload = (e) =>{
        e.preventDefault();

        // const newRoom = {
        //     description: this.state.description,
        //     roomType: this.state.roomType,
        //     height: this.state.height,
        //     width: this.state.width,
        //     price: this.state.price,
        //     image: this.state.image
            
        // };

        const formData = new FormData();

        formData.append('description',this.state.description);
        formData.append('roomType',this.state.roomType);
        formData.append('height',this.state.height);
        formData.append('width',this.state.width);
        formData.append('price',this.state.price);
        formData.append('image',this.state.image);
        

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        // console.log("the image is " + newRoom);
    
        axios
      .post("http://localhost:5000/upload", formData)
      .then(/*res => history.push("/login")*/ res => console.log(res));
        this.props.history.push("/Select")

    }

    render(){
        return(
            <div style={{ backgroundImage: `url("${bg}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>

            <Dashboard />
            <h1 style = {{textAlign: 'center', fontFamily: "Zapf Chancery, cursive", color:"#FFF0F5", fontSize: 30}}><b> Upload image of the room along with the following details </b></h1>
                <div>
                    {/* <div style = {{width: 20, border:15, padding: 50, margin:50}}> */}
                    <form style = {{textAlign : "center", marginTop:50}}>
                    {/* <div style = {{width : "auto", border: 100, borderStyle:"block", boxSizing: 'border-box'}}> */}
                    {/* <div style ={{borderStyle:"solid", borderWidth:10, borderInlineWidth:5, paddingBlock:30, borderBlockColor:"#FFF0F5"}}> */}
                    <div style = {{ontFamily: "Zapf Chancery, cursive", color:"#FFF0F5", paddingBlock:20}}>
                        <span>Image of the room</span>
                        <input style = {{paddingLeft:20}} type="file" onChange={this.onFileChange} />
                        <br />
                        <div style = {{paddingBlock:30}}>
                            <span>Price of the room </span>
                        <input type = "text" name = "price" value = {this.state.price} placeholder = "Enter the estimated price in Rs." onChange = {this.onChange} />
                        </div>
                        <div className="input-field col s12">
                        <div >Enter the size of the room </div>
                        <input type = "text" name = "width" value = {this.state.size} placeholder = "width (mts)" onChange = {this.onChange} />
                        <input type = "text" name = "height" value = {this.state.size} placeholder = "height (mts)" onChange = {this.onChange} />
                        </div>
                        <br />
                        <span> Room type </span>
                        <select name = "roomType" id = "roomType" onChange = {this.onChange} value = {this.state.roomType}>
                            <option value = "Small"> Small </option>
                            <option value = "Medium"> Medium </option>
                            <option value = "Large"> Large </option>
                        </select>
                        <br />
                        <br />
                        <label id = "description"> Give some description about the room including links to shopping items and more... </label>
                        <br />
                        <textarea rows = "20" cols = "50" id = "description"  name = "description" value = {this.state.description} placeholder = "Give some description abut the room" onChange = {this.onChange}/>
                        <br />
                        <input type="button" value={'Submit'} onClick={this.handleUpload}/>
                        </div>
                        {/* </div> */}
                    </form>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

Upload.propTypes = {
    uploadRoom: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default withRouter(Upload);
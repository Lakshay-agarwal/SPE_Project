import React, {Component} from 'react'

class Upload extends Component{

    state = {
        fileUploaded: null,
        price : "",
        size : "",
        description : ""
    }

    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });
    }

    onChange = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name] : value
        }
        )
        console.log(this.state.description)
    }
    

    render(){
        return(
            <div>
                <h1> Upload image of the room along with the following details </h1>
                <div>
                    <form>
                        <input type="file" onChange={this.onFileChange} />
                        <br />
                        <input type = "text" name = "price" value = {this.state.price} placeholder = "Enter the estimated price in Rs." onChange = {this.onChange} />
                        <br />
                        <input type = "text" name = "size" value = {this.state.size} placeholder = "What is the size of the room" onChange = {this.onChange} />
                        <br />
                        <br />
                        <label id = "description"> Give some description about the room including links to shopping items and more... </label>
                        <br />
                        <textarea rows = "20" cols = "50" id = "description"  name = "description" value = {this.state.description} placeholder = "Give some description abut the room" onChange = {this.onChange}/>
                        <br />
                        <input type="button" value={'Submit'} onClick={this.handleUpload}/><br />
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Upload
import React, {Component} from 'react'
import Dashboard from './Dashboard'
import axios from "axios";
import List from "./List"

class Search extends Component{

    state = {
        priceRange: "All",
        sizeRange : "All",
        rooms : []
    }

    onSelect = (event) =>{
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
        // console.log(this.state.priceRange)


    }

    arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));    bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    };

    onApply = (e) =>{
        let query = {};
        // console.log(this.state.priceRange + this.state.sizeRange);
        if(this.state.priceRange === "All")
        {
            if(this.state.sizeRange === "Small")
            {
                query = {roomType : ("Small")};
                
            }
            else if(this.state.sizeRange === "Medium")
            {
                query = {roomType : ("Medium")};
            }
            else if(this.state.sizeRange === "Large")
            {
                query = {roomType : ("Large")}
            }
        }
        else if(this.state.priceRange === "0 - 2000")
        {
            if(this.state.sizeRange === "All")
            {
                query = {price : {gte : (0), lt : (2000)}};
            }
            else if(this.state.sizeRange === "Small")
            {
                query = {price : {gte : (0), lt : (2000)}, roomType : ("Small")};
            }
            else if(this.state.sizeRange === "Medium")
            {
                query = {price : {gte : (0), lt : (2000)}, roomType : ("Medium")};
            }
            else if(this.state.sizeRange === "Large")
            {
                query = {price : {gte : (0), lt : (2000)}, roomType : ("Large")}
            }
        }
        else if(this.state.priceRange === "2000 - 5000")
        {
            if(this.state.sizeRange === "All")
            {
                query = {price : {gte : (2000), lt : (5000)}};
            }
            else if(this.state.sizeRange === "Small")
            {
                query = {price : {gte : (2000), lt : (5000)}, roomType : ("Small")};
            }
            else if(this.state.sizeRange === "Medium")
            {
                query = {price : {gte : (2000), lt : (5000)}, roomType : ("Medium")};
            }
            else if(this.state.sizeRange === "Large")
            {
                query = {price : {gte : (2000), lt : (5000)}, roomType : ("Large")}
            }
        }
        else if(this.state.priceRange === "5000 - 10000")
        {
            if(this.state.sizeRange === "All")
            {
                query = {price : {gte : (5000), lt : (10000)}};
            }
            else if(this.state.sizeRange === "Small")
            {
                query = {price : {gte : (5000), lt : (10000)}, roomType : ("Small")};
            }
            else if(this.state.sizeRange === "Medium")
            {
                query = {price : {gte : (5000), lt : (10000)}, roomType : ("Medium")};
            }
            else if(this.state.sizeRange === "Large")
            {
                query = {price : {gte : (5000), lt : (10000)}, roomType : ("Large")}
            }
        }
        else if(this.state.priceRange === "10000 and above")
        {
            if(this.state.sizeRange === "All")
            {
                query = {price : {gte : (10000)}};
            }
            else if(this.state.sizeRange === "Small")
            {
                query = {price : {gte : (10000)}, roomType : ("Small")};
            }
            else if(this.state.sizeRange === "Medium")
            {
                query = {price : {gte : (10000)}, roomType : ("Medium")};
            }
            else if(this.state.sizeRange === "Large")
            {
                query = {price : {gte : (10000)}, roomType : ("Large")}
            }
        }

        // console.log("the query is " + JSON.stringify(query));
        axios.get('http://localhost:5000/search', {params : query}).
        then(res => {
            const r = res.data;
            this.setState({rooms: r});

        })
    }
    arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));    bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    };


    render(){
        return(
            <div>
                <Dashboard />
                <h1>Room Designs for you</h1>
                <span> Select Price Range </span>
                <select name = "priceRange" id = "price" onChange = {this.onSelect} value = {this.state.priceRange}>
                    <option value = "All"> All </option>
                    <option value = "0 - 2000"> 0-2000 </option>
                    <option value = "2000 - 5000"> 2000-5000 </option>
                    <option value = "5000 - 10000"> 5000-10000 </option>
                    <option value = "10000 and above"> 10000 and above </option>
                </select>

                <span> Select Size </span>
                <select name = "sizeRange" id = "size" onChange = {this.onSelect} value = {this.state.sizeRange}>
                    <option value = "All"> All </option>
                    <option value = "Small"> Small </option>
                    <option value = "Medium"> Medium </option>
                    <option value = "Large"> Large </option>
                </select>    
                <button style = {{margin : 70}} onClick = {this.onApply}> Apply </button>
                <br />
                <br />
                {console.log("rooms are " + JSON.stringify(this.state.rooms))}
                {/* <p> {this.state.rooms[0]}</p> */}
                {/* Roooms {this.state.rooms[0]} */}
                <List rooms_list = {this.state.rooms} />
            </div>
        )
    }
}

export default Search
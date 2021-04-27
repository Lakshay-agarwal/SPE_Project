import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Select from "./Select"
import Description from "./Description"
import Search from "./Search"
import Upload from "./Upload"

class App extends Component{
    
    render(){
        return(
            <div className = "App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/">
                            <Home />
                        </Route>
                        <Route path = "/login">
                            <Login />
                        </Route>
                        <Route path = "/signUp">
                            <Signup />
                        </Route>
                        <Route path = "/select">
                            <Select />
                        </Route>
                        <Route path = "/room/description">
                            <Description />
                        </Route>
                        <Route path = "/search">
                            <Search />
                        </Route>
                        <Route path = "/upload">
                            <Upload />
                        </Route>
                    </Switch>

                </BrowserRouter>

                {/* <Home /> */}
            </div>
        );
    }
}

export default App;
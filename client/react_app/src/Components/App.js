import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { setCurrentUser, logoutUser } from "../actions/authAction";
import { Provider } from "react-redux";
import store from "../store";

import PrivateRoute from "../Routes/PrivateRoute"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Select from "./Select"
import Description from "./Description"
import Search from "./Search"
import Upload from "./Upload"

if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
  
      // Redirect to login
      window.location.href = "./login";
    }
  }



class App extends Component{
    
    render(){
        return(
            <div className = "App">
                <Provider store = {store}>
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
                            <Route path = "/room/description">
                                <Description />
                            </Route>
                            <PrivateRoute path = "/search" component = {Search} />
                            <PrivateRoute path = "/select" component = {Select} />
                            <PrivateRoute path = "/upload" component = {Upload} />
                        </Switch>

                    </BrowserRouter>
                </Provider>
                

                {/* <Home /> */}
            </div>
        );
    }
}

export default App;
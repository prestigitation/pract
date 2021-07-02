import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
<<<<<<< HEAD
    BrowserRouter
} from "react-router-dom";
import HomePage from "../../../HomePage";
import Register from '../../../Auth/Register'
import Login from '../../../Auth/Login'
=======
} from "react-router-dom";
import HomePage from "../../../HomePage";
>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd

const Routers = () => {

    return (
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route  exact path="/" component={HomePage}/>
                <Route  exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
=======
                <Route path="/">
                    <HomePage/>
                </Route>
>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
            </Switch>
        </Router>
    );
};

function Teachers() {
    return <h2>teachers</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


export default Routers;

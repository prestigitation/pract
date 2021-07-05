import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import HomePage from "../../../HomePage";
import Register from '../../../Auth/Register'
import Login from '../../../Auth/Login'
import Dashboard from "../../../Dashboard";
import UsersDashboard from "../../../Dashboard/UsersDashboard";

const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={HomePage}/>
                <Route  exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/dashboard/users" component={UsersDashboard}/>
                <Route  path="/dashboard" component={Dashboard}/>
                

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

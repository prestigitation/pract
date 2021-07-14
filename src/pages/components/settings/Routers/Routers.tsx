import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import HomePage from "../../../HomePage";
import Register from '../../../Auth/Register'
import Login from '../../../Auth/Login'
import Dashboard from "../../../Dashboard";
import UsersDashboard from "../../../Dashboard/UsersDashboard";
import TeachersDashboard from "../../../Dashboard/TeachersDashboard";
import UserPanel from '../../../UserPanel'

const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={withRouter(HomePage)}/>
                <Route  exact path="/register" component={withRouter(Register)}/>
                <Route exact path="/login" component={withRouter(Login)}/>
                <Route exact path="/users/:id" component={UserPanel}/>
                <Route exact path="/dashboard/users" component={withRouter(UsersDashboard)}/>
                <Route exact path="/dashboard/teachers" component={withRouter(TeachersDashboard)}></Route>
                <Route  exact path="/dashboard" component={withRouter(Dashboard)}/>
                

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

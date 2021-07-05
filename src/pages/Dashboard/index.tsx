import React from 'react'
import axios from 'axios'
import './index.css'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import UsersDashboard from './UsersDashboard'
const Dashboard= () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='dashboard'>
            <Link to={`${path}/users`}>
                Пользователи
            </Link>

        
        </div>
    );
} ;

// useParams
export default Dashboard
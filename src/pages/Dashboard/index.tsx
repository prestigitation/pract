import React from 'react'
import axios from 'axios'
import './index.css'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import UsersDashboard from './UsersDashboard'
import { useSelector } from 'react-redux'

const Dashboard= () => {
    let { path, url } = useRouteMatch();
    const user = useSelector((state:any) => state.users.user)
    return (
        
        <div className='dashboard'>
            {user.role_id == 2 ? 
            <>
                <Link to={`${path}/users`}>
                    Пользователи
                </Link>
                <Link to={`${path}/teachers`}>
                    Преподаватели
                </Link>
            </>
            :`Вы не имеете доступа к этой странице.`}
        </div>
    );
} ;

// useParams
export default Dashboard
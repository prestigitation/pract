import React from "react";
import './index.css'
import images from "../../../../assets/image";
import {Link} from 'react-router-dom'
import { useHistory } from "react-router";
import {DefaultRootState, useDispatch, useSelector} from 'react-redux'
import { log_out } from "../../../../store/reducers/userReducer";


const Header = () =>  {
    let history = useHistory()
    let user = useSelector((state:any)=> state.users.user)
    const dispatch = useDispatch()
    function pushTo(url : string) {
        history.push(url)
    }
    function logout() {
        dispatch(log_out())
    }
    function handleClick() {
        history.push('/')
    }
    return ( 
        <div className={'header-main-wrapper'}>
            <div className={'header-wrapper'}>
                <img src={images.logo} alt="logo"/>
                <div className={'header-menu'}>
                    <div className={'active'}>
                        <div onClick={handleClick}>
                            Главная
                        </div>
                    </div>
                    <div>Преподовалтели</div>
                    <div>Новости</div>
                    <div>Расписание</div>
                    <div>Вопрос-ответ</div>
                    {
                        !user.id && !user.login ? <>
                            <div className={'header-auth'}> Вход </div>
                            <div className={"header-auth"} onClick={() => pushTo('/register')}> Регистрация </div>
                        </> 
                        : <>
                            <div className="header-auth" onClick={logout}>
                                Выход
                            </div>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;

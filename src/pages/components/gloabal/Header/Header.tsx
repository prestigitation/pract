import React from "react";
import './index.css'
import images from "../../../../assets/image";
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import { useHistory } from "react-router";


const Header = () =>  {
    let history = useHistory()
    function pushTo(url : string) {
        history.push(url)
    }
=======

const Header = () => {

>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
    return (
        <div className={'header-main-wrapper'}>
            <div className={'header-wrapper'}>
                <img src={images.logo} alt="logo"/>
                <div className={'header-menu'}>
                    <div className={'active'}>Главная</div>
                    <div>Преподовалтели</div>
                    <div>Новости</div>
                    <div>Расписание</div>
                    <div>Вопрос-ответ</div>
<<<<<<< HEAD
                    <div className={'header-auth'}> Вход </div>
                    <div className={"header-auth"} onClick={() => pushTo('/register')}> Регистрация </div>
=======
                    <div className={'header-login'}>Вход</div>
>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
                </div>
            </div>
        </div>
    );
};

export default Header;

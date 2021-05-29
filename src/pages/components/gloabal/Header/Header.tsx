import React from "react";
import './index.css'
import images from "../../../../assets/image";

const Header = () => {

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
                    <div className={'header-login'}>Вход</div>
                </div>
            </div>
        </div>
    );
};

export default Header;

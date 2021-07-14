import React, {useState} from "react";
import "./index.css";
import clsx from "clsx";
import images from "../../../../assets/image";
import LampSVG from "../UI/SVGComponents/LampSVG";
import HeadSVG from "../UI/SVGComponents/HeadSVG";
import OpenBookSVG from "../UI/SVGComponents/OpenBookSVG";
import LogInSVG from "../UI/SVGComponents/LogInSVG";
import TabletSVG from "../UI/SVGComponents/TabletSVG";
import ClosedBookSVG from "../UI/SVGComponents/ClosedBookSVG";
import FolderSVG from "../UI/SVGComponents/FolderSVG";
import GridSVG from "../UI/SVGComponents/GridSVG";
import ArrowsSVG from "../UI/SVGComponents/ArrowsSVG";
import TimeSVG from "../UI/SVGComponents/TimeSVG";
import PhoneSVG from "../UI/SVGComponents/PhoneSVG";
import ArrowSVG from "../UI/SVGComponents/ArrowSVG";
import BurgerSVG from "../UI/SVGComponents/BurgerSVG";

import {useSelector} from 'react-redux'
import { Link, useHistory } from "react-router-dom";

const Menu = () => {
    const history = useHistory()
    const [isOpen,setIsOpen] = useState(false)
    let user = useSelector((state:any)=> state.users.user)
    const clickElement = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className={'mobile-menu'} onClick={() => setIsOpen(current => !current)}>
                <BurgerSVG/>
                <img width='100' src={images.logo} alt="logo"/>
            </div>
            {isOpen &&<div className={"back-lower"}/>}
            <div className={clsx("menu",{'--isOpenMenu':isOpen})}>
                <div className={clsx("menu-toggle-arrow",{'--isChangeArrow':isOpen})} onClick={() => setIsOpen(current => !current)}>
                    <ArrowSVG/>
                </div>
                <div className={'menu-content-wrapper'}>
                    <div className="menu-content">
                        <div className={'menu-content-header'}>
                            <div className={'menu-content-header-avatar'}>
                                {
                                    user.id && user.login ?  <>
                                        <img src={`/avatars/${user.id}.jpeg`} id={'avatar'} alt="avatar"/>
                                        <Link to={`/users/${user.id}`}>
                                            {user.login}
                                        </Link>
                                    </>: ``
                                }
                            </div>
                            <div className={'menu-content-header-status'}>
                                <div className={'menu-content-header-item'} onClick={clickElement}>
                                    <LampSVG className={'menu-content-header-item-icon'}/>
                                    Абитуриент
                                </div>
                                <div className={'menu-content-header-item'} onClick={clickElement}>
                                    <HeadSVG className={'menu-content-header-item-icon'}/>
                                    Студент
                                </div>
                                <div className={'menu-content-header-item'} onClick={clickElement}>
                                    <OpenBookSVG className={'menu-content-header-item-icon'}/>
                                    Преподователь
                                </div>
                            </div>
                            <div>
                                <div className={'menu-content-header-item'} onClick={clickElement}>
                                    <LogInSVG className={'menu-content-header-item-icon'}/>
                                    ВХОД / РЕГИСТРАЦИЯ
                                </div>
                            </div>
                        </div>
                        <div className={'menu-content-links'}>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <TabletSVG className={'menu-content-header-item-icon'}/>
                                Направления
                            </div>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <ClosedBookSVG className={'menu-content-header-item-icon'}/>
                                Правила приема
                            </div>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <GridSVG className={'menu-content-header-item-icon'}/>
                                Тестирование
                            </div>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <FolderSVG className={'menu-content-header-item-icon'}/>
                                Преподаватели
                            </div>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <ArrowsSVG className={'menu-content-header-item-icon'}/>
                                Вопрос-ответ
                            </div>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <TimeSVG className={'menu-content-header-item-icon'}/>
                                Новости
                            </div>
                        </div>
                        <div className={'menu-content-phone'}>
                            <div className={'menu-content-header-item'} onClick={clickElement}>
                                <PhoneSVG className={'menu-content-header-item-icon'}/>
                                <a href="#">0 (555) 2-39-12</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;

import React from "react";
import Routers from "./components/settings/Routers/Routers";
import './index.css'
import Header from "./components/gloabal/Header/Header";
import Footer from "./components/gloabal/Footer";
import Menu from "./components/gloabal/Menu/Menu";

const InitialApp = () => {

    return (
        <div className={'container'}>
            <Header/>
            <Menu/>
            <Routers/>
            <Footer/>
<<<<<<< HEAD
=======

>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
        </div>
    );
};

export default InitialApp;

import React from "react";
import './index.css'
import NewCardWithCard from "./components/NewCardWithCard";
import {news} from "./data";

const News = () => {

    return (
        <div className={'news'}>
            <div className={"list-teachers-title"}>
                Новости
            </div>
            <div className={"list-teachers-cars-wrapper"}>
                <NewCardWithCard data={news} />
            </div>
            <div className={"list-teachers-read-more"}>
                Посмотреть все
            </div>
        </div>
    );
};

export default News;

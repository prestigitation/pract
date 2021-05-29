import React from "react";
import './index.css'
import {New} from "../../types";
import dayjs from "dayjs";

interface NewsCardProps {
    item: New
}

const renderTextWithSpread = (text:string,length:number) => {
    if (text.length < length) {
        return text
    }

    return `${text.substr(1, length)}...`
}

const NewsCard = (props:NewsCardProps) => {

    const {
        title,
        data,
        description
    } = props.item

    return (
        <div className={'news-card'}>
            <div className={'news-card-title'}>{renderTextWithSpread(title, 40)}</div>
            <div className={'news-card-description'}>{renderTextWithSpread(description, 55)}</div>
            <div className={'news-card-footer'}>
                <div className={'news-card-more-details'}>подробнее...</div>
                <div className={'news-card-data'}>{dayjs(data).format("DD.MM.YY")}</div>
            </div>
        </div>
    );
};

export default NewsCard;

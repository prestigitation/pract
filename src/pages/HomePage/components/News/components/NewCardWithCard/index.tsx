import React, {useState, useCallback} from "react";
import "./index.css";
import {FieldsCollectionNews, New} from "../../types";
import NewsCard from "../NewCard";
import AnimateOpacity from "../../../../../components/gloabal/UI/AnimateOpacity";

interface NewCardWithCardProps {
    data: FieldsCollectionNews
}

const NewCardWithCard = (props: NewCardWithCardProps) => {

    const {data} = props;

    const [activeTub, setActiveTub] = useState<string>(Object.keys(data)[0]);

    const handleChangeActiveTub = useCallback((key) => {
        setTimeout(() => {
            setActiveTub(key);
        }, 1);
    }, [activeTub]);

    return (
        <div>
            <div className={"tubs-container"}>
                {Object.keys(data).map((key) => data[key].news.length !== 0 && (
                        <div
                            className={`news-tab ${key === activeTub && "--activeTub"}`}
                            onClick={() => handleChangeActiveTub(key)}
                        >
                            {data[key].title}
                        </div>
                    ),
                )}
            </div>
            <div className={"news-card-wrapper"}>
                {data[activeTub].news.map((item: New, index) => (
                    <AnimateOpacity key={index} count={index + 10}>
                        <NewsCard item={item}/>
                    </AnimateOpacity>
                ))}
            </div>
        </div>
    );
};

export default NewCardWithCard;

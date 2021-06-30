import React from "react";
import DirectionsCard from "./components/DirectionsCard";
import "./index.css";

const DescriptionDirections = () => {
    return (
        <div className={"description-directions"}>
            <div className={"description-directions-title"}>
                Опиание направлений и специальностей
            </div>
            <div className={"description-directions-cards"}>
                <DirectionsCard/>
                <DirectionsCard typeInfo={"grid"}/>
                <DirectionsCard typeInfo={"grid"}/>
                <DirectionsCard/>
            </div>
        </div>
    );
};

export default DescriptionDirections;

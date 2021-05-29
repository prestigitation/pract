import React from "react";
import "./index.css";

interface DirectionsCardProps {
    typeInfo?: "line" | "grid"
}

const DirectionsCard = (props: DirectionsCardProps) => {

    const {typeInfo = "line"} = props;

    return (
        <div className={"directions-card"}>
            <div className={"directions-card-title"}><span>6.44.03.01 - БАКАЛАВРИАТ</span></div>
            <div>
                <div className={"directions-card-sub_title"}>
                    <span>Направление</span> - Педагогическое образование
                </div>
                <div className={"directions-card-sub_title"}>
                    <span>Профиль</span> - Информатика и информационные
                    технологий в образовании
                </div>
            </div>
            {typeInfo === "grid" ? (
                <div className={"directions-card-grid"}>
                    <div>
                        <div>
                            <span>4 года</span>
                        </div>
                        <div>срок освоения</div>
                    </div>
                    <div>
                        <div><span>очно</span></div>
                        <div>форма обучения</div>
                    </div>
                    <div>
                        <div><span>-бюджет
                    </span></div>
                        <div><span>-договор</span></div>
                    </div>
                </div>
            ) : (
                <div className={"directions-card-line"}>
                    <span>2 года (очно)</span> или <span>2 года 3 месяца (заочно)</span> срок освоения
                    <span>- договор</span>
                </div>
            )}
        </div>
    );
};

export default DirectionsCard;

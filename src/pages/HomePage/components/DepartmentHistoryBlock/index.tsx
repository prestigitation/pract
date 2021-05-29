import React from "react";
import "./index.css";
import images from "../../../../assets/image";
import BorderSVG from "../../../components/gloabal/UI/SVGComponents/BorderSVG";
import BurgerSVGbg from "../../../components/gloabal/UI/SVGComponents/BurgerSVGbg";

const DepartmentHistoryBlock = () => {
    return (
        <div className={"department-history"}>
            <div className={"department-history-info-wrapper"}>
                <div className={"department-history-info-title"}>История кафедры</div>
                <div className={"department-history-info-description"}>
                    Кафедра «Информатика и программная инженерия» сформирована в 2015 году в рамках реорганизации кафедры «Физика, математика и
                    информатика», успешно функционировавшей с 1994 года, со дня образования инженерно-педагогического факультета ПГУ им. Т.Г. Шевченко
                    в городе Рыбнице. В настоящий момент кафедра обеспечивает преподавание естественнонаучных и специальных дисциплин. За время своей
                    работы кафедра подготовила более 400 специалистов в области программной инженерии и педагогического образования (информатики).
                    <br/>
                    <br/>
                    С начала своей деятельности коллектив кафедры ориентировался на спрос потребителей: год от года совершенствовались педагогические
                    технологии, появлялись новые специальности
                </div>
                <div className={"department-history-info-read-all"}>Читать полностью</div>
            </div>
            <div className="department-history-wrapper-la">
                <div className="department-history-wrapper-image-la">
                    <BurgerSVGbg className={"burger-back"}/>
                    <BorderSVG className={"border-back"}/>
                    <div className={"department-history-image-la"}>
                        <img src={images.tyagulska} alt="images.tyagulska"/>
                    </div>
                </div>
                <div className="department-history-wrapper-info-la">
                    <div className={"info-la-lastName"}>Тягульская</div>
                    <div className={"info-la-name-secondName"}>Людмила Анатольевна</div>
                    <div className={"info-la-status"}>Заведующий кафедрой, кандидат экономических наук,
                        доцент
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentHistoryBlock;

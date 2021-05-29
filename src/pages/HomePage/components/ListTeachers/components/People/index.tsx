import React from "react";
import images from "../../../../../../assets/image";
import './index.css'
import BurgerSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BurgerSVGsm";
import BorderSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BorderSVGsm";

interface TeacherProps {
    item: any
}

const Teacher = (props:TeacherProps) => {

    const {
        img,
        firstName,
        lastName,
        secondName,
        status
    } = props.item

    return (
        <div className="department-history-wrapper-people">
            <div className="department-history-wrapper-image-people">
                <BurgerSVGsm className={'burger-back'}/>
                <BorderSVGsm className={'border-back'}/>
                <div className={'department-history-image-people'}>
                    <img src={img} alt="images.tyagulska"/>
                </div>
            </div>
            <div className="department-history-wrapper-info-people">
                <div className={'info-people-lastName'}>{lastName} тест</div>
                <div className={'info-people-name-secondName'}>{firstName} {secondName}</div>
                <div className={'info-people-status'}>{status}</div>
            </div>
        </div>
    )
}

export default Teacher
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
        status,
        surname,
        name,
        position,
        id
    } = props.item

    return (
        <div className="department-history-wrapper-people">
            <div className="department-history-wrapper-image-people">
                <BurgerSVGsm className={'burger-back'}/>
                <BorderSVGsm className={'border-back'}/>
                <div className={'department-history-image-people'}>
                    <img src={`/teachers/${id}.jpeg`} alt="images.tyagulska"/>
                </div>
            </div>
            <div className="department-history-wrapper-info-people">
                <div className={'info-people-lastName'}>{surname}</div>
                <div className={'info-people-name-secondName'}>{name}</div>
                <div className={'info-people-status'}>{position}</div>
            </div>
        </div>
    )
}

export default Teacher
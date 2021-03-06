import React from "react";
import { SVGProps } from "./types";

const BurgerSVG = (props:SVGProps) => {

    const {className = ""} = props;

    return (
        <div className={className}>
            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" fill="#3E4554"/>
                <path d="M0 8.5C0 7.67157 0.671573 7 1.5 7H23.5C24.3284 7 25 7.67157 25 8.5C25 9.32843 24.3284 10 23.5 10H1.5C0.671573 10 0 9.32843 0 8.5Z" fill="#3E4554"/>
                <path d="M0 15.5C0 14.6716 0.671573 14 1.5 14H18.5C19.3284 14 20 14.6716 20 15.5C20 16.3284 19.3284 17 18.5 17H1.5C0.671573 17 0 16.3284 0 15.5Z" fill="#3E4554"/>
            </svg>
        </div>
    );
};

export default BurgerSVG;

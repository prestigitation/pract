import React from "react";
import { SVGProps } from "./types"

const TelegramSVG = (props:SVGProps) => {

    const {className = ""} = props;

    return (
        <div className={className}>
            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.57458 13.4348L9.17094 19.1123C9.74844 19.1123 9.99856 18.8642 10.2985 18.5663L13.0061 15.9787L18.6164 20.0874C19.6454 20.6608 20.3703 20.3588 20.6479 19.1408L24.3305 1.88473L24.3315 1.88371C24.6579 0.362672 23.7814 -0.232119 22.7789 0.141023L1.13262 8.42844C-0.344703 9.00188 -0.322334 9.82544 0.881482 10.1986L6.41558 11.9199L19.2702 3.87651C19.8751 3.47592 20.4252 3.69757 19.9727 4.09816L9.57458 13.4348Z" fill="#ECF0F3"/>
            </svg>
        </div>
    );
};

export default TelegramSVG;

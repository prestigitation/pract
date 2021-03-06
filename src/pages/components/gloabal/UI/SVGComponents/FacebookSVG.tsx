import React from "react";
import { SVGProps } from "./types";

const FacebookSVG = (props:SVGProps) => {

    const {className = ""} = props;

    return (
        <div className={className}>
            <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.98167 9.22795L7.98167 6.20097C7.98167 5.36552 8.65971 4.68747 9.49516 4.68747H11.0086V0.903748L7.98167 0.903748C5.47381 0.903748 3.4412 2.93637 3.4412 5.44422L3.4412 9.22795H0.414215L0.414215 13.0117H3.4412L3.4412 25.1196H7.98167L7.98167 13.0117H11.0086L12.5221 9.22795H7.98167Z" fill="#ECF0F3"/>
            </svg>
        </div>
    );
};

export default FacebookSVG;

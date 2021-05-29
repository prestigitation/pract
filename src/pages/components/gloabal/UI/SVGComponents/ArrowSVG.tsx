import React from "react";
import { SVGProps } from "./types";

const ArrowSVG = (props:SVGProps) => {

    const {className = ""} = props;

    return (
        <div className={className}>
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03033 0.46967C5.73744 0.176777 5.26256 0.176777 4.96967 0.46967L0.96967 4.46967C0.676777 4.76256 0.676777 5.23744 0.96967 5.53033L4.96967 9.53033C5.26256 9.82322 5.73744 9.82322 6.03033 9.53033C6.32322 9.23744 6.32322 8.76256 6.03033 8.46967L2.56066 5L6.03033 1.53033C6.32322 1.23744 6.32322 0.762563 6.03033 0.46967Z" fill="#2F80ED"/>
            </svg>
        </div>
    );
};

export default ArrowSVG;

import React from "react";
import "./index.css";

interface CounterProps {
    countValue:number;
    label: string
}

const Counter = (props:CounterProps) => {

    const {
        countValue,
        label
    } = props

    return (
        <div className={'counter-wrapper'}>
            <div className={'counter-value'}>{countValue}</div>
            <div className={'counter-label'}>{label}</div>
        </div>
    );
};

export default Counter;

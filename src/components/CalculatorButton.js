import React, {useState} from 'react';
import PropTypes from "prop-types";
export const CalculatorButton = (props) => {
    const colorClass = "calculator__btn_color-" + props.color;
    const sizeBigClass = props.value === "0" ? " calculator__btn_size-big" : "";
    const activeClass = props.isActive ? " calculator__btn_active" : "";

    const handleClick = () => {
        props.onClick(props.value);
    }

    const getSymbol = () => {
        switch (props.value) {
            case "add":
                return "+";
            case "subtract":
                return "-";
            case "multiply":
                return "×";
            case "divide":
                return "÷";
            default:
                return props.value;
        }
    }
    return (
        <button
            className={"calculator__btn " + colorClass + sizeBigClass + activeClass}
            onClick={handleClick}
        >
            {getSymbol()}
        </button>
    );
}

CalculatorButton.propTypes = {
    color: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}
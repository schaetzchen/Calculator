import React from 'react';
import PropTypes from "prop-types";
export const CalculatorResult = (props) => {
    const getAppropriateFontSize = () => {
        if (props.result.length > 17)
            return '30px'
        if (props.result.length > 14)
            return '40px'
        if (props.result.length > 11)
            return '50px';
        return '60px';
    }
    return (
        <span
            className="calculator__result"
            style={{fontSize: getAppropriateFontSize()}}
        >
            {props.result}
        </span>
    );
}

CalculatorResult.propTypes = {
    result: PropTypes.string.isRequired
}
import './sass/style.css'
import {CalculatorResult} from "./components/CalculatorResult";
import {CalculatorButton} from "./components/CalculatorButton";
import React, {useState} from "react";

function App() {
    const [result, setResult] = useState("0");
    const [previous, setPrevious] = useState("");
    const [operation, setOperation] = useState("");

    const handleClick = (value) => {
        switch (value) {
            case "AC":
                setResult("0");
                setOperation("");
                break;

            case "<-":
                if (result.length <= 1 || (result.length === 2 && result[0] === "-"))
                    setResult("0");
                else if (result === 'Infinity' || result === 'NaN')
                    setResult("0");
                else
                    setResult(prev => prev.substring(0, prev.length - 1));
                break;

            case "+/-":
                if (+result !== 0 && result !== 'Infinity' && result !== ' Nan')
                    setResult(prev => (-1 * +prev.replace(',', '.')).toString().replace('.', ','));
                break;

            case ",":
                if (!result.includes(",") && result !== 'Infinity' && result !== 'NaN')
                    setResult(prev => prev + ",");
                break;

            case "add":
            case "subtract":
            case "multiply":
            case "divide":
                if (operation === "")
                    setPrevious(result);
                setOperation(value);
                break;

            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (operation === "") {
                    setResult(prev => {
                        if (prev === "0" || prev === "Infinity" || prev === "NaN")
                            return value;
                        else return prev + value;
                    });
                } else {
                    if (previous === result || result === "0")
                        setResult(value);
                    else
                        setResult(prev => prev + value);
                }
                break;

            case "0":
                if (operation === "") {
                    if (result !== "0" && result !== "Infinity" && result !== "NaN") {
                        setResult(prev => prev + "0");
                    }
                } else {
                    if (previous === result)
                        setResult("0");
                    else if (result !== "0")
                        setResult(prev => prev + "0");
                }
                break;

            case "=":
                if (operation !== "") {
                    let calculatedResult;
                    switch (operation) {
                        case "add":
                            calculatedResult = +(previous.replace(',', '.')) + +(result.replace(',', '.'));
                            break;
                        case "subtract":
                            calculatedResult = +(previous.replace(',', '.')) - +(result.replace(',', '.'));
                            break;
                        case "multiply":
                            calculatedResult = +(previous.replace(',', '.')) * +(result.replace(',', '.'));
                            break;
                        case "divide":
                            calculatedResult = +(previous.replace(',', '.')) / +(result.replace(',', '.'));
                            break;
                        default: {}
                    }
                    setOperation("");
                    setResult(calculatedResult.toString().replace('.', ','));
                }
                break;
            default: {}
        }
    }

    return (
        <div className="calculator">
            <CalculatorResult result={result}/>
            <div className="calculator__row">
                <CalculatorButton
                    color="light"
                    value="AC"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="light"
                    value="<-"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="light"
                    value="+/-"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="orange"
                    value="divide"
                    onClick={handleClick}
                    isActive={operation === "divide"}
                />
            </div>
            <div className="calculator__row">
                <CalculatorButton
                    color="dark"
                    value="7"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="8"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="9"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="orange"
                    value="multiply"
                    onClick={handleClick}
                    isActive={operation === "multiply"}
                />
            </div>
            <div className="calculator__row">
                <CalculatorButton
                    color="dark"
                    value="4"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="5"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="6"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="orange"
                    value="subtract"
                    onClick={handleClick}
                    isActive={operation === "subtract"}
                />
            </div>
            <div className="calculator__row">
                <CalculatorButton
                    color="dark"
                    value="1"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="2"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value="3"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="orange"
                    value="add"
                    onClick={handleClick}
                    isActive={operation === "add"}
                />
            </div>
            <div className="calculator__row">
                <CalculatorButton
                    color="dark"
                    value="0"
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="dark"
                    value=","
                    onClick={handleClick}
                    isActive={false}
                />
                <CalculatorButton
                    color="orange"
                    value="="
                    onClick={handleClick}
                    isActive={false}
                />
            </div>
        </div>
    );
}

export default App;
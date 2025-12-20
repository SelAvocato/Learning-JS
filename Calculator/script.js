const output = document.getElementById("output");

let symbols = ["+", "-", "÷", "x"];
let newSymbols = ["+", "-", "/", "*"];

output.textContent = "0";

let comp = 0;

const displayNum = num => {
    if(output.textContent === "0"){
        output.textContent = num.toString();
    } else {
        output.textContent += num.toString();
    }
}

const sign = () => {
    if(output.textContent.at(0) == "-"){
        output.textContent = output.textContent.slice(1);
    } else {
        output.textContent = "-" + output.textContent;
    }
}

const operation = (symbol) => {
    if(output.textContent.at(-1) === symbol){
        return;
    } else if(symbols.includes(output.textContent.at(-1))){
        output.textContent = output.textContent.slice(0, -1) + symbol;
    } else {
        output.textContent += symbol;
    }
}

const clearDisplay = () => {
    output.textContent = "0";
    isPositive = true;
}

const dot = () =>  {
    let checkDot = output.textContent.split(/[+\-÷x]/);
    
    if(checkDot.at(-1).includes(".")) return;

    if(symbols.includes(output.textContent.at(-1))){
        output.textContent = output.textContent + "0.";
    } else {
        output.textContent = output.textContent + ".";
    }
}

const erase = () => {
    output.textContent = output.textContent.slice(0, -1);
    if(output.textContent.length <= 0) output.textContent = "0";
}

const replaceOperation = () => {
    for(let i = 0; i<symbols.length; i++){
        output.textContent = output.textContent.replace(symbols[i], newSymbols[i]);
    }
}

const equal = () => {
    replaceOperation();

    output.textContent = eval(output.textContent);
}
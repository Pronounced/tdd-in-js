function add (inputArr) {
       return operation(inputArr, function (result, input) {
            return result + input;
        })
}

function subtract(inputArr) {
    try {
        return operation(inputArr, function (result, input) {
            return result - input;
        })
    } catch {
        return "Cannot subtract two strings";
    }
}

function divide(inputArr) {
    var res = operation(inputArr, function (result, input) {
        return result / input;
    });
    //return (res === Infinity || isNaN(res)) ? "Error" : res;
    return (res === Infinity) ? "Cannot Divide By Zero" : isNaN(res) ? "Error" : res ;
}

function multiply(inputArr) {
    var res = operation(inputArr, function (result, input) {
        return result * input;
    });
    return isNaN(res) ? "Error" : res;
}

function modulus(inputArr) {
    return inputArr;
}

function exponent(inputArr) {
    return inputArr;
}

function operation(inputArr, operator) {
    var result = inputArr.shift();
    for (i = 0; i < inputArr.length; i++) {
        result = operator(result, inputArr[i]);
    }
    return result;
}


module.exports = { subtract, add, divide, multiply, operation}
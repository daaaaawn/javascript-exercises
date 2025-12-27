const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }

    let sum = 0;
    let smallestNum = Math.min(firstNum, secondNum);
    let largestNum = Math.max(firstNum, secondNum);

    for (let i = smallestNum; i <= largestNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

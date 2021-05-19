function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function subtract (firstNum, secondNum){
    return firstNum - secondNum
}

module.exports = { //to export it
    sum,
    subtract
}

console.log("It can sum 1 and 2", sum(1,2) === 3) 



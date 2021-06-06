function sum(firstNumber, secondNumber){
    return (+firstNumber + +secondNumber).toFixed(2)
}

function subtract (firstNum, secondNum){
    return firstNum - secondNum
}

function incrementAge(people){
    return people.map(person => {
        person.age+=1
        return person
    })
}

module.exports = { //to export it
    sum,
    subtract,
    incrementAge
}

console.log("It can sum 1 and 2", sum(1,2) === 3) 



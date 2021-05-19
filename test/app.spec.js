const { sum, subtract } = require("../app") //desstructuring
const assert = require("assert") //built in
const { strictEqual } = require("assert")


it("it adds 2 and 3" , () => {
    assert.equal(sum(2,3), 6) // dont use assert
})
it("it takes strings", () => {
    strictEqual(sum("2"+"3"), 5)
})

it("it subtracts 2 from 3", () => {
    strictEqual(subtract(3,2), 1)
})

const { sum, subtract } = require("../app") //desstructuring
const assert = require("assert") //built in
const { strictEqual } = require("assert")


it("adds 2 and 3" , () => {
    assert.equal(sum(2,3), 5) // dont use assert
})
it("adds the strings '2' and '3' ", () => {
    assert.equal(sum('2','3'), 5)
})

it("subtracts 2 from 3", () => {
    strictEqual(subtract(3,2), 1)
})

it("adds .2 and .3 ", () => {
    assert.equal(sum(.2,.3), .5)
})
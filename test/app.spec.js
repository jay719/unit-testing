const { sum } = require("../app") //desstructuring
const assert = require("assert") //built in

it("it adds 2 and 3" , () => {
    assert.equal(sum(2,3), 5)
})
const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("should update the store when we call the store function", async function () {
        const transactionResponse = await simpleStorage.store("13")
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        assert.equal(updatedValue.toString(), "13")
    })
    it("should give the correct pair of name and favorite number", async function () {
        const object = await simpleStorage.addPerson("Rahul", "22")
        await object.wait(1)
        const { nameResponse, favNumResponse } = await simpleStorage.People(0)
        assert.equal(nameResponse.toString(), "Rahul")
        assert.equal(favNumResponse.toString(), "22")
    })
})

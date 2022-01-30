const assert = require('chai').assert;
const add = require('../app/calculator').add;
const mul = require('../app/calculator').mul;
const div = require('../app/calculator').div;
const sub = require('../app/calculator').sub;


describe('App', function () {

    describe('Add', function () {

        it('Expected result 7 PASS', function () {
            let result = add(7, 3)
            assert.equal(result, 10)
        })

        it('Expected result 8 FAIL', function () {
            let result = add(7, 3)
            assert.equal(result, 4)
        })

    })

    describe('Sub', function () {

        it('Expected result 3 PASS', function () {
            let result = sub(8, 4)
            assert.equal(result, 4)
        })

        it('Expected result 5 FAIL', function () {
            let result = sub(8, 4)
            assert.equal(result, 6)
        })

    })


    describe('Mul', function () {

        it('Expected result 10 PASS', function () {
            let result = mul(7, 2)
            assert.equal(result, 14)
        })

        it('Expected result 12 FAIL', function () {
            let result = mul(7, 2)
            assert.equal(result, 16)
        })

    })


    describe('Div', function () {

        it('Expected result 5 PASS', function () {
            let result = div(10, 2)
            assert.equal(result, 5)
        })

        it('Expected result 2 FAIL', function () {
            let result = div(10, 5)
            assert.equal(result, 9)
        })

    })

})
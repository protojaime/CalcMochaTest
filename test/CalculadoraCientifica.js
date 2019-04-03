
var CalculadoraCientifica = require('../CalculadoraCientifica');
var expect = require('chai').expect;

var calc = new CalculadoraCientifica();




describe('#display()', function () {
    context('with state 0', function () {
        it('should change the state to 1', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            calc.display(5)
            expect(calc.estado).to.equal(1)
        })
        it('should set the number as the result field', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            calc.display(5)
            expect(calc.resultado).to.equal('5')
        })
    })
    context('with state 1', function () {
        it('state should remain on 1', function () {
            calc.c()
            calc.display(5)
            expect(calc.estado).to.equal(1)
            calc.display(5)
            expect(calc.estado).to.equal(1)
        })
        it('should add the number to the already existing result field', function () {
            calc.c()
            calc.display(5)
            expect(calc.resultado).to.equal('5')
            calc.display(5)
            expect(calc.resultado).to.equal('55')
        })
    })
})


describe('#calc.displayOp()', function () {
    context('with state 0', function () {
        it('should change the state to 1', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            expect(calc.estado).to.equal(0)
            calc.displayOp('-')
            expect(calc.estado).to.equal(1)
        })
        it('should add the number to the already existing result field', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            calc.display(5)
            expect(calc.resultado).to.equal('5')
            calc.calc() //state changes to 0
            calc.displayOp('-')
            expect(calc.resultado).to.equal('5-')
            expect(calc.estado).to.equal(1)
        })
    })
    context('with state 1', function () {
        it('state should remain on 1', function () {
            calc.c()
            calc.display(5)
            expect(calc.estado).to.equal(1)
            calc.displayOp('-')
            expect(calc.estado).to.equal(1)
        })
        it('should add the number to the already existing result field', function () {
            calc.c()
            calc.display(5)
            expect(calc.resultado).to.equal('5')
            calc.display(5)
            expect(calc.resultado).to.equal('55')
        })
    })
})

describe('#calc.calc()', function () {
    context('with valid evaluation result string', function () {
        it('should change the state to 1', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            expect(calc.estado).to.equal(0)
            calc.display(5)
            calc.display(5)
            calc.displayOp('-')
            calc.display(5)
            expect(calc.estado).to.equal(1)
            calc.calc()
            expect(calc.estado).to.equal(0)
        })
        it('should return the correct result', function () {
            calc.c()
            calc.display(5)
            calc.display(5)
            calc.displayOp('-')
            calc.display(5)
            calc.calc()
            expect(calc.resultado).to.equal(50)
        })
    })
    context('with invalid evaluation result string', function () {
        it('state should change to -1', function () {
            calc.estado = 0;//estado=0 is after an operation is completed, therefore it's faster to just set it up
            calc.display('a')
            calc.calc()
            expect(calc.estado).to.equal(-1)
        })
        it('should set the result to ERROR', function () {
            calc.c()
            calc.display(5)
            calc.display(5)
            calc.displayOp('-')
            calc.display('a')
            calc.calc()
            expect(calc.resultado).to.equal('ERROR');
        })
    })
})



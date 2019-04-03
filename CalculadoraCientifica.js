"use strict";
class Calculadora {
    constructor() {
        this.estado = 1;

    }
    calc() {
        try {
            this.resultado = eval(this.resultado);

            this.estado = 0;
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'
        }

    }
    display(number) {
        if (this.estado <= 0) {
            this.estado = 1;
            this.resultado = "";
        }
        this.resultado += number;
    }

    displayOp(operation) {
        if (this.estado < 0) {
            this.resultado = "";
        }
        this.estado = 1;
        this.resultado += operation;
    }
    c() {

        this.estado = 1;
        this.resultado = "";

    }

}


class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
        this.resultado = 0;
        this.mr = 0;
        this.estado = 1;
    }
    displayMrc() {
        this.resultado = this.mr;
    }



    mrmas() {
        try {
            this.mr = this.mr + eval(this.resultado);
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'

        }

    }

    mrmenos() {
        try {
            this.mr = this.mr - eval(this.resultado);
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'

        }
    }



    pi() {
        this.resultado += Math.PI;
    }

    cuadrado() {
        try {
            this.resultado = eval(Math.pow(this.resultado, 2));
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'

        }
    }
    diezElevado() {
        try {
            this.resultado = eval(Math.pow(10, this.resultado));
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'

        }
    }

    hacer(operacion) {
        try {
            this.resultado = eval(operacion + this.resultado + ")");
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'
        }

    }
    cubo() {
        try {
            this.resultado = eval(Math.pow(this.resultado, 3));
        } catch (e) {
            console.log('la expresion compuesta no es computable. borra y empieza de nuevo'); this.estado = -1; this.resultado = 'ERROR'
        }
    }

}


module.exports = CalculadoraCientifica;
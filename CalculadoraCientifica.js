"use strict";
class Calculadora {
    constructor() {
        this.estado = 1;

    }
    calc() {
        try {
            document.getElementById('resultado').value = eval(document.getElementById('resultado').value);

            this.estado = 0;
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');

        }

    }
    display(number) {
        if (this.estado == 0) {
            this.estado = 1;
            document.getElementById('resultado').value = "";
        }
        document.getElementById('resultado').value += number;
    }

    displayOp(operation) {

        this.estado = 1;
        document.getElementById('resultado').value += operation;
    }
    c() {

        this.estado = 1;
        document.getElementById('resultado').value = "";

    }

}


class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
        this.mr = 0;
        this.estado = 1;
    }
    displayMrc() {
        document.getElementById('resultado').value = this.mr;
    }

    mrmas() {
        try {
            this.mr = this.mr + eval(document.getElementById('resultado').value);
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');

        }

    }

    mrmenos() {
        try {
            this.mr = this.mr - eval(document.getElementById('resultado').value);
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');

        }
    }



    pi() {
        document.getElementById('resultado').value += Math.PI;
    }

    cuadrado() {
        try {
            document.getElementById('resultado').value = eval(Math.pow(document.getElementById('resultado').value, 2));
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');

        }
    }
    diezElevado() {
        try {
            document.getElementById('resultado').value = eval(Math.pow(10, document.getElementById('resultado').value));
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');

        }
    }

    hacer(operacion) {
        try {
            document.getElementById('resultado').value = eval(operacion + document.getElementById('resultado').value + ")");
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');
        }

    }
    cubo() {
        try {
            document.getElementById('resultado').value = eval(Math.pow(document.getElementById('resultado').value, 3));
        } catch (e) {
            alert('la expresion compuesta no es computable. borra y empieza de nuevo');
        }
    }

}



var calc = new CalculadoraCientifica();

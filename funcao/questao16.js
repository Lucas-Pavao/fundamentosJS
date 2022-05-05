function calculadora(valor1, c, valor2) {


    let resultado = 0;
    switch (c) {

        case "+":

            resultado = valor1 + valor2;
            console.log("A soma de " + valor1 + " mais " + valor2 + " é " + resultado)
            break
        case "-":
            resultado = valor1 - valor2;
            console.log("A Subtração de " + valor1 + " menos " + valor2 + " é " + resultado)
            break
        case "/":
            resultado = valor1 / valor2;
            console.log("A Divisão de " + valor1 + " dividido por " + valor2 + " é " + resultado)
            break
        case "*":
            resultado = valor1 * valor2;
            console.log("A Multiplicção de " + valor1 + " multiplicado por " + valor2 + " é " + resultado)
            break

        default:
            console.log("Valor invalido")
            break
    }

}

calculadora(2, "+", 2)
calculadora(2, "-", 2)
calculadora(2, "/", 2)
calculadora(2, "*", 2)


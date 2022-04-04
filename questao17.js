function aumento(salario, plano) {


    let resultado = 0;
    switch (plano) {

        case "A":

            resultado = (10 / 100) * salario;
            console.log("O aumento e de R$ " + resultado.toFixed(2))
            break
        case "B":
            resultado = (15 / 100) * salario;
            console.log("O aumento e de R$ " + resultado.toFixed(2))
            break
        case "C":
            resultado = (20 / 100) * salario;
            console.log("O aumento e de R$ " + resultado.toFixed(2))
            break


        default:
            console.log("Valor invalido")
            break
    }

}

aumento(1200.44, "A")
aumento(100, "B")
aumento(100, "C")


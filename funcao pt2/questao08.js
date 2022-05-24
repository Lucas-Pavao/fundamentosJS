function multiplicacao(valor1, valor2) {
    let resultado = 0
    if (valor1 >= 0 && valor2 >= 0) {
        for (let i = 0; valor1 > i; i++) {

            resultado += valor2

        }
        return console.log(resultado)
    } else {

        console.log("valor negativo")
    }
}

multiplicacao(0, 4)
multiplicacao(4, 0)
multiplicacao(5, 5)

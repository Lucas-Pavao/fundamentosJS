function lanchonete(codigo, qtd) {


    let resultado = 0;
    switch (codigo) {

        case 100:

            resultado = 3 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break
        case 200:
            resultado = 4 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break
        case 300:
            resultado = 5.5 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break
        case 400:

            resultado = 7.5 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break
        case 500:
            resultado = 3.5 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break
        case 600:
            resultado = 2.8 * qtd;
            console.log("O Valor total a pagar e  R$ " + resultado.toFixed(2))
            break


        default:
            console.log("Valor invalido")
            break
    }

}
lanchonete(100, 10)
lanchonete(200, 10)
lanchonete(300, 10)
lanchonete(400, 10)
lanchonete(500, 10)
lanchonete(600, 10)


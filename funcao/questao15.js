function compraCarros(a) {

    switch (a) {

        case "hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza dessa escolha?")
            break

        default:
            console.log("Nao temos este veiculo aqui!")
    }

}

compraCarros("hatch")
compraCarros("motocicleta")
compraCarros("sedan")
compraCarros("caminhonete")
compraCarros("caminhao")


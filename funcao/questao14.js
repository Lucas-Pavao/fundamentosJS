function fruta(a) {

    switch (a) {

        case "maça":
            console.log("Não vendemos essa fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui esta, são 3 reais o quilo")
            break

        default:
            console.log("ERRO fruta nao econtraga")
    }

}

fruta("maça")
fruta("kiwi")
fruta("melancia")


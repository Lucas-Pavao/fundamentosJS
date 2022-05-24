function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) {
        return console.log(numero >= minimo && numero <= maximo)

    } else {

        return console.log(numero > minimo && numero < maximo)
    }


}

estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)
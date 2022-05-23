function numeroAleatorio(valor) {
    let min = 0
    let max = 10

    let numero = Math.floor(Math.random() * (max - min)) + min;
    if (numero === valor) {

        console.log("Parabens o numero sorteado foi " + numero)
    } else {
        console.log("Tente novamente o numero sorteado foi " + numero)
    }
}

numeroAleatorio(10)
numeroAleatorio(5)
numeroAleatorio(0)
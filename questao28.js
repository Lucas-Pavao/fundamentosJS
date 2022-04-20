function lerNumero(numeros) {


    let numerosP = 0
    let numerosI = 0
    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 == 0) {
            numerosP++;
        } else {
            numerosI++
        }
    }
    console.log("Numeros impares: " + numerosI + " Numeros pares: " + numerosP)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
lerNumero(vetor)
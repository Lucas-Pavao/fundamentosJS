function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0
        if (numeroPar)
            resultado.push(numeros[i])
    }
    console.log(resultado)
}


receberSomenteOsParesDeIndicesPares([10, 20, 40, 60, 200, 5000])
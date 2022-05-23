function media(array) {

    let media = 0, soma = 0

    for (let i = 0; i < array.length; i++) {
        soma += array[i]

    }

    media = soma / array.length

    return console.log("A media é igual a: " + media)
}

media([1, 2, 3, 4, 5])
media([0, 10])
function soma(array) {
    let resultado = 0

    array.forEach(numero => {

        resultado += numero
    });
    return resultado
}

let array = [1, 2, 3, 4, 5]
console.log(soma(array))
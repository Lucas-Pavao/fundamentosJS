function menorNumero(array) {
    return Math.min(...array)
}
let array = [1, 2, 3, 4, -1, -60, 0]

console.log(menorNumero(array))
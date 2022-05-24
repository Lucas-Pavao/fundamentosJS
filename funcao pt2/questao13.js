function pegaNumeros(array) {
    let resultado = []
    for (let item in array) {

        resultado = array.filter(item => typeof item === "number")
    }
    console.log(resultado)
}

let array = ["lugar", 1, 2, "ola,", 5]
pegaNumeros(array)
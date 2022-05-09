function inverso(valor) {
    if (typeof (valor) === "number") {
        return console.log(valor * -1)
    }
    if (typeof (valor) === "boolean") {

        return console.log(!valor)
    } else {
        console.log("boobleano ou numero esperados, mas o parametro e do tipo " + typeof (valor))
    }
}

inverso(100)
inverso(true)
inverso("Ola")
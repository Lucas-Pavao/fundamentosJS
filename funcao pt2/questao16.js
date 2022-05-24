function anoBi(ano) {
    if (ano % 100 == 0) {
        return false
    }
    else if (ano % 4 == 0) {
        return true
    } else if (ano % 400 == 0) {
        return true
    }
    return ("Não bissexto")
}

console.log(anoBi(2020))
console.log(anoBi(2100))
console.log(anoBi(2101))
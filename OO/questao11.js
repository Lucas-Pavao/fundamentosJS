function criaNovoArray(array) {

    let ultimo = array.pop()
    let primeiro = array.shift()




    return [primeiro, ultimo]
}


let array = [1, 2, 3]
console.log(criaNovoArray(array))
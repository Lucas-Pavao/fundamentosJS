function areaTriangulo(base, altura) {

    let area = 0;

    area = (base * altura) / 2
    return area.toFixed(2)
}


console.log(areaTriangulo(10, 15))
console.log(areaTriangulo(9.25, 13.1))

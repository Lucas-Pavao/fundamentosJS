function jurosComp(ci, tj, t) {

    let mont = ci * (1 + tj) ** t


    return mont
}
function jurosSimp(ci, tj, t) {

    let mont = ci * tj * t


    mont += ci
    return mont
}


console.log(jurosComp(100, 0.1, 6))
console.log(jurosSimp(100, 0.1, 6))
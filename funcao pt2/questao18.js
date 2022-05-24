function somaDespesas(objeto) {

    let total = 0

    for (let item of objeto) {
        total += item.preco
    }
    console.log(total)
}
somaDespesas([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]) 
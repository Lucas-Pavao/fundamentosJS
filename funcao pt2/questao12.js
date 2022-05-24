function removerObjeto(objeto, valor) {
    const copia = Object.assign({}, objeto)
    delete copia[valor]

    console.log(copia)
}

removerObjeto({ a: 1, b: 2 }, "b")
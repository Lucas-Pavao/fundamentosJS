function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(contarPalavras("ola mundo"))
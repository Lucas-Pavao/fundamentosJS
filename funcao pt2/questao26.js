function removerVogais(frase) {
  return frase.replace(/[aeiou]/gi, "");
}

console.log(removerVogais("ola mundo"));

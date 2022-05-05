function uniao(...args) {
  let juncao = [];
  for (let i = 0; i < arguments.length; i++) {
    juncao = juncao.concat(arguments[i]);
  }
  return juncao;
}
let vetorInteiro = [1, 2, 3, 4];
let vetorString = ["Arroz", "Feijão", "Batata", "Uva"];
let vetorDouble = [4.5, 6.6, 3.4, 14.5];

console.log(uniao(vetorInteiro, vetorString));
console.log(uniao(vetorString, vetorDouble));

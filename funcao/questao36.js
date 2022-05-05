function mutiplicaVetor(array, mutiplicador) {
  let arrayResult = [];

  for (let i = 0; i < array.length; i++) {
    arrayResult.push(array[i] * mutiplicador);
  }

  return arrayResult;
}
function mutiplicaVetor5(array, mutiplicador) {
  let arrayResult = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      arrayResult.push(array[i] * mutiplicador);
    }
  }

  return arrayResult;
}

let array = [1, 2, 3, 4, 5, 10, 20, 30];

console.log(mutiplicaVetor(array, 2));
console.log(mutiplicaVetor5(array, 2));

function media(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma / array.length;
}

let array = [5, 5, 5, 5];
console.log("A media é igual a: " + media(array));

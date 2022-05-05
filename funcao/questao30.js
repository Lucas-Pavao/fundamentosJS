function maiorMenor(vetor) {
  let maior = 0;
  let menor = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
      menor = vetor[i];
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
  }
  return [maior, menor];
}

let vetor = [1, 2, 3, 4, 5, 666, 0];
console.log(maiorMenor(vetor));

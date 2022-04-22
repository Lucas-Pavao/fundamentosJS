function valorNegativo(vetor) {
  let valoresNegativos = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      valoresNegativos++;
    }
  }
  return valoresNegativos;
}

vetor = [1, 2, 3, -4, -5, -7, -8, 33, 44];
console.log(valorNegativo(vetor));

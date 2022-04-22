function intervalo(vetor) {
  let numerosDentro = 0;
  let numerosFora = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      numerosDentro++;
    } else {
      numerosFora++;
    }
  }
  console.log(
    "A quatidade de numeros no intervalo de 10 a 20 é: " +
      numerosDentro +
      " e os que nao estao no intervalos sao: " +
      numerosFora
  );
}
let vetor = [1, 2, 3, 4, 11, 12, 14, 20, 10];

intervalo(vetor);

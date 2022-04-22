function imprimirImpares(inicio, fim) {
  if (inicio > fim) {
    let aux = inicio;
    inicio = fim;
    fim = aux;
    for (let i = inicio; i != fim; i++) {
      if (inicio % 2 == 1) {
        console.log(inicio);
      }
      inicio++;
    }
  } else {
    for (let i = inicio; i != fim; i++) {
      if (inicio % 2 == 1) {
        console.log(inicio);
      }
      inicio++;
    }
  }
}
imprimirImpares(100, 0);

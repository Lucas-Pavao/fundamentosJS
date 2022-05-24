function filtrarQTD(numeros, quantidadeDesejada) {
  let resultado = [];
  for (numero of numeros) {
    const quantidadeDeDigitos = String(numero).length;
    if (quantidadeDeDigitos === quantidadeDesejada) resultado.push(numero);
  }
  return resultado;
}

console.log(filtrarQTD([11, 12, 33, 3, 4, 555, 6666, 6], 4));

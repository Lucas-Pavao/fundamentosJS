function conversor(valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`;
  console.log(valorEmReais);
}

conversor(0.1 + 0.2);

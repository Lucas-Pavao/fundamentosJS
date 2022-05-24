function palavraContem(inicio, array) {
  const resultado = [];
  for (let palavra of array)
    if (palavra.includes(inicio)) resultado.push(palavra);
  return resultado;
}

console.log(
  palavraContem("pro", ["professor", "alunos", "profissional", "poste"])
);

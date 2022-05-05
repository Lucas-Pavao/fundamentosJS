function adiconarVetor(vetorPilha, vetorADD) {
  for (let i = 0; i < vetorADD.length; i++) {
    vetorPilha.push(vetorADD[i]);
    console.log("Valor " + vetorADD[i] + " Adicionado");
  }
  console.log(vetorPilha);
}

vetorADD = [12, 13, 14];
vetorPilha = [1, 2, 3];

adiconarVetor(vetorPilha, vetorADD);

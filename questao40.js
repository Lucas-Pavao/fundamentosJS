function notas(arrayNotas) {
  for (let i = 0; i < arrayNotas.length; i++) {
    if (arrayNotas[i] >= 0 && arrayNotas[i] <= 4.9) {
      console.log("Nota D");
    }
    if (arrayNotas[i] >= 5 && arrayNotas[i] <= 6.9) {
      console.log("Nota C");
    }
    if (arrayNotas[i] >= 7 && arrayNotas[i] <= 8.9) {
      console.log("Nota B");
    }
    if (arrayNotas[i] >= 9 && arrayNotas[i] <= 10) {
      console.log("Nota A");
    }
  }
}

let arrayNotas = [1.1, 2.6, 6.7, 7.6, 9.6];

notas(arrayNotas);

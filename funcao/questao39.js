function trocaSemAux(array1, array2) {
  console.log("Array1 antes: " + array1);
  console.log("Array2 antes: " + array2);
  for (let i = 0; i < array1.length; i++) {
    array1[i] = array1[i] + array2[i];
    array2[i] = array1[i] - array2[i];
    array1[i] = array1[i] - array2[i];
  }

  console.log("Array1 depois: " + array1);
  console.log("Array2 depois: " + array2);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
trocaSemAux(array1, array2);

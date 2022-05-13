function triangulo(L1, L2, L3) {
  if (L1 == L2 && L2 == L3) {
    return console.log("Triangulo Equilátero");
  }
  if (L1 == L2 || L2 == L3 || L1 == L3) {
    return console.log("Triangulo Isósceles");
  } else {
    return console.log("Triangulo Escaleno");
  }
}

triangulo(3, 3, 3);
triangulo(4, 3, 4);
triangulo(1, 2, 3);

function comaprarString(string1, string2) {
  let contem = true;
  for (let i = 0; i < string1.length; i++) {
    let letraString1 = string1.charAt(i).toLowerCase();
    for (let j = 0; j < string2.length; j++) {
      let letraString2 = string2.charAt(j).toLowerCase();
      if (letraString1 == letraString2) {
        contem = true;
        break;
      } else {
        contem = false;
      }
    }
    if (!contem) {
      return contem;
    }
  }
  return contem;
}

console.log(comaprarString("abc", "cba"));
console.log(comaprarString("onibus", "arroz"));

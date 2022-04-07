function calculaMediaPonderada(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}

calculaMediaPonderada(12, 6, 5, 4)
calculaMediaPonderada(122, 1, 2, 4)
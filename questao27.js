function qualOmaior(alturaAtual1, alturaAtual2, taxaDeCrescimento1, taxaDeCrescimento2) {
    if (alturaAtual1 == alturaAtual2) {
        if (taxaDeCrescimento1 > taxaDeCrescimento2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxaDeCrescimento1 < taxaDeCrescimento2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (alturaAtual1 > alturaAtual2) {
            if (taxaDeCrescimento1 >= taxaDeCrescimento2) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${tempoMaior(alturaAtual1, taxaDeCrescimento1, alturaAtual2, taxaDeCrescimento2)} anos`
            }
        } else {
            if (taxaDeCrescimento2 >= taxaDeCrescimento1) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${tempoMaior(alturaAtual1, taxaDeCrescimento1, alturaAtual2, taxaDeCrescimento2)} anos`
            }
        }
    }
}

function tempoMaior(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {

    let qtdAnos = 0

    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos

}

console.log(qualOmaior(150, 155, 0.20, 0.10))
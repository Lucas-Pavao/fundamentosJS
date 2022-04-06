function planoSaude(idade) {

    valor = 100;



    if (idade < 10) {


        valor = valor + 80
        return console.log("O valor a ser pago e igual a: " + valor)
    }


    if (idade == 10 || idade <= 30) {


        valor = valor + 50

        return console.log("O valor a ser pago e igual a: " + valor)
    }


    if (idade > 30 && idade <= 60) {


        valor = valor + 95

        return console.log("O valor a ser pago e igual a: " + valor)
    }

    if (idade > 60) {


        valor = valor + 130

        return console.log("O valor a ser pago e igual a: " + valor)
    }






}

planoSaude(5)
planoSaude(25)
planoSaude(45)
planoSaude(98)
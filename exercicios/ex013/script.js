function calcular (){
    //entrada
    let valor = [
        Number(prompt('digite o primeiro número:')),
        Number(prompt('digite o segundo número:'))
    ]

    //calculo
    if (valor[0] > valor[1]){
        saida = (document.querySelector('div#sparent')).innerHTML=`
        <p>Analisanso os valores ${valor[0]} e ${valor[1]}, o maior valor é ${valor[0]} </p>`
    }else if (valor[0] < valor[1]){
        saida = (document.querySelector('div#sparent')).innerHTML=`
        <p>Analisanso os valores ${valor[0]} e ${valor[1]}, o maior valor é ${valor[1]} </p>`
    }else{
        saida = (document.querySelector('div#sparent')).innerHTML=`
        <p>Analisanso os valores ${valor[0]} e ${valor[1]}, os valores são iguais. </p>`
    }
}
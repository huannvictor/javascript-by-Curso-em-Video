function iniciar(){
    let valores = [
        Number(prompt('digite o primeiro valor:')),
        Number(prompt('digite o segundo valor:'))        
    ]
    let operador = Number(prompt(`Valores informados ${valores[0]} e ${valores[1]}
    Escolha a operação?
    [1] - SOMAR
    [2] - SUBTRAIR
    [3] - MULTIPLICAR
    [4] - DIVIDIR
    `))
    let operacao = [
        Number(valores[0]+valores[1]),
        Number(valores[0]-valores[1]),
        Number(valores[0]*valores[1]),
        Number(valores[0]/valores[1])
    ]
    let saida = document.querySelector('div#sparent')

    /*
    if(operador == 1){
        saida.innerHTML = `<p>A SOMA dos valores informados: ${valores[0]} e ${valores[1]} é: <spam class="marca">${operacao[0]}</spam></p>`
    }else if(operador == 2){
        saida.innerHTML = `<p>A SUBTRAÇÃO dos valores informados: ${valores[0]} e ${valores[1]} é: <spam class="marca">${operacao[1]}</spam></p>`
    }else if(operador == 3){
        saida.innerHTML = `<p>A MULTIPLICAÇÃO dos valores informados: ${valores[0]} e ${valores[1]} é: <spam class="marca">${operacao[2]}</spam></p>`
    }else if(operador == 4){
        saida.innerHTML = `<p>A DIVISÃO dos valores informados: ${valores[0]} e ${valores[1]} é: <spam class="marca">${operacao[3]}</spam></p>`
    }else{
        saida.innerHTML = `<p><strong>OPÇÃO INVÁLIDA. Por favor, clique novamente no botão e selecionae uma opção válida na <spam class="marca">OPERAÇÃO</spam></strong></p>`
    }*/

    switch(operador){
        case 1:
            saida.innerHTML = `<p>${valores[0]} + ${valores[1]} = <spam class="marca">${operacao[0]}</spam></p>`
            break
        case 2:
            saida.innerHTML = `<p>${valores[0]} - ${valores[1]} = <spam class="marca">${operacao[1]}</spam></p>`
            break
        case 3:
            saida.innerHTML = `<p>${valores[0]} × ${valores[1]} = <spam class="marca">${operacao[2]}</spam></p>`
            break
        case 4:
            saida.innerHTML = `<p>${valores[0]} ÷ ${valores[1]} = <spam class="marca">${operacao[3]}</spam></p>`
            break
        default:
            saida.innerHTML = `<p><strong>OPÇÃO INVÁLIDA. Por favor, clique novamente no botão e selecionae uma opção válida no campo <spam class="marca">OPERAÇÃO</spam></strong></p>`
            break
    }
}
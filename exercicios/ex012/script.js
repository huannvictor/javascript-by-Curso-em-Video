function calcular(){
    //entrada
    let num = Number(prompt('Digite um número:'))
    let saida
    //calculo e saida
    if (num % 2 == 0){
        saida  = (document.querySelector('div#sparent')).innerHTML = `<p>O NÚMERO <strong>${num}</strong> É <strong>PAR</strong></p>`
    } else {
        saida  = (document.querySelector('div#sparent')).innerHTML = `<p>O NÚMERO <strong>${num}</strong> É <strong>ÍMPAR</strong></p>`    
    }
}

//validação
let intervalo = [1, 100]
let diferenca = intervalo[1]-intervalo[0]
let numero = Math.trunc(diferenca*Math.random())
let saida = document.querySelector('div#sparent')


function adivinhar(){
    let palpite = Number(prompt('qual o seu palpite?'))
    //condição
    if (palpite < numero){
        saida.innerHTML +=`<p>Você palpitou ${palpite}. Meu número é MAIOR. </p>`
    }else if (palpite > numero){
        saida.innerHTML +=`<p>Você palpitou ${palpite}. Meu número é MENOR. </p>`
    }else{
        saida.innerHTML +=`<p>Você palpitou ${palpite}. <spam class="marca">ACERTOU!</spam> </p>`
        }
}

saida.innerHTML += `${contagem}`

function revelar(){
    saida.innerHTML += `<p class="marca">${numero}</p>`
}
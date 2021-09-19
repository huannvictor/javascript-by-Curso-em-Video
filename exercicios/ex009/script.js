let contador = 0
let saida = document.querySelector('div#sparent')

function contar(){
    contador ++
    saida.innerHTML = `<p>Você clicou ${contador} vez(es)</p>`
}
function zerar(){
    saida.innerHTML = `<p>Contador zerado</p>`
    contador = 0
}
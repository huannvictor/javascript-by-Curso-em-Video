/*
O método Math.random() retorna um valor Real aleatório entre 0 e 1
quando multiplicado pela diferença, tráz um valor inteiro.

O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.
*/

let saida = document.querySelector('div#sparent')

function gerar(){
    let intervalo = [ 1, 100]
    let diferenca = intervalo[1] - intervalo[0]
    let numero = Math.trunc(diferenca*Math.random())

    saida.innerHTML += `<p>Gerei o número: <spam class="marca">${numero} </spam></p>`
}

function limpar(){
    saida.innerHTML = `<p>Cada vez que o botão <spam class="marca">GERAR</spam> é clicado, aparece abaixo um número entre 1 e 100</p>`
}
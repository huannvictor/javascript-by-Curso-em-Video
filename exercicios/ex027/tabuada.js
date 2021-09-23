function calcular(){
    numero = Number(document.querySelector('input#numero').value)
    saida = document.querySelector('div#saida')


    saida.innerHTML += `
    <h2>TABUADA DE ${('00' + numero).slice(-2)}</h2>`
    for(cont = 0; cont <= 10; cont++){
        result = numero*cont
        /*saida.innerHTML += `${('00' + numero).slice(-2)}`*/
        saida.innerHTML += `
            <span>${('00' + numero).slice(-2)} × ${('00'+cont).slice(-2)} = <strong>${('00' + result).slice(-2)}</strong></span><br>`
    }
}
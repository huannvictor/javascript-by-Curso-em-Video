function fatorial(n){
    let num = Number(document.querySelector('input#number').value)
    let saida = document.querySelector('div#saida')
    saida.innerHTML += `<h2>Calculando ${num}</h2>`
    let c = num
    let fat = 1
    while(c > 1){
        saida.innerHTML += `${c}×`
        fat *= c //corresponde a fat = fat*c
        c --
    }
    saida.innerHTML += `1 = <strong>${fat}</strong>`
}
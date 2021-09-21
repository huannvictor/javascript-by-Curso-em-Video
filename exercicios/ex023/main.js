function contar(){
    saida = document.querySelector('div#saida')
    saida.innerHTML = `<h2>Números pares de 1 até 10</h2>`
    /*
    let c = 1
    while (c <= 10){
        if(c % 2 == 0){
            saida.innerHTML += `${c} → `
        }else{
            saida.innerHTML += ''
        }
        c ++
    }*/

    let c = 2
    while (c <= 10){
        saida.innerHTML += `${c} → `
        c +=2
    }
    saida.innerHTML += `<strong>🏳</strong>`
}
function contar(){
    let c = 1
    saida = document.querySelector('div#sparent')
    saida.innerHTML = `
    <h2>CONTANDO DE 1 ATÉ 10</h2>`

    while (c <=10){
        saida.innerHTML += `${c} → `
        c++    
    }
    saida.innerHTML += '🏳'
}
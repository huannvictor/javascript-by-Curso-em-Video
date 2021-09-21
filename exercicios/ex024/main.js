function contagem(){
    saida = document.querySelector('div#saida')
    saida.innerHTML = '<h2>Contagem regressiva de 10 até 1</h2>'
    let c = 10
    while (c >= 1 ){
        saida.innerHTML += `${c} → `
        c --
    }
    saida.innerHTML += '<strong>🏳</strong>'
}
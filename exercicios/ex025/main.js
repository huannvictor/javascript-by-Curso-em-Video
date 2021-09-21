function contar(){
    let saida = document.querySelector('div#saida')
    let num = Number(document.getElementById('valor').value)
    saida.innerHTML += `<h2>contando até ${num} </h2>`
    let cont = 0

    while (cont < num){
        saida.innerHTML += `${cont} → `
        cont ++
    }
    saida.innerHTML += `${cont} <strong>🏳</strong> `
}
function contar(){
    let c = 1
    let saida = document.querySelector('div#saida')
    saida.innerHTML = `<h2>CONTANDO...</h2>`
   
    while (c <= 10){
        if(c % 2 == 0){
            saida.innerHTML += `<mark class="marca">${c}</mark> →`
        }else{
            saida.innerHTML += ` ${c} → `
        }
        c ++
    }
    saida.innerHTML += ' 🏳'
}
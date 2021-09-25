
let tarea = document.querySelector('textarea#saida')
let saida = document.querySelector('div#saida')
let valor = []
let cont = 0
let soma = 0
let scont = 1

function adicionar(){
    let num = Number(document.querySelector('input#num').value)
    valor.push(num)
    tarea.innerHTML += 
    `O valor ${num} foi adicionado.
`
}
function finalizar(){
    saida.innerHTML += `<p>Ao todo temos ${valor.length} valores adicionados</p>`
    for (let pos in valor){
        saida.innerHTML += `${valor[pos]} `
    }
    soma = valor[0] + valor[1]
    saida.innerHTML += `<br> a soma é ${soma}`

}

/*
total valores
maior
menor
soma
média
*/
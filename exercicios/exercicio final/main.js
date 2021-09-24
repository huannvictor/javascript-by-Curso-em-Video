function adicionar(){
    let num = Number(document.querySelector('input#num').value)
    let tarea = document.querySelector('textarea#saida')
    tarea.innerHTML += 
    `O valor ${num} foi adicionado.
`
}
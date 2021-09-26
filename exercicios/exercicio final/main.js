let num = document.querySelector('input#num')
let tarea = document.querySelector('textarea#saida')
let saida = document.querySelector('div#saida')
let valores = []

function intervalo (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (intervalo(num.value) && !inLista(num.value, valores)){
        tarea.innerHTML += `O valor ${num.value} foi adicionado
`
    }else{
        window.alert('valor fora do intervalo permitido ou já está na lista')
    }
}
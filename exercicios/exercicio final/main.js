let num = document.querySelector('input#num')
let tarea = document.querySelector('div#tarea')
let resultado = document.querySelector('div#resultado')
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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `Valor ${num.value} adicionado`
        tarea.appendChild(item)
        resultado.innerHTML = ''
    }else{
        window.alert('valor fora do intervalo permitido ou já está na lista')
    }
    num.value =''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('insira os valores')
    }else{
        //valor total
        let total = valores.length
        //mair e menor valores
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = soma/total

        //saida
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>${total} - total de números cadastrados</p>`
        resultado.innerHTML += `<p>${maior} - é o maior valor cadastrado</p>`
        resultado.innerHTML += `<p>${menor} - é o menor cadastrado</p>`
        resultado.innerHTML += `<p>${soma} - é a soma de todos os valores cadastrados</P>`
        resultado.innerHTML += `<p>${media} - é a média de todos os valores cadastrados</p>`

    }
}
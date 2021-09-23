function contarint(){
    let cont = [
        0,
        Number(document.querySelector('input#inicial').value),
        Number(document.querySelector('input#final').value)
    ]
    let saida = document.querySelector('div#saida')

    if (cont[1] < cont[2]){
        cont[0] = cont[1]
        while (cont[0] <= cont[2]){
            saida.innerHTML += ` ${cont[0]} →`
            cont[0] ++
        }
    }else if (cont[1] > cont[2]){
        cont[0] = cont[1]
        while (cont[0] >= cont[2]){
            saida.innerHTML += ` ${cont[0]} →`
            cont[0] --
        }
    }else{
        saida.innerHTML += 'Não é possível contar porque os números são iguais'
    }
    saida.innerHTML += `🏁<br>`
}
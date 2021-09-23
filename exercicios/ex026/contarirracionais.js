function contarirr(){
    let saida = document.querySelector('div#saida')
    let cont = [
        0.5,
        Number(document.querySelector('input#inicial').value),
        Number(document.querySelector('input#final').value)
    ]
    if (cont[1] < cont[2]){
        cont[0] = cont
        while (cont[0] <= cont[2]){ 
            saida.innerHTML += `${cont[0]} → `          
            cont[0] = cont[0] + cont[1] 
        }
    }
}
function calcular(){
    //entradas
    let funcionario = String((document.querySelector('input#funcionario')).value)
    let salbase = Number((document.querySelector('input#salbase')).value)
    let vporc = Number((document.querySelector('input#vporc')).value)

    //validação
    if (funcionario === 0 || salbase === 0 || vporc === 0){
        window.alert('favor informar os dados corretamente')
    }

    //calculo let x = (n1*n2)/100
    let acresci = (salbase*vporc)/100
    let salreaj = salbase+acresci

    //saída
    let tit = (document.querySelector('div#tit'))
    .innerHTML = `<h3>Reajuste salarial do(a) </h3><h3 id="func"> ${funcionario}</h3>`
    let sbase = (document.querySelector('span#sbase'))
    .innerHTML = `${salbase.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    let porce = (document.querySelector('span#porce'))
    .innerHTML = `${vporc.toFixed(2)}%`
    let acres = (document.querySelector('span#acres'))
    .innerHTML = `${acresci.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    let sreaj = (document.querySelector('span#sreaj'))
    .innerHTML = `${salreaj.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
}
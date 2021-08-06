function calcular(){
    //entradas
    let form = [
        String((document.querySelector('input#funcionario')).value),    //0
        Number((document.querySelector('input#salbase')).value),        //1
        Number((document.querySelector('input#vporc')).value),          //2
    ]

    //validação
    if (form[0] === 0 || form[1] === 0 || form[2] === 0){
        window.alert('favor informar os dados corretamente')
    }
    
    //calculo let x = (n1*n2)/100
    let acresci = (form[1] * form[2])/100
    let salreaj = form[1] + acresci

    //saída
    let saida = [
        (document.querySelector('div#tit')).innerHTML = `<h3>Reajuste salarial do(a) </h3><h3 id="func"> ${form[0]}</h3>`,
        (document.querySelector('span#sbase')).innerHTML = `${form[1].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`,
        (document.querySelector('span#porce')).innerHTML = `${(form[2]).toFixed(2)}%`,
        (document.querySelector('span#acres')).innerHTML = `${acresci.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`,
        (document.querySelector('span#sreaj')).innerHTML = `${salreaj.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    ]
}
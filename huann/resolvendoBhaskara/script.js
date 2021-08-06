function converter(){
    //entrada
    let form = [
        Number((document.querySelector('input#vala')).value),
        Number((document.querySelector('input#valb')).value),
        Number((document.querySelector('input#valc')).value)
    ]
    
    //calculo ∆ = (b²) - 4ac
    let delta = (form[1]**2) - 4*form[0]*form[2]

    //saidas
    let saida = [
        (document.querySelector('span#sva'))
        .innerHTML = form[0],
        (document.querySelector('span#svb'))
        .innerHTML = form[1],
        (document.querySelector('span#svc'))
        .innerHTML = form[2],
        (document.querySelector('span#result'))
        .innerHTML = delta
    ]
    
}
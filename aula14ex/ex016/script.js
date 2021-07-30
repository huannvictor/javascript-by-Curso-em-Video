function contar(){
    let ini = window.document.getElementById('txtini')
    let pas = window.document.getElementById('txtpas')
    let fim = window.document.getElementById('txtfim')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[erro] faltam dados!')
        res.innerHTML = "<strong>impossível contar</strong>"
    } else{
        res.innerHTML='contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido. Considerando PASSO = 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` \u{1F449} ${c}`
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += ` \u{1F449} ${c}`
            }
        }
            res.innerHTML += ` \u{1F3C1}`
        
    }
}
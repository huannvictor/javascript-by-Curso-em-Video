function calcular(){
    
    let vlri = document.getElementById('vlri')
    let vlrp = document.getElementById('vlrp')

    vini = Number(vlri.value)
    vper = Number(vlrp.value)
    
    //desconto
    let desc = (vini*vper)/100
    let vfin = vini + desc

    if(desc <0){

        //retorno desconto
        let result = document.getElementById('result')
        result.innerHTML = `
        <P>Valor do item: ${vini.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</P>
        <P>Desconto de ${vper}% no valor ${desc.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</P>
        <p>Valor após o desconto: ${vfin.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</P>    
        `
    }else{

        //retorno acrescimo
        let result = document.getElementById('result')
        result.innerHTML = `
        <P>Valor do item: ${vini.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</P>
        <P>Acrescimo de ${vper}% no valor ${desc.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</P>
        <p>Valor com o acrescimo: ${vfin.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</P>    
        `  
    }

    

}
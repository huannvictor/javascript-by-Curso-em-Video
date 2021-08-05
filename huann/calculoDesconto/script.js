function calcular(){
    let prod = String(document.querySelector('input#fprod').value)
    let vini = Number(document.querySelector('input#fvini').value)
    let prcdes = Number(document.querySelector('input#fvdes').value)

    //calculos let x = (n1*n2)/100
    let vlrdes = (vini*prcdes)/100
    let vlrfin = vini - vlrdes

    //saidas
    let stit = (document.querySelector('div#tit')).innerHTML = `<h3>${prod}</h3>`
    let svlori = (document.querySelector('span#vlrini')).innerHTML = `${vini.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}`
    let sperc = (document.querySelector('span#prcdes')).innerHTML = `${prcdes}%`
    let svlrd = (document.querySelector('span#vlrdes')).innerHTML = `${vlrdes.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`
    let svlrf = (document.querySelector('span#vlrfin')).innerHTML = `${vlrfin.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

}

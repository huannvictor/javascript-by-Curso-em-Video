
function calcular(){
    var txtprod = prompt('produto comprado:')
    var txtcost = prompt(`qual o valor do produto: ${txtprod}?`)
    var txtrece = prompt(`valor recebido pelo item ${txtprod}:`)

    alert = (`${txtprod}`)
    
    let cost = Number(txtcost)
    let rece = Number(txtrece)
    let troc = rece - cost

    let item = document.getElementById('item')
    item.innerHTML = ` ${txtprod}`

    let vlritem = document.getElementById('vlritem')
    vlritem.innerHTML = ` ${cost.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`

    let vlrpago = document.getElementById('vlrpago')
    vlrpago.innerHTML = `${rece.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`

    let torco = document.getElementById('torco')
    torco.innerHTML = `${troc.toLocaleString('pt-BR',{style: 
    'currency', currency:'BRL'})}`
}
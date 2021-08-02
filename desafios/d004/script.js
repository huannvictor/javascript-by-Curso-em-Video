function calcular(){
    var txtprod = prompt('produto comprado:')
    var txtcost = prompt(`qual o valor do produto: ${txtprod}?`)
    var txtrece = prompt(`valor recebido pelo item ${txtprod}:`)
   
    var cost = Number(txtcost)
    var rece = Number(txtrece)
    var troc = rece - cost

    let item = document.getElementById('item')
    item.innerHTML = ` ${txtprod}`

    let vlritem = document.getElementById('vlritem')
    vlritem.innerHTML = ` ${cost.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`

    let vlrpago = document.getElementById('vlrpago')
    vlrpago.innerHTML = `${rece.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`

    let torco = document.getElementById('torco')
    torco.innerHTML = `${troc.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`
}

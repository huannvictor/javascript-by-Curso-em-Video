
function calcular(){
    //formulario inclusão de dados
    let txtprod = document.getElementById('txtprod')
    let txtcost = document.getElementById('txtcost')
    let txtrece = document.getElementById('txtrece')

    //tratamento dos dados
    let prod = String(txtprod.value)
    let cost = Number(txtcost.value)
    let rece = Number(txtrece.value)
    let troc = rece - cost

    //resposta - recibo
    let item = document.getElementById('item')
    item.innerHTML = ` ${prod}`

    let vlritem = document.getElementById('vlritem')
    vlritem.innerHTML = `${cost.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`

    let vlrpago = document.getElementById('vlrpago')
    vlrpago.innerHTML = `${rece.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`

    let vlrtroco = document.getElementById('vlrtroco')
    vlrtroco.innerHTML = `${troc.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`
}
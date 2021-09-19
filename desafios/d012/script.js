function verificar(){
    //entrada
    let prod = prompt('qual o produto?')
    let valor = [
         Number(prompt(`qual o preço anterior do ${prod}?`)),
         Number(prompt(`qual o valor atual do ${prod}?`))
    ]
    
    //saída
    let saida = (document.querySelector('div#schild')).innerHTML = 
    `
    <h2>Alteração do preço de ${prod}</h2>
    <table>
        <tr>
            <td>Valor anterior:</td>
            <td>${valor[0].toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</td>
        </tr>
        <tr>
            <td>Valor atual:</td>
            <td>${valor[1].toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</td>
        </tr>
    </table>
    `
}
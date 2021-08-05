let cot = window.prompt('quanto está a cotação do dólar agora?')
let dolar = Number(cot)

function converter(){
    let cart = window.prompt('Quantos reais R$ você dispõe em sua carteira?')
    let real = Number(cart)

    //conversão
    comp = real/dolar

    //saida
    let saida = document.getElementById('schild')
    saida.innerHTML =
    `
    <table>
        <th colspan='2'>
            Cotação do dólar atual:
            ${dolar.toLocaleString('en', {style: 'currency', currency:'USS'})}
        </th>
        <tr>
            <td>Valor da carteira:</td>
            <td>${real.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</td>
        </tr>
        <tr>
            <td>Valor que poderá comprar:</td>
            <td>${comp.toLocaleString('en', {style: 'currency', currency:'USS'})}</td>
        </tr>
    </table>
    `
}
function calcular(){
    let frase = document.getElementById('frase')
    frase.innerHTML = `Abaixo, segue calculo do desconto...`

    let prod = window.prompt('Qual o produto comprado?')
    let prec = Number(window.prompt(`Qual o valor do ${prod}?`))

    //calculo
    let desc = prec/10
    let vfin = prec - desc

    //saida
    let saida = document.getElementById('schild')
    saida.innerHTML = 
    `
    <h2>Valor de 10% de desconto para:</h2>
    <h2>${prod}</h2>

    <table>
        <th colspan='2'>
            Preço original:
            ${prec.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}
        </th>
        <tr>
            <td>Valor da desconto:</td>
            <td>${desc.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</td>
        </tr>
        <tr>
            <td>Valor a ser pago:</td>
            <td>${vfin.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</td>
        </tr>
    </table>
    `

}
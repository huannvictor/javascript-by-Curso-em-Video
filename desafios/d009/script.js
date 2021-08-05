function calcular(){
    let frase = (document.getElementById('frase')).innerHTML = `Abaixo, segue calculo do novo salário...`

    let funcionario = prompt('Qual é o nome do funcionário?')
    let salario = Number(prompt(`Qual o salário do ${funcionario}`))
    let porcentagem = Number(prompt(`Qual a porcentagem que o salário do ${funcionario}?`))

    //calculo
    // let x = (n1*n2)/100
    let ajuste = (salario*porcentagem)/100
    let salajust = salario+ajuste

    //saida
    let saida = (document.getElementById('schild')).innerHTML = 
    `
    <h2>Aumento salarial do: ${funcionario}</h2>

    <table>
        <th colspan='2'>
            Salário Base:
            ${salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}
        </th>
        <tr>
            <td>Porcentagem do acréscimo:</td>
            <td>${porcentagem}%</td>
        </tr>
        <tr>
            <td>Valor do aumento:</td>
            <td>${ajuste.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</td>
        </tr>
        <tr>
            <td>Valor atualizado:</td>
            <td>${salajust.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</td>
        </tr>
    </table>
    `

}
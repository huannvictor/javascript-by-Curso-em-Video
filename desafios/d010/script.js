function calcular(){
    let form = [
        Number(prompt('qual o valor de a?')),
        Number(prompt('qual o valor de b?')),
        Number(prompt('qual o valor de c?'))
    ]
    //calculo ∆=(b²)-4ac
    let delta = (form[1]**2)-4*form[0]*form[2]

    //saida
    let saida = (document.getElementById('schild')).innerHTML = 
    `
    <table>
        <th colspan='2'>
            Valor de ∆=(b²)-4ac
        </th>
        <tr>
            <td>Valor de a:</td>
            <td>${form[0]}</td>
        </tr>
        <tr>
            <td>Valor de b:</td>
            <td>${form[1]}</td>
        </tr>
        <tr>
            <td>Valor de c:</td>
            <td>${form[2]}</td>
        </tr>
        <th colspan='2'>
            Valor de ∆ = ${delta}
        </th>
        
    </table>
    `

}
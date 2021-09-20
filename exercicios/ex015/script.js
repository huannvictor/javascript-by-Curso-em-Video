function analisar(){
    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date
    let saida = document.querySelector('div#sparent')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hor = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    saida.innerHTML = `
    <div id="schild" >
        <table>
            <tr>
                <td>Dia: </td>
                <td> ${dia} </td>
            </tr>
            <tr>
                <td>Mês: </td>
                <td> ${meses[mes]} </td>
            </tr>
            <tr>
                <td>Ano: </td>
                <td> ${ano} </td>
            </tr>
            <tr>
                <td>Dia da Semana: </td>
                <td> ${semana[sem]} </td>
            </tr>
            <tr>
                <td>Hora: </td>
                <td> ${hor} </td>
            </tr>
            <tr>
                <td>Minuto: </td>
                <td> ${min} </td>
            </tr>
            <tr>
                <td>Segundo: </td>
                <td> ${seg} </td>
            </tr>
        </table>
    </div>
    `
}
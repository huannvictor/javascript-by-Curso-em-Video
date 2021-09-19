
function submit(){

//entrada dos dados    
    let aluno = prompt(`Qual o nome do aluno?`)
    let notas = [
        Number(prompt(`Informe a primeira nota de ${aluno}`)),
        Number(prompt(`Informe a segunda nota de ${aluno}`)),
        Number(prompt(`Informe a terceira nota de ${aluno}`)),
        Number(prompt(`Informe a quarta nota de ${aluno}`))
    ]

//calculo
    let media = (notas[0]+notas[1]+notas[2]+notas[3])/4

//saída
    let saida = document.querySelector('div#schild').innerHTML=
    `
    <h2>As Noas de ${aluno} são as seguintes:</h2>
    <table>
        <th colspan='2'>
        Média: ${media}
        </th>
        <tr>
            <td>1ª Nota:</td>
            <td>${notas[0]}</td>
        </tr>
        <tr>
            <td>2ª Nota:</td>
            <td>${notas[1]}</td>
        </tr>
        <tr>
            <td>3ª Nota:</td>
            <td>${notas[2]}</td>
        </tr>
        <tr>
            <td>4ª Nota:</td>
            <td>${notas[3]}</td>
        </tr>
    </table>
    `
    if (media > 6 ){
        (document.querySelector('div#situacao')).innerHTML=
        `
        <h2>O resultado de ${aluno} é:</h2> 
        <span
        style="
            font-weight: bold;
            background-color: greenyellow;
            color: darkgreen;
            padding: 5px 15px;
            border-radius: 10px;
            ">
            APROVADO
        </span>
        `
    }else if (media >3 && media <= 6){
        (document.querySelector('div#situacao')).innerHTML=
        `
        <h2>O resultado de ${aluno} é:</h2> 
        <span
        style="
            font-weight: bold;
            background-color: palegoldenrod;
            color: goldenrod;
            padding: 5px 15px;
            border-radius: 10px;
            ">
            EM RECUPERAÇÃO
        </span>
        `
    }else{
        (document.querySelector('div#situacao')).innerHTML=
        `
        <h2>O resultado de ${aluno} é:</h2> 
        <span
        style="
            font-weight: bold;
            background-color: darksalmon;
            color: brown;
            padding: 5px 15px;
            border-radius: 10px;
            ">
            REPROVADO
        </span>
        `
    }
}
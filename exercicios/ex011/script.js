saida = document.querySelector('div#sparent')

// entrada de dados
function calcular(){
    let entrada = [
        prompt('Digite o nome do Aluno'),
        Number(prompt('Qual a primeira nota?')),
        Number(prompt('Qual a segunda nota?'))
    ]
    let media = (entrada[1]+entrada[2])/2
    saida.innerHTML = `
        <table>
            <th colspan='2'>
                Média final de ${entrada[0]}
            </th>
            <tr>
                <td>Nota 1:</td>
                <td>${entrada[1]}</td>
            </tr>
            <tr>
                <td>Nota 2:</td>
                <td>${entrada[2]}</td>
            </tr>
            <tr>
                <td>Média final:</td>
                <td>${media}</td>
            </tr>
        </table>
    `
    if(media>=6){
        saida.innerHTML += `<p style="
        font-weight: bold;
        color: cornflowerblue;
        ">MEUS PARABÉNS</p>`
    }else{
        saida.innerHTML += `<p style="
        font-weight: bold;
        color: tomato;
        ">ESTUDE UM POUCO MAIS</p>`
    }
}
function iniciar(){
    let entradames = prompt('digite o mês por extenso (ex.: Setembro)')
    let saida = document.querySelector('div#sparent')
    let estacao
    switch(entradames.toLocaleUpperCase()){
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO': 
            estacao = 'VERÃO 🌞'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO 🍂'
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO': 
            estacao = 'INVERNO ⛄'
            break
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO': 
            estacao = 'PRIMAVERA 🌼'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML = `
    <div id="sparent">
        <p>No mês <spam class="marca">${entradames}</spam>, estamos na estação: <spam class="marca">${estacao}</spam></p>
    </div>`
}
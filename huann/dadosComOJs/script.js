function inicio(){
    let nome = prompt('Qual seu nome?')
    let resp = document.getElementById('result')
    
    resp.innerHTML = `<p>Olá <strong>${nome}</strong>, prazer te conhecer! &#x1f596</p>`
}
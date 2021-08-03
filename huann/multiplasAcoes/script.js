//ESCOPO GLOGAL DE RESP
let resp = document.getElementById('saida')

function acao1(){    
    resp.innerHTML += '<p>Clicou no 1o botão</p>'
}
function acao2(){
    resp.innerHTML += '<p>Clicou no 2o botão</p>'
}
function acao3(){
    resp.innerHTML += '<p>Clicou no 3o botão</p>'
}
function acao4(){
    resp.innerHTML += '<p>Clicou no 4o botão</p>'
}
function limpar(){
    resp.innerHTML = `
    <p>[Registros dos botões acima...]</p>
    <button onclick="limpar()">LIMPAR</button>`
}

/*
ESCOPO LOCAL DE RESP
    function acao1(){
        let resp = document.getElementById('saida')
        resp.innerHTML += '<p>Clicou no 1o botão</p>'
    }
    function acao2(){
        let resp = document.getElementById('saida')
        resp.innerHTML += '<p>Clicou no 2o botão</p>'
    }
    function acao3(){
        let resp = document.getElementById('saida')
        resp.innerHTML += '<p>Clicou no 3o botão</p>'
    }
    function acao4(){
        let resp = document.getElementById('saida')
        resp.innerHTML += '<p>Clicou no 4o botão</p>'
    }*/
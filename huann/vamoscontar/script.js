/*
//mudar bg
window.document.body.style.backgroundColor = 'tomato'

//mudar título
let titulo = window.document.getElementsByTagName("h1")[0]
titulo.innerHTML = 'VAMOS CONTAR'
*/
//calculadora
function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pas = window.document.getElementById('txtp')
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(pas.value)

    //alert
    if (i == 0 || f == 0 || p == 0){
    window.alert('[erro] FALTAM DIGITAR DADOS')
    }else if(p <= 0){
        window.alert('[erro] Valor do [passo] inválido, considerando entrada = 1')
        p = 1
    }else{
        window.alert('deu certo')
    }
}

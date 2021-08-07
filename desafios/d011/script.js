function verificar(){
    let form = Number(prompt('Qual o ano você quer verificar?'))

    /*calculo bissexto
    etapa 1 é %4?   sim E2, não E5 (não é bissexto)
    etapa 2 é %100? sim E3, não E4 (é bissexto)
    etapa 3 é %400? sim E4 (é bissexto), não E5 (não é bissexto)
    etapa 4 é bissexto
    etapa 5 não é bissexto
    */ 

    if (form %4 == 0 && form %100 != 0 || form %400 == 0){
        (document.querySelector('div#schild')).innerHTML = `O ano ${form} É BISSEXTO`
        }else{
        (document.querySelector('div#schild')).innerHTML = `O ano ${form} NÃO É BISSEXTO`
        }
}
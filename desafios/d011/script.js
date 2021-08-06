function verificar(){
    let form = [
        Number(prompt('Qual o ano você quer verificar?'))
    ]
    let ano = [
        (document.querySelector('div#schild')).innerHTML = `O ano ${form[0]} É bissexto`,
        (document.querySelector('div#schild')).innerHTML = `O ano ${form[0]} Não é bissexto`
    ]

    /*calculo bissexto
    etapa 1 é %4?   sim E2, não E5 (não é bissexto)
    etapa 2 é %100? sim E3, não E4 (é bissexto)
    etapa 3 é %400? sim E4 (é bissexto), não E5 (não é bissexto)
    etapa 4 é bissexto
    etapa 5 não é bissexto
    */ 

    if (form[0]%4 != 0){
            ano[1]
        }else if (form[0]%100 != 0){
            ano[0]
        }else if (form[0]%400 != 0){
            ano[1]
        }
}
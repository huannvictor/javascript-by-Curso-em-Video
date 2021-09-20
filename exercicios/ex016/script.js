function iniciar(){
    let entrada = Number(prompt('Insira seu ano de nascimento:'))
    let data = new Date
    let ano = data.getFullYear()

    //calculo
    let idade = ano - entrada

    //saida
    let saida = (document.querySelector('div#sparent')).innerHTML = `
    <p>Quem nasceu em ${entrada} vai completar ${idade} em ${ano}</p>
    `
}
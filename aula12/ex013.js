var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hr`)
if (hora < 12){
    console.log('bom dia, flôr do dia!')
}else if (hora < 18){
    console.log('boua tarrrrder compaaaaadre!')
}else{
    console.log('night night birinight!')
}
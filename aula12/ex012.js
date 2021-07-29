var idade = 66
console.log(`você tem ${idade} anos de idade.`)
if (idade < 16){
    console.log('Então não vota')
}else if(idade <18 || idade >65){
    console.log('Seu voto é opcional')
}else{
    console.log('Seu voto é obrigatório')
}
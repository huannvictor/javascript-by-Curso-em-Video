function converter(){
    //entrada
    let cot = document.getElementById('txtcot')
    let car = document.getElementById('txtcar')
    let cota = Number(cot.value)
    let cart = Number(car.value)

    //converter
    comp = cart/cota

    //saida
    let scota = document.getElementById('scota')
    scota.innerHTML = `${cota.toLocaleString('en', {style: 'currency', currency: 'USS'})}`

    let scart = document.getElementById('scart')
    scart.innerHTML = `${cart.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`

    let scomp = document.getElementById('scomp')
    scomp.innerHTML = `${comp.toLocaleString('en', {style: 'currency', currency:'USS'})}`
}
function calcular(){
    let txtmet = document.getElementById('txtmet')
    let met = Number(txtmet.value)
   
    //conversões
    let km = met/1000
    let hm = met/100
    let dam = met/10
    let dm = met*10
    let cm = met*100
    let mm = met*1000

    //saída

    let smet = document.getElementById('met')
    smet.innerHTML = `<strong> ${met} m metro(s)</strong>`

    let skm = document.getElementById('km')
    skm.innerHTML = `${km} km quilômetro(s)`

    let shm = document.getElementById('hm')
    shm.innerHTML = ` ${hm} hm hectômetro(s)`

    let sdam = document.getElementById('dam')
    sdam.innerHTML = `${dam} Dam Decâmetro(s)`

    let sdm = document.getElementById('dm')
    sdm.innerHTML = ` ${dm} dm decímetro(s)`

    let scm = document.getElementById('cm')
    scm.innerHTML = `${cm} cm centímetro(s)`

    let smm = document.getElementById('mm')
    smm.innerHTML = `${mm} mm milímetro(s)`
}

function calcular(){
    let txtcel = document.getElementById('txtcel')
    let cel = Number(txtcel.value)
   
    //conversões
    let kel = cel+273.15
    let fah = (cel+9/5)+32

    //saída

    let scel = document.getElementById('cel')
    scel.innerHTML = `<strong> ${cel}ºC</strong>`

    let skel = document.getElementById('kel')
    skel.innerHTML = `${kel}°K`

    let sfah = document.getElementById('fah')
    sfah.innerHTML = ` ${fah}°F`
}

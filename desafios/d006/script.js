function converter(){
    let txtcel = prompt('Digite uma temperatura em ºC (Celsius)')
    let cel = Number(txtcel)

    //conversões
    let kel = cel+273.15
    let fah = (cel*9/5)+32

    //saida
    let saida = document.getElementById('schild')
    saida.innerHTML = `
    <table>
        <th colspan='2'>A temperatura de ${cel}°C Celsius corresponde:</th> 
        <tr>
            <td>Em Kelvin:</td>
            <td>${kel}ºK</td>
        </tr>
        
        <tr>
            <td>Em Fahrenheit:</td>
            <td>${fah}ºF</td>
        </tr>
    </table>
    `
}

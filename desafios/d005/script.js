function converter(){
    let txtmet = prompt('digite sua distância em metros (m)')
    let met = Number(txtmet)

    //converter
    let km = met/1000
    let hm = met/100
    let dam = met/10
    let dm = met*10
    let cm = met*100
    let mm = met*1000

    //saída
    let saida = document.getElementById('schild')
    saida.innerHTML = `
    <table>
        <th colspan="2">
           Para ${met}(m) metro(s), temos:
        </th>
        <tr>
            <td>Em Km:  </td>
            <td> ${km}(km) quilômetro(s)</td>
        </tr>
        <tr>
            <td>Em Hm:  </td>
            <td> ${hm}(hm) hectômetro(s)</td>
        </tr>
        <tr>
            <td>Em Dam: </td>
            <td>${dam}(Dam) Decâmetro(s)</td>
        </tr>
        <tr>
            <td>Em dm:  </td>
            <td>${dm}(dm) decímetro(s)</td>
        </tr>
        <tr>
            <td>Em cm:  </td>
            <td>${cm}(cm) centímetro(s)</td>
        </tr>
        <tr>
            <td>Em mm:  </td>
            <td>${mm}(mm) milímetro(s)</td>
        </tr>
</table>
    `
}

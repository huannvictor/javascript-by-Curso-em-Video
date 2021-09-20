/* 
Tanto faz usar a Date() como New Date
*/

function iniciar(){
    let data = Date()
    let newdata = new Date

    let saida = document.querySelector('div#sparent')
    
    saida.innerHTML =
    `
    <p>Recebi do sistema: <br> <spam class="marca">${data}</spam></p>
    `
    
    saida.innerHTML +=
    `
    <p>Recebi do sistema: <br> <spam class="marca">${newdata}</spam></p>
    `
}
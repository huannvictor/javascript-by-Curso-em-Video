let tit = window.document.getElementById('tit')
tit.innerHTML = 'aprendendo a inserir imagens'

let quadro = window.document.querySelector('div')
quadro.id = 'canva'

    let canva = window.document.getElementById('canva')
    let item = window.document.createElement('img')
    item.src = 'manha.png'
    canva.appendChild(item)

quadro.appendChild(canva)
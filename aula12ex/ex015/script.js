function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900){
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbboy.png')
            }else if(idade >=10 && idade < 21){
                img.setAttribute('src', 'yngman.png')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'man.png')
            }else{
                img.setAttribute('src', 'oldman.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbgirl.png')
            }else if(idade >=10 && idade < 21){
                img.setAttribute('src', 'ynglady.png')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'lady.png')
            }else{
                img.setAttribute('src', 'oldlady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
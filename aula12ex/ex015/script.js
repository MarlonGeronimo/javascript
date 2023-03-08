function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}
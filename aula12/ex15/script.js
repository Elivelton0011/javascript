function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano || fano.value < 0){
        window.alert("[ERRO] - Valor invalido")
    }
    else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto')

     if(sex[0].checked){
        genero = "Homem"

        if(idade >= 0 && idade < 10){
           //criança
            img.setAttribute('src', 'img/homem_crianca.jpg')
        }
        else if(idade < 18){
            //jovem
             img.setAttribute('src', 'img/homem_jovem.jpg')
        }
        else if(idade < 60){
            //adulto
             img.setAttribute('src', 'img/homem_adulto.jpg')
        }
        else{
            //idoso
             img.setAttribute('src', 'img/homem_idoso.jpg')
        }

     }
     else if(sex[1].checked){
        //mulher
        genero = 'Mulher'

        if(idade >= 0 && idade < 10){
           //criança
            img.setAttribute('src', 'img/mulher_crianca.jpg')
        }
        else if(idade < 18){
            //jovem
             img.setAttribute('src', 'img/mulher_jovem.jpg')
        }
        else if(idade < 60){
            //adulto
             img.setAttribute('src', 'img/mulher_adulta.jpg')
        }
        else{
            //idoso
             img.setAttribute('src', 'img/mulher_idosa.jpg')
        }
     }
     
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
       

    }
}
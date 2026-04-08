function carregar()
{
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var date = new Date()
    var hora = date.getHours()


    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha.jpg'
        document.body.style.backgroundColor = "#fae46d"
        }
    else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = "#715e6f"
    }
    else{
        //noite
        img.src = "img/noite.jpg"
        document.body.style.background = "#0b2e4e"
    }
 

}

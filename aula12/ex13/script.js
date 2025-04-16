
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('#foto img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora > 0 && hora < 12){
    //bom dia
    img.src = 'img/manha.jpg'
    window.document.body.style.background = 'E7C227'
}else if (hora >= 12 && hora < 18) {
//boa tarde
img.src = 'img/tarde.jpg'
document.body.style.background = '#5F3950'
} else {
    //boa noite
    img.src = 'img/noite.jpg'
    document.body.style.background = '#0053A7'
}
}

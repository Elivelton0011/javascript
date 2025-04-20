function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] valor 0')
    } else {
        res.innerHTML = 'Contando: '

        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if (p <= 0) {
            alert('[ERRO] Passo: invalido, considerando passo: 1')
            p = 1
        }
        if (i < f) {
            for (c = i ; c <= f; c += p ) {
                res.innerHTML += `${c} `
            } 
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML  += `${c} `
            }
        }
    }

}
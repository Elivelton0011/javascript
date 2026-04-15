var vetor = []
var num = document.getElementById('txtn')

var tab = document.getElementById('seltab')
var res = document.getElementById('res')

function adicionar(){



if(num.value.length == 0){
    window.alert('Digite um valor na entrada')
}
else{
    var n = Number(num.value)

    if(n <= 0 || n > 100 ){
        window.alert('O valor digitado está fora do pradão')
    }
    else{
        var item = document.createElement('option')
        item.text = `Adiconando o valor ${n}`
        tab.appendChild(item)
        vetor.push(n)
    }
}
}

function finalizar(){
   var tamanho = vetor.length
   var soma = 0
  
   var minimo = vetor[0]
   var maximo = vetor[0]
   for(var i = 0; i < tamanho; i++){
     if(maximo < vetor[i]){
        maximo = vetor[i]
     }
     if(minimo > vetor[i]){
        minimo = vetor[i]
     }

     soma += vetor[i]
    
   }

   var media = soma / tamanho

     res.innerHTML = `ao todo foram adicionados ${tamanho}<br>`

     res.innerHTML += ` o maior valor informado foi ${maximo} <br>`

     res.innerHTML += ` o menor valor informado foi ${minimo} <br>`

     res.innerHTML += ` a soma total é ${soma} <br>`

     res.innerHTML += ` a media dos valores digitados é ${media} <br>`
    
    

}


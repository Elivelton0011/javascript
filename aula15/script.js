var num = [1,4,5,7,9]


num.push(3,2,6,8)
num[9] = 'ola'
num.sort()
console.log(`o tamanho do vetor é de ${num.length} indices`)
var pos = num.indexOf(3)
if (pos == -1){
    console.log('O valor não foi encontrado')
}
else{
    console.log(`O valor está na posição ${pos}`)
}


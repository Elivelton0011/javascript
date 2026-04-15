var num = [1,4,5,8]

/*
for(var pos = 0; pos < num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
    */
   for(var pos in num){
    console.log(`O valor no indice ${pos} é ${num[pos]}`)
   }
let num = ['string',5,'string',8,true,2,9,3]
num.push(1)                 //insiro o elemento 1 na ultima posição da array
num.sort()                  //ordeno os numeros em crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O nono valor do vetor é ${num[8]}`)
let pos1 = num.indexOf(8)    //retorna a posição do elemento informado
console.log(`o vlaor 8 está na posição ${pos1}`)
let pos2 = num.indexOf(4)    //retorna -1 pois o js não encontrou o elemento
console.log(`o vlaor 4 está na posição ${pos2} por ser um elemento que não está na Array`)
let pos = num.indexOf(5)
    if(pos == -1){
        console.log(`o valor não foi encontrado`)
    }else{
        console.log(`o valor está na posição ${pos}`)
    }
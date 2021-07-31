let num = ['abc','def',55,true]
num[10] = 6
num[15] = 'pau no cu'

console.log(num)
num.push('ultimo')
console.log(num)

console.log(num.length)
num.sort()
console.log(`${num}`)
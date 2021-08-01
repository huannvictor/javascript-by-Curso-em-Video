function verificar(){
    let inf = prompt('Digite qualquer número inteiro')
    let num = inf
    let ant = inf-1
    let suc = ant+2
    alert(`
    O antecessor de ${num} é ${ant}
    O sucessor de ${num} é ${suc}`)
}
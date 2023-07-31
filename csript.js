function produto(a, b) {
    return a ** b
}

let nmr1 = parseInt(prompt('Digite a base da potência número'))
let nmr2 = parseInt(prompt('Digite o expoente da potência '))

const x = produto(nmr1, nmr2)
alert(x)
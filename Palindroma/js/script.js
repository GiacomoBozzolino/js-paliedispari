
const parola = document.getElementById('parola').value;

console.log(parola);

let lettere = parola.split('')
console.log(lettere)

let lettereReverse = lettere.reverse('')
console.log(lettereReverse)

let lettereJoin = lettereReverse.join('')
console.log(lettereJoin)

function palindroma (control) {

    let lettere = parola.split('')
    console.log(lettere)

    let lettereReverse = lettere.reverse('')
    console.log(lettereReverse)
    
    let lettereJoin = lettereReverse.join('')
    console.log(lettereJoin)

    if (lettereJoin === parola) {
        return
        control === true
    }

    return
    control === false

};


let confronto = palindroma()
console.log('Js Simon')

// Imposto un timer di 30 secondi.
setTimeout(myFunction, 30000)

// Visualizzare in pagina 5 numeri casuali con alert.
const numbers = []

while (numbers.length < 5) {
    let randomNumbers = Math.floor(Math.random() * 5) + 1
    console.log(randomNumbers)

    numbers.push(randomNumbers)
}

alert(numbers.join('', ''))

// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt(). 
let userNumbers = []

function myFunction() {

    while (userNumbers.length < 5) {

        let askUser = parseInt(prompt('Inserisci i numeri giusti per vincere!'))
        console.log(askUser)

        userNumbers.push(askUser)
    }

    // Dopo che sono stati inseriti i 5 numeri, 
    // il software dice quanti e quali numeri sono stati individuati tramite console.log

    let rightNumbers = 0

    for (let i = 0; i < 5; i++) {

        if (userNumbers[i] === numbers[i]) {

            rightNumbers++

        }
    }

    console.log('Hai indovinato' + rightNumbers + 'numeri!')
}


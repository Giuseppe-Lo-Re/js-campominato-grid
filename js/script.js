// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.


// Fase preparatoria:
// Chiedo il livello di difficoltà attraverso un prompt;
// Definisco i livelli di difficoltà: 1)1-100, 2)1-81, 3)1-49;
// Genero 16 numeri casuali che rappresenteranno le bombe, che avranno un range differente a secondo del livello;
// Definisco il numero massimo di tentativi, che sarà uguale al range massimo del livello - il numero delle bombe.

// Fase logica:
// Finchè il gioco non è finito:
    // - Chediamo un numero all'utente attraverso un prompt;
    // - Se il numero è una bomba mostro all'utente un alert col messaggio "Hai perso!";
    // - Altrimenti:
            // Registriamo il numero dentro un array di numeri (inizializzato vuoto) solo se non già presente;
            // Se l'utente raggiunge il numero massimo di tentativi(lunghezza array = numero max tentativi) mostro all'utente un alert col messaggio "Hai vinto!".



// Chiedo il livello di difficoltà attraverso un prompt: 
const userLevel = prompt('Scegli il livello di difficolta( 1, 2, 3)')

// Definisco i livelli di difficoltà: 1)1-100, 2)1-81, 3)1-49:
let gameMaxRange;

switch (userLevel) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;
        break;
}

// Genero 16 numeri casuali che rappresenteranno le bombe, che avranno un range differente a secondo del livello selezionato:
// Invoco la funzione per generare i 16 numeri:
const bombs = bombGenerator(16, 1, gameMaxRange)

// Definisco il numero massimo di tentativi, che sarà uguale al range massimo del livello - il numero delle bombe.
let maxAttempt = gameMaxRange - 16;


// -------------------- FUNCTIONS -------------------- //


// Generatore di array di numeri random;
// numberOfElements -> numero elementi dell'array;
// rangeMin -> Range minimo dei numeri random;
// rangeMax -> Range massimo dei numeri random;
// return: array di numeri random.

function bombGenerator(numberOfElements, rangeMin, rangeMax) {

    // Dichiaro un array vuoto che verrà poi popolato dai numeri random:
    const randomNumberArray = [];
    
    // Creo un ciclo while che funzionerà finchè la lunghezza dell'array sarà inferiore al numero elementi dell'array:
    while(randomNumberArray.length < numberOfElements) {

        // creo un numero random tra rangeMin e rangeMax:
        const randomNumber = getRndInterger(rangeMin, rangeMax);

        // Che verrà pushato solo se diverso da quelli presenti:
        if(!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }
    }
}


// Generatore numeri random
function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
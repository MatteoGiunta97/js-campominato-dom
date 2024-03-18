/*
Consegna:

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri 
generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle 
altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero 
massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non 
sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte 
che l’utente ha cliccato su una cella che non era una bomba.
*/



const mainGrid = document.querySelector('#ms-grid');
const playBtn = document.querySelector('#ms-play-btn');
playBtn.addEventListener('click', createNewGame);

// Funzione che gestisce il gioco
function createNewGame() {
    
    // Svuoto la griglia quando viene generata una nuova partita
    mainGrid.innerHTML = '';

    // Quando l'utente clicca play leggo il valore della select
    const level = document.querySelector('#ms-level').value;
    // se il valore della select è facile 100 celle (10 per riga)
    // se il valore della select è media 81 celle (9 per riga)
    // se il valore della select è difficle 49 celle (7 per riga)
    let numberOfSquares;
    let numberOfCellsPerRow;
    
    if (level=== 'facile') {
        numberOfSquares = 100;
        numberOfCellsPerRow = 10;
    } else if (level === 'media') {
        numberOfSquares = 81;
        numberOfCellsPerRow = 9;
    } else {
        numberOfSquares = 49;
        numberOfCellsPerRow = 7;
    }

    // Creo un array bombe e inserisco 16 numeri random in un range da 1 fino al max 
    // di square/difficoltà
    let bombsArray = [];
    while (bombsArray.length < 16) {
        
        let newNumber = numRandom(1,numberOfSquares);
    
        // Inserisco i numeri digitati nell'array se non sono già presenti in esso
    
        if (bombsArray.includes(newNumber) === false) {
    
            bombsArray.push(newNumber);
        }
    
    }
    
    console.log(bombsArray)

    // Per numberOfSquares volte voglio creare uno square
    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber, numberOfCellsPerRow);
        square.addEventListener('click', function() {
            // Aggiungo la classe clicked
            this.classList.add('ms-clicked');
        });
        mainGrid.append(square);
    }
}

// Genera un elemento del DOM che rappresenta uno square
// number -> il numero intero della cella
// cellsPerRow -> numero intero che rappresenta quanti quadrati ci saranno per row
// return: un elemento del DOM che rappresenta il singolo square creato
function generateSquare(number, cellsPerRow) {

    const newSquare = document.createElement('div');

    newSquare.classList.add('ms-square')

    newSquare.innerHTML = number;

    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;

    return newSquare;
}

// La funzione genera un numero intero random tra due parametri: min e max
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
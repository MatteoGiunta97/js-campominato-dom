
const mainGrid = document.querySelector('#ms-grid');
const playBtn = document.querySelector('#ms-play-btn');
playBtn.addEventListener('click', createNewGame);

// Funzione che gestisce il gioco
function createNewGame() {
    
    // Svuoto la griglia quando viene generata una nuova partita
    mainGrid.innerHTML = '';

    // Quando l'utente clicca play leggo il valore della select
    const level = document.querySelector('#ms-level').value;

    console.log(level);
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

    console.log(numberOfSquares);

    // Per numberOfSquares volte voglio creare uno square
    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber, numberOfCellsPerRow);
        square.addEventListener('click', function() {
            // Faccio alert del numero
            alert(thisNumber);
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
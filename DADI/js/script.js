// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//Generiamo un numero casuale per il giocatore
let playerNumber = Math.floor(Math.random() * 6 + 1);

//Gereriamo numero casuale per il pc
let computerNumber = Math.floor(Math.random() * 6 + 1);

console.log(playerNumber);
console.log(computerNumber);

//SE il numero del player è maggiore di quello del pc 
if (playerNumber > computerNumber) {
    // ALLORA
    alert('Hai vinto! :) ');
    console.log("Vince il Giocatore con il numero", playerNumber);
    console.log("Perde il Computer con il numero", computerNumber)
}
// ALTRIMENTI se il numero del giocatore è minore
else if (playerNumber < computerNumber) {
    //ALLORA
    alert('Hai perso... :( sarà per la prossima volta ');
    console.log("Vince il Computer con il numero", computerNumber);
    console.log("Perde il Giocatore con il numero", playerNumber);
}
// ALTRIMENTI
else {
    alert('Pareggio');
    console.log("Giocatore e Computer pareggiano con il numero", playerNumber);
}


// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Prepariamo lista email con un array
const emailList = ["spiderman@gmail.com", "hulk@gmail.com", "ironman@gmail.com", "ladcfaschifo@gmail.com", "doctorstrange@gmail"];

let emailInput = prompt("Inserisci la tua email:");

let emailCheck = false;

// Controllo della email
for (let i = 0; i < emailList.length; i++) {

    //SE l'input corrisponde ad una delle mail nella lista
    if (emailInput == emailList[i]) {
        emailCheck = true;
        i = emailList.length + 1;
    }
    // ALTRIMENTI
    else {
        emailCheck = false;
    }
}

// Messaggi verifica email corretta o non corretta

// SE il controllo della mail è positivo
if (emailCheck == true) {
    alert("Email corretta. Benvenuto!")
    console.log(emailCheck)
}
// ALTRIMENTI
else {
    alert("Email errata. Riprova!")
    console.log(emailCheck)
}

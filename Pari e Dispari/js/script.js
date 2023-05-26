let button = document.getElementById('play');
// collego gli eventi al click del bottono
button.addEventListener('click', function(){ 
    let scelta = document.getElementById('scelta').value;
    const number = parseInt( document.getElementById('number').value);
    console.log(scelta);
    console.log(number);
// aggiungo un controllo che l'utente inserisca  solamente un numero da 1 a 5
    while(isNaN(number) || ( number > 5)) {
        document.getElementById ('allert').innerText = 'Per favore inserisci un numero da 1 a 5'
    }

   
// creo la funzione per generare randomicamente un numero
    function randomNumber (min, max) {
       return Math.floor(Math.random() * ( max-min +1) + min);  
    }

    let num = randomNumber (1, 5);
    console.log(num)
    console.log(num+number)
// creo la funzione per sommare il numero generato a quello inserito dall'utente
   function game (somma) {
    if  ((somma + number) % 2 === 0){
         return 'pari'
         
    } else {
        return 'dispari'

    }
   }

    let risultato = game (num)

    console.log(risultato)
// confronto il risultato della funzione e stampo un messaggio
   if (risultato === scelta){
       console.log ('hai vinto')
       document.getElementById ('allert').innerText = 'Hai Vinto!'

   } else {
    console.log ('hai perso')
    document.getElementById ('allert').innerText = 'Hai Perso!'
   }

}) 







    
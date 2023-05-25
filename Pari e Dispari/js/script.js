let button = document.getElementById('play');
button.addEventListener('click', function(){ 
    const scelta = document.getElementById('scelta').value;
    const number = parseInt( document.getElementById('number').value);
    console.log(scelta);
    console.log(number);

    function randomNumber (min, max) {
       return Math.floor(Math.random() * ( max-min +1) + min);  
    }

    let num = randomNumber (1, 5);
    console.log(num)
    console.log(num+number)

   function game (somma) {
    if  ((somma + number) % 2 === 0){
         return 'pari'
         
    } else {
        return 'dispari'

    }
   }

    let risultato = game (num)

    console.log(risultato)

   if (risultato === scelta){
       console.log ('hai vinto')

   } else {
    console.log ('hai perso')
   }

}) 







    
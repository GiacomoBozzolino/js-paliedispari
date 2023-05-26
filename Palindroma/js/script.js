// collego il confronto al click del pulsante
let button = document.getElementById('search')
button.addEventListener('click', function(){
    // recupero la parola inserita dall'utente
    const parola = document.getElementById('parola').value;
    console.log(parola);

    
    // creo la funzione per confrontare le due parole
    function palindroma (controllo) {
        let lettere = parola.split('');
        console.log(lettere);
    
        let lettereReverse = lettere.reverse('');
        console.log(lettereReverse);
    
        let lettereJoin = lettereReverse.join('');
        console.log(lettereJoin);
    
        if (lettereJoin === controllo) {
            return 'palindromo'
            
        } else{
            return 'non palindromo'
             
        }
    };
    
    // stampo in pagina il risultato
    let confronto = palindroma(parola);
    if (palindroma(parola) === 'palindromo'){
        console.log ('La parola è un palindromo')
        document.getElementById('messaggio').innerText= 'La parola è un palindromo'
    } else {
        console.log ('La parola non è un palindromo')
        document.getElementById('messaggio').innerText= 'La parola non è un palindromo'
    }
})




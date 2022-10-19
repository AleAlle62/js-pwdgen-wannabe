/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22


1) chiedere il nome
2) chiedere il cognome
3) chiedere il colore preferito
4) concatenare i primi 3 punti con 22 in fondo, stampandoli a schermo
*/


// variabili 

const nombre = prompt ('quale è il tuo nome?') 

const surname = prompt ('quale è il tuo congome?')

const color = prompt ('quale è il tuo colore preferito?') 

const venti = nombre + surname + color + 22


// collegamenti

document.getElementById('nome').innerHTML = nombre;

document.getElementById('cognome').innerHTML = surname;

document.getElementById('colore').innerHTML = color;

document.getElementById('due').innerHTML = venti;



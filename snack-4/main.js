//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
var invited = ["Riccardo", "Marco", "Luca", "Michele", "Giacomo"]
//chiedi all’utente il suo nome 
var userName = prompt("What's your name?")
//e comunicagli se può partecipare o no alla festa. 
if (invited.includes(userName)) {
    console.log("Welcome to the party");
} else {
    console.log("Sorry this party ain't for you!")
}
const name = prompt('Welkom! Wat is je naam?', 'Typ hier je naam');
alert('Hey ' + name + '!');

const minNumber = prompt(name + ', wat is het kleinste getal dat je wilt raden?');
const maxNumber = prompt('En wat is het grootste getal dat je wilt raden?');

//uitvoer prompt is string, dus omzetten naar getal, nodig  om in de volgende formule in te voeren
let minNumberInt = parseInt(minNumber);
let maxNumberInt = parseInt(maxNumber);

// random nummer maken   
const randomNumber = Math.floor(Math.random() * (maxNumberInt - minNumberInt)) + minNumberInt;
console.log(randomNumber);

// vraag speler om een nummer te kiezen
let guessNumber = prompt('Voer een getal in tussen ' + minNumberInt + ' en ' + maxNumber);
console.log(guessNumber);

//aantal pogingen over
let attempts = 4;

while (guessNumber != randomNumber) {
    alert('Dat is niet correct. Je hebt nog ' + attempts + ' pogingen over.')
    let guessNumber = prompt('Voer een nummer tussen ' + minNumberInt + ' en ' + maxNumber);
    console.log(guessNumber);
    attempts--;

    if (attempts < 1) {
        alert('Game Over')
        break;
    }

    if (guessNumber == randomNumber) {
        alert('Gefeliciteerd, je hebt gewonnen!');
        break;
    }
}

//spel afsluiten
alert('Dag ' + name + ', tot de volgende keer!');


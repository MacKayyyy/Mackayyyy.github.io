// Display current time, day, and date
function displayDateTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    document.getElementById("date-time").innerText = `Today is ${timeString} on ${day}, ${dateString}`;
}

// Greet the user and handle their mood input
function processUserData() {
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById("favorite-number").value)));

    document.getElementById("greeting").innerText = `The Mundane Boar welcomes you ${userName}! continue your life in your ${userMood} mood.`;

    // Determine the polygon name based on the number of sides
    const polygons = ["monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon", "hendecagon"];
    const polygonName = favoriteNumber >= 0 && favoriteNumber <= 10 ? polygons[favoriteNumber] : "polygon of unknown sides";
    
    document.getElementById("output").innerText = `Your favorite number corresponds to a ${polygonName}.`;
}

// Functions for your animal brand company
function animalFood() {
    const foods = ["berries and cream", "da meats", "me me me", "diiirrrrrt", "french sooooflayyyy"];
    document.getElementById("output").innerText = "Today our boar is eating " + foods[Math.floor(Math.random() * foods.length)];
}

function animalFact() {
    const facts = ["Boars are inferior to wombats", "boars are mega dangerous", "boars showed simba how to love", "boars be that short stocky yappy type", "boars gonna outpopulate us all"];
    document.getElementById("output").innerText = facts[Math.floor(Math.random() * facts.length)];
}

function randomAnimalSound() {
    const sounds = ["Woof!", "Meow!", "Roar!", "Chirp!", "Moo!"];
    document.getElementById("output").innerText = "Sounds like yo silly ass needa: " + sounds[Math.floor(Math.random() * sounds.length)];
}

function generateAnimalJoke() {
    const jokes = ["boooaaaring, u boarrrrin", "eat me u animal", "rawr XD", "Gimme choccy milk", "bouta moan fr u keep pushing that button"];
    document.getElementById("output").innerText = "Sounds like yo silly ass: " + jokes[Math.floor(Math.random() * jokes.length)];
}

function calculateAnimalYears() {
    const humanAge = parseInt(document.getElementById("human-age").value);
    if (!isNaN(humanAge) && humanAge > 0) {
        const boarAge = humanAge * 6;
        document.getElementById("output").innerText = `You are now a boar, and you are ${boarAge} years old.`;
    } else {
        document.getElementById("output").innerText = "Please enter a valid age in human years.";
    }
}

// Call the displayDateTime function on page load
window.onload = function() {
    displayDateTime();
    document.getElementById("submit-for-greeting-button").addEventListener("click", processUserData);
    document.getElementById("script-test-button").addEventListener("click", animalFood);
    document.getElementById("animal-fact-button").addEventListener("click", animalFact);
    document.getElementById("random-animal-sound-button").addEventListener("click", randomAnimalSound);
    document.getElementById("generate-animal-joke-button").addEventListener("click", generateAnimalJoke);
    document.getElementById("boar-years-button").addEventListener("click", calculateAnimalYears);

    
};
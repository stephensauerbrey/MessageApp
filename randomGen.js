const firstNames = ["Red", "Orange", "Green", "Yellow", "Black", "Golden", "Aqua", "Navy", "Silver", "Teal", "Purple", "Brown"];
const secondNames = ["Penguin", "Dog", "Zebra", "Cat", "Tiger", "Fox", "Bear", "Moose", "Lion", "Panda", "Deer", "Fish"];
const Pass1 = ["Bald", "Attractive", "Chubby", "Fit", "Elegant", "Plain", "Worried", "Tiny", "Fat", "Big", "Huge", "Flabby", "Depressed", "Unlucky", "Happy", "Sad", "Scruffy", "Obedient", "Silly", "Wonderful"];

var password = getRandomPass()
var username = getRandomName()

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max));
}

function getRandomName() {
    return `${firstNames[getRandomNumber(firstNames.length)]}${secondNames[getRandomNumber(secondNames.length)]}`
}

function getRandomPass() {
   return `${Pass1[getRandomNumber(Pass1.length)]}${"Drew"}`
}

function setRandomName() {
    document.getElementById('random-name').innerText = username;
}

function setRandomPass(){
    document.getElementById('random-pass').innerText = password;
}

document.getElementById('generate').addEventListener('click', setRandomName);
document.getElementById('generate').addEventListener('click', setRandomPass);
document.getElementById('username').innerHTML = username
document.getElementById("password").innerHTML = password
const firstNames = ["Red","Orange","Green","Yellow"];
const secondNames = ["Penguin", "Drew", "Zebra","Cat"];

const getRandomNumber = (max) => Math.floor(Math.random() * (max));
name + "hello"

const getRandomName = () => `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {document.getElementById('random-name').innerText = getRandomName(); }

document.getElementById('generate').addEventListener('click', setRandomName);

setRandomName();

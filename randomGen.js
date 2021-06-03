const firstNames = ["Red","Orange","Green","Yellow","Black","Golden","Aqua","Navy","Silver","Teal","Purple","Brown"];
const secondNames = ["Penguin", "Dog", "Zebra","Cat","Tiger", "Fox", "Bear","Moose","Lion", "Panda", "Deer","Fish"];

const getRandomNumber = (max) => Math.floor(Math.random() * (max));

const getRandomName = () => `${firstNames[getRandomNumber(firstNames.length)]}${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {document.getElementById('random-name').innerText = getRandomName(); }

document.getElementById('generate').addEventListener('click', setRandomName);

setRandomName();

const Pass1 = ["Bald","Attractive","Chubby","Fit","Elegant","Plain","Worried","Tiny","Fat","Big","Huge","Flabby","Depressed","Unlucky","Happy","Sad","Scruffy","Obedient","Silly","Wonderful"];

const getRandomPass = () => `${Pass1[getRandomNumber(Pass1.length)]}${"Drew"}`;

const setRandomPass = () => {document.getElementById('random-pass').innerText = getRandomPass(); }

document.getElementById('generate').addEventListener('click', setRandomPass);

setRandomPass();
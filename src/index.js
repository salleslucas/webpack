import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import warning from './templates/warning.html';
import './styles/warning.css';
import fraseTxt from './files/frase.txt';
import descricao from './files/descricao.json'
import Header from './components/header.js';

const title = new Title();

title.create("Teste WebPack");

const image = new Image();
image.insertLGBTImage();

const button = new Button();
button.create();

// Babel Spread 
const obj = {a:1, b:2, c:3, d:4};
let {a,b, ...test} = obj;
console.log(a,b,test);

// import html
const body = document.querySelector('body');
body.innerHTML += warning;

// import txt
const frase = fraseTxt;
console.log(frase);

// import JSON
const pessoa = descricao;
console.log(pessoa);

// import Header
const header = new Header();
header.create("Header Teste");

// Define Plugin
console.log(VERSION);
console.log(PORT);
console.log(process.env.API_KEY);
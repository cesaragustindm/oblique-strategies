const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

"Cambia la interfase",
"Escucha la musicalidad de los cuerpos",
"Lee ritmos en el espacio físico",
"Algo que pueda cortarse a cuchilla",
"Algo que se pueda extender indefinidamente",
"Que el sonido sea un obstáculo",
"A una cosa insignificante volverla desbordante",
"Un sonido que expanda un movimiento",
"Un sonido que genere contraste",
"A una cosa importante, volverla imperceptible",
    ""
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);


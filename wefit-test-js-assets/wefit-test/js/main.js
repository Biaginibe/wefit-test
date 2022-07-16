//Menu vertical -> Menu alinhado
let menu = document.querySelector('.btn-group-vertical');
menu.className = 'btn-group';
let button = document.querySelectorAll('button');
button.forEach((element) => {
	element.className = 'btn btn-secondary mr-1';
	element.style.borderRadius = '3px';
});

//Texto do Header para a direita, fundo, texto e botão
let header = document.querySelector('.jumbotron');
header.style.textAlign = 'right';
header.style.backgroundColor = 'grey';
header.style.color = 'white';

let headerBtn = document.querySelector('.btn-primary');
headerBtn.className = 'btn btn-success btn-lg';

//(Re)ordenar cards e alterar um botão
const cards = Array.from(document.querySelectorAll('.card'));

function insertBefore(element, newElement) {
	const div = element.parentElement;
	div.insertBefore(newElement, element);
}

function insertAfter(element, newElement) {
	const div = element.parentElement;
	div.insertBefore(newElement, element.nextSibling);
}

insertBefore(cards[0].parentNode, cards[3].parentNode);
insertAfter(cards[2].parentNode, cards[1].parentNode);

let btnCards = document.querySelectorAll('.btn-primary');
btnCards[1].className = 'btn btn-success';

//Adicionando itens na lista e 'selecionando' um item diferente
let listPai = document.querySelector('.list-group');
let list = document.querySelectorAll('.list-group-item');

list[0].classList.remove("active")


let item4 = document.createElement('li');
item4.textContent = "Quarto item"
item4.className = "list-group-item active"
listPai.appendChild(item4)

let item5 = document.createElement('li');
item5.textContent = "Quinto item"
item5.className = "list-group-item"
listPai.appendChild(item5)


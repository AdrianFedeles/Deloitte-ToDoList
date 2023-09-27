console.log('Hello Everybody');

//Selectors
const unCheckButton = document.querySelector('.uncheck');
const checkButton = document.querySelector('.check');
const todoParagraph = document.querySelector('.todo-paragraph');

//Event Listeners
unCheckButton.addEventListener('click', checkBoxEvent);
checkButton.addEventListener('click', unCheckBoxEvent);

//Functions
function checkBoxEvent() {
	todoParagraph.style.textDecoration = 'line-through';
	unCheckButton.style.display = 'none';
	checkButton.style.display = 'block';
	console.log('check');
}

function unCheckBoxEvent() {
	todoParagraph.style.textDecoration = 'none';
	unCheckButton.style.display = 'block';
	checkButton.style.display = 'none';
	console.log('unCheck');
}

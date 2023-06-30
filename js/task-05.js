const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', handlerQuery);

function handlerQuery(evt) {
    evt.currentTarget.value === '' ? nameOutput.textContent = 'Anonymous' : nameOutput.textContent = evt.currentTarget.value;
}
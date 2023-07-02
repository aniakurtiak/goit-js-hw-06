const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

input.addEventListener('input', handlerRange);

function handlerRange(evt) {
    text.style.fontSize = `${input.value}px`;
}


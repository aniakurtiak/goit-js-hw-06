const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', handlerDecrement);
increment.addEventListener('click', handlerIncrement);

let counterValue = 0;
function handlerDecrement() {
    counterValue -= 1;
    value.textContent = `${counterValue}`;
}
function handlerIncrement() {
    counterValue += 1;
    value.textContent = `${counterValue}`;
}

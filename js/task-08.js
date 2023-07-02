const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value
    }
    if (!(email.value) || !(password.value)) {
        alert('Всі поля повинні бути заповнені!')
    } else {
console.log(data);
    }
    evt.currentTarget.reset();
};

const inputEl = document.querySelector('#name-input');
const valueEL = document.querySelector('#name-output');
inputEl.addEventListener('input', (elem) => {
    if (elem.currentTarget.value.length === 0) {
        valueEL.textContent = "Anonymous";
        return;
    }
    valueEL.textContent = elem.currentTarget.value;
})
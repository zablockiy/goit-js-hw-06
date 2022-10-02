let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('#value');
buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});



    
const inputEl = document.querySelector("#font-size-control");
const textEL = document.querySelector("#text");

inputEl.addEventListener('input', (elem) => {
    const rangeEl = `${elem.currentTarget.value }px`;
    textEL.style.fontSize = rangeEl;
   


})
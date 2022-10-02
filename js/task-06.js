const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', (elem) => {
    if (elem.currentTarget.value.length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        return;
    }
    // inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");

})
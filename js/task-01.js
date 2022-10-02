const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

const finalArr = itemsEl.forEach((elem) => {
    const titleEl = elem.querySelector('h2');
    const subTitleEl = elem.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${subTitleEl.length}`);
})


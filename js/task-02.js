const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrMarkUp = ingredients.map((elem) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  itemEl.classList.add('item');
  return itemEl;
})
const listEl = document.querySelector("#ingredients");
listEl.append(...ingrMarkUp);


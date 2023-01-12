const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients
  .map(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.classList.add('item')
 document.querySelector('ul').append(item)
})





  
  
 
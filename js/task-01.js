// Частина 1
console.log("Number of categories :", document.querySelector('ul').children.length);
// Частина 2
const secondTask = document.querySelectorAll('.item')
secondTask.forEach(item => {
    console.log('Category:',item.firstElementChild.textContent);
    console.log('Elements:',item.lastElementChild.children.length)
})
    

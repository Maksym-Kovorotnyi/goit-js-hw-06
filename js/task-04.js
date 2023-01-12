const btnElDecrement = document.querySelector('button[data-action="decrement"]')
const btnElIncrement = document.querySelector('button[data-action="increment"]')

const valueEl = document.querySelector('#value')

btnElDecrement.addEventListener('click', decrement)
btnElIncrement.addEventListener('click', increment)
let counter = 0

function decrement(event) {
     counter -= 1
    valueEl.textContent = counter
}

function increment(event) {
    counter += 1
    valueEl.textContent = counter
}



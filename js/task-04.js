const btnEl = document.querySelectorAll('#counter button')

const valueEl = document.querySelector('#value')

btnEl[0].addEventListener('click', decrement)
btnEl[1].addEventListener('click', increment)
let counter = 0

function decrement(event) {
     counter -= 1
    valueEl.textContent = counter
}

function increment(event) {
    counter += 1
    valueEl.textContent = counter
}



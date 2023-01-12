const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', validation)
const inputDatalength = Number(inputEl.getAttribute('data-length'))
console.log(inputDatalength)

function validation(event) {
   
    console.log(event.target.value.length)
    if (event.target.value.length === inputDatalength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')

    }
    else { inputEl.classList.add('invalid') }
    
} 

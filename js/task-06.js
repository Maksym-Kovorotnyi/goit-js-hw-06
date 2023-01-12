const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', validation)
function validation(event) {
    if (event.target.value.length <= inputEl.dataset.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    else { inputEl.classList.add('invalid') }
}
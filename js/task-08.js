const form = document.querySelector(`form`)
form.addEventListener('submit', formProcessor)

function formProcessor(event) {
    event.preventDefault()
    const emailVal = event.currentTarget.elements.email.value
    const passwordVal = event.currentTarget.elements.password.value
    if (emailVal === '' || passwordVal === '') {
        alert('Всі поля мають бути заповнені')
    }
    const formSucssess = {
        email: emailVal,
        password: passwordVal,
    }
    console.log(formSucssess)
    event.currentTarget.reset()
}


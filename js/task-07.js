const inputEl = document.querySelector('#font-size-control')
const fontSizeText = document.querySelector('#text')

inputEl.addEventListener('input', changeFontSize)

function changeFontSize(event) {
    fontSizeText.style.fontSize =`${event.target.value}px`
}

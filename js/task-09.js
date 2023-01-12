function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body')
const btnEl = document.querySelector('.change-color')
const colorValueText = document.querySelector(".color")
btnEl.addEventListener('click', colorChanger)

function colorChanger(event) {
  const functionKeeper = getRandomHexColor()
bodyEl.style.backgroundColor = functionKeeper
colorValueText.textContent = functionKeeper
}

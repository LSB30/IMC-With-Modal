import { Modal } from './modal.js'

const form = document.querySelector('form');

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.textContent = message
  Modal.open()

})

function IMC(weight, height) {
  let imc = 0
  imc = (weight / (height ** 2)).toFixed(2).replace('.', ",");
  return imc
}
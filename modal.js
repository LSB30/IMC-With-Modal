const form = document.querySelector('form')
export const Modal = {
  buttonClose: document.querySelector('.close'),
  message: document.querySelector('.title-h2'),
  open() {
    document.querySelector('.modal-wrapper').classList.add('open')
  },
  close() {
    document.querySelector('.modal-wrapper').classList.remove('open')
    form.reset()
  }
}

Modal.buttonClose.addEventListener('click', () => {
  Modal.close()
})

window.addEventListener('keydown', (e) => {
  console.log(e.key)
  if (e.key == 'Escape') {
    Modal.close()
  }
})
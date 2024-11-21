const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');


openModalButton.addEventListener('click', () => {
  modal.classList.add('open');
});


closeButton.addEventListener('click', () => {
  modal.classList.remove('open');
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});
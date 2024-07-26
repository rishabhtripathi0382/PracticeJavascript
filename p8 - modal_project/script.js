document.addEventListener('DOMContentLoaded', function(){
  const openModalBtn = document.getElementById('open-modal-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  // functions to open this modal
  openModalBtn.addEventListener('click', function(){
  modal.style.display = 'flex';
})

  // functions to close this modal
  closeModalBtn.addEventListener('click', function(){
  modal.style.display = 'none';
})

  //close the modal while clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  } );
});



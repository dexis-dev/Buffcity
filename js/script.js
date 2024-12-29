
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  

  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const headerOpen = document.querySelector('.header_open');
const headerClose = document.querySelector('.header_burger_close');
const headerBurger = document.querySelector('.header_burger');

function openCloseBurger(event) {
    event.preventDefault(); 

    headerBurger.classList.toggle('header_burgerActive');
}

headerOpen.addEventListener('click', openCloseBurger);
headerClose.addEventListener('click', openCloseBurger);









function openModals() {
  document.getElementById("myModals").style.display = "block";
}

function closeModals() {
  document.getElementById("myModal").style.display = "none";
}


window.onclick = function(event) {
  var modal = document.getElementById("myModals");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

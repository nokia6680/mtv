function Selected(a) {
  var label = a.value;
    if (label=="enter") {
      (document.getElementById("form-enter").style.display="block") &&
      (document.getElementById("agreement").style.display="none") &&
      (document.getElementById("enter-btn").style.display="block") &&
      (document.getElementById("register-btn").style.display="none");
    } else {
      (document.getElementById("form-enter").style.display="none") &&
      (document.getElementById("agreement").style.display="block") &&
      (document.getElementById("register-btn").style.display="block") &&
      (document.getElementById("enter-btn").style.display="none");
  } if (label=="register") {
      document.getElementById("form-register").style.display="block";
  } else {
      document.getElementById("form-register").style.display="none";
  }
}


var modalSearch = document.querySelector(".slide-panel");
var closeButton = document.querySelector(".slide-panel__close");
var openButton = document.querySelectorAll(".cabinet-details__photo");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("slide-panel--on");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("slide-panel--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("slide-panel--on");
    }
  });
}

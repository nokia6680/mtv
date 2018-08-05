function Selected(a) {
  var label = a.value;
    if (label=="enter") {
      (document.getElementById("form-enter").style.display="block") && (document.getElementById("agreement").style.display="none");
    } else {
      (document.getElementById("form-enter").style.display="none") && (document.getElementById("agreement").style.display="block");
  } if (label=="register") {
      document.getElementById("form-register").style.display="block";
  } else {
      document.getElementById("form-register").style.display="none";
  }
}

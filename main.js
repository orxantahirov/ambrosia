function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}



function open_menu(name) {
  var x = document.getElementsByClassName(name)[0];
  console.log(x);
  if (x.style.display == "none") {
    x.style.display = "block";
    //  document.getElementById("fast-food").style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  
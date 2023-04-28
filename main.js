
let btn_bt = document.getElementById("btn-bt");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn_bt.style.display = "flex";
  } else {
    btn_bt.style.display = "none";
  }
}





function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let menu = document.querySelector('#menu-nav');
let navbar = document.querySelector('.navbar');
let item = document.querySelector('.item');

menu.onclick =() =>{
  navbar.classList.toggle('active');
}

navbar.onclick =() =>{
  navbar.classList.remove('active');
}
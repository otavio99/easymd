//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var w = window.innerWidth;
console.log(w);
if ( w <= 500 ) {
    document.getElementById("email_icon").href = "mailto:contato@easymd.com.br"
}
else {
    document.getElementById("email_icon").href = "https://mail.google.com/a/?view=cm&fs=1&to=contato@easymd.com.br"
}
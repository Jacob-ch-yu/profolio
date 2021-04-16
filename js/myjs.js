window.onscroll = function() {myFunction1()};


mybutton = document.getElementById("myBtn");

var header = document.getElementById("header");
var sticky = header.offsetTop;
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {gototop()};

function gototop() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}



// function myFunction1() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    console.log("done2")
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





function myFunction2() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




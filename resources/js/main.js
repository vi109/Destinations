// Auto slide one

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

// Auto slide two

var slideIndexB = 0;
carouselB();

function carouselB() {
  var i;
  var x = document.getElementsByClassName("slide-two");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexB++;
  if (slideIndexB > x.length) {slideIndexB = 1}
  x[slideIndexB-1].style.display = "block";
  setTimeout(carouselB, 5000); // Change image every 2 seconds
}

// Auto slide Three

var slideIndexC = 0;
carouselC();

function carouselC() {
  var i;
  var x = document.getElementsByClassName("slide-three");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexC++;
  if (slideIndexC > x.length) {slideIndexC = 1}
  x[slideIndexC-1].style.display = "block";
  setTimeout(carouselC, 5000); // Change image every 2 seconds
}

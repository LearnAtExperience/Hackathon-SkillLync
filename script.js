// Changing the visibility mode of scroll to top icon
let scrollToTop = document.getElementById("scroll-to-top");
window.onscroll = function show() {
  if (window.pageYOffset > 1275) {
    scrollToTop.style.visibility = "visible";
  } else {
    scrollToTop.style.visibility = "hidden";
   }
 }
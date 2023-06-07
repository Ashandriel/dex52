window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").classList.add("scrolling");
  } else {
    document.getElementById("navigation").classList.remove("scrolling");
  }
}
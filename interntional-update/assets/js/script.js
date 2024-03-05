const cards = document.querySelectorAll(".card");

window.onload = function () {
  cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    if (textContent.scrollHeight == textContent.clientHeight) {
      seeMoreBtn.style.display = "none";
      textContent.style.height = "fit-content";
    } else {
      card.classList.add("gradient");
    }
  });
};

cards.forEach((card) => {
  let seeMoreBtn = card.querySelector(".see-more-btn");
  let textContent = card.querySelector(".card-content .text");

  seeMoreBtn.addEventListener("click", () => {
    card.classList.toggle("active");
    card.classList.toggle("gradient");

    if (card.classList.contains("active")) {
      seeMoreBtn.innerHTML = "See Less";
      textContent.style.height = textContent.scrollHeight + "px";
    } else {
      seeMoreBtn.innerHTML = "See More";
      textContent.style.height = "100px";
    }
  });
});

$(document).ready(function () {
  $(".testimonial-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    margin: 50,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

var navbar = document.getElementById("navbar");
var menu = document.getElementById("navbar-nav");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {

// }
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

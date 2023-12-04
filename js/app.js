let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}
window.onscroll = () =>{
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}


/*=================== clickable image part ===================*/
document.querySelectorAll('.image-slider img').forEach(images =>{
  images.onclick = () =>{
     var src = images.getAttribute('src');
     document.querySelector('.main-home-image').src = src;
  }
});

/*=================== clickable image part end ===================*/

/*=================== review section part ===================*/
var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
/*=================== review section part end ===================*/












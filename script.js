let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

let contactInfo = document.querySelector(".contact-info");
let infoBtn = document.querySelector("#info-btn");

let closeBtn = document.querySelector('#close-btn')


menuBtn.onclick = () => {
  navbar.classList.toggle('active');
};



searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
};



infoBtn.onclick = () => {
  contactInfo.classList.add('active');
};

closeBtn.onclick = () => {
    contactInfo.classList.remove('active');
};




window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Scroll Effect
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  let top = window.scrollY;
  let offset = sec.offsetTop;
  let height = sec.offsetHeight;

  if (top >= offset && top < offset + height) {
    sec.classList.add('show-animate');
  }
  else {
    sec.classList.remove('show-animate');
  }
}

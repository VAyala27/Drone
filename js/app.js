const reviews = [{
    id: 1,
    name: "John Doe",
    job: "Journalist",
    img: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae illo sapiente adipisci, voluptate omnis rem commodi fuga soluta harum possimus eligendi perferendis quam enim temporibus at mollitia sunt inventore.`
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "Photographer",
    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae illo sapiente adipisci, voluptate omnis rem commodi fuga soluta harum possimus eligendi perferendis quam enim temporibus at mollitia sunt inventore.`
  },
  {
    id: 3,
    name: "John Smith",
    job: "CO Founder",
    img: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae illo sapiente adipisci, voluptate omnis rem commodi fuga soluta harum possimus eligendi perferendis quam enim temporibus at mollitia sunt inventore.`
  },
];



// Select items
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(reviews);
});

function showPerson(review) {
  const item = reviews[review];
  img.src = item.img;
  job.innerHTML = item.job;
  author.innerHTML = item.name;
  info.innerHTML = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

$(document).ready(function () {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 75
    }, 1000);
    $('.navbar-collapse').removeClass('show');
  });

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 100;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});
$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $("body").addClass("toggle");
  });
});

$(document).ready(function(){
  $(".closed-menu").click(function(){
    $("body").removeClass("toggle");
  });
});

$('.slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
  }).slickAnimation();
  

  //logo slider

$('.logos-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 3
    }
    }, {
    breakpoint: 520,
    settings: {
    slidesToShow: 2
    }
    }]
    });


// Set the date for the sale to end
var saleEndDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the sale end date
  var distance = saleEndDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Sale Ended";
  }
}, 1000);

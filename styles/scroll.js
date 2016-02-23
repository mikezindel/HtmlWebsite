$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 250) {
      $('.topnav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 251) {
      $('.topnav').removeClass('navbar-fixed');
    }
  });
});
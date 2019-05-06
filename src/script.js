import jQuery from 'jquery';

jQuery(document).ready(function ($) {


  // Menu bar 

  $('.menu-bar').click(function () {
    $('.menu').toggleClass('active');
    $(this).toggleClass('open');
  });

  // Close menu bar when clicked elsewere
  $('body').click(function(e) {

    if(($(e.target).closest('.menu').length === 0)&&($('.menu').hasClass('active'))) {
      $('.menu-bar').toggleClass('open');
      $('.menu').toggleClass('active');
    } 
  });

  //Close menu bar when user scrolls down
  $(window).scroll(function(e) {
    e.stopPropagation();
    if($(window).scrollTop() > 100) {
      if($('.menu-bar').hasClass('open')) {
        $('.menu-bar').removeClass('open');
        $('.menu').removeClass('active');
      }
    } 
  });

 //Scroll up to the top
 const btn = $('.fa-angle-double-up');

 $(window).scroll(function() {
   if ($(window).scrollTop() > 300) {
     btn.addClass('show');
   } else {
     btn.removeClass('show');
   }
 });

 btn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
 });

 //Modal window

 const projectImg = $('.overlay');
 const modal = $('.modal');
 const bgOverlay = $('.bg-overlay');
 const closeModal = $('.close-modal');

 const toggleModal = (e) => {
   e.preventDefault();
  modal.fadeToggle();
   bgOverlay.toggleClass('darken');

   if(bgOverlay.hasClass('darken') === true) {
    $('body').toggleClass('fixed');
   } else {
    $('body').toggleClass('fixed');
   }
 };

 projectImg.on('click', toggleModal);

 bgOverlay.on('click', toggleModal);

 closeModal.on('click', toggleModal);



});





/*---------------*/
/*--          ---*/
/* smooth scroll */
/*--           --*/
/*---------------*/
$(function() {
  $('#caret').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/*---------------*/
/*--           --*/
/*   countdown   */
/*--           --*/
/*---------------*/
$(document).ready(function () {
    $countdown = "2017/03/05 00:00:00";
    setCountdown($countdown);
});
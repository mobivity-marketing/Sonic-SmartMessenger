// //////////////////////////////////////////////////////////////////////////////////////////////
// Footer Reveal JS
// //////////////////////////////////////////////////////////////////////////////////////////////

/**
 * footer-reveal.js
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014 Iain Andrew
 * https://github.com/IainAndrew
 */

(function($) {

  $.fn.footerReveal = function(options) {

    var $this = $(this),
        $prev = $this.prev(),
        $win = $(window),

        defaults = $.extend ({
          shadow : true,
          shadowOpacity: 0.8,
          zIndex : -100
        }, options ),

        settings = $.extend(true, {}, defaults, options);

    if ($this.outerHeight() <= $win.outerHeight() && $this.offset().top >= $win.outerHeight()) {
      $this.css({
        'z-index' : defaults.zIndex,
        position : 'fixed',
        bottom : 0
      });

      if (defaults.shadow) {
        $prev.css ({
          '-moz-box-shadow' : '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity + ')',
          '-webkit-box-shadow' : '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity +')',
          'box-shadow' : '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity + ')'
        });
      }

      $win.on('load resize footerRevealResize', function() {
        $this.css({
          'width' : $prev.outerWidth()
        });
        $prev.css({
          'margin-bottom' : $this.outerHeight()
        });
      });
    }

    return this;

  };

}) (jQuery);

// //////////////////////////////////////////////////////////////////////////////////////////////
// Hiding and Showing Elements
// //////////////////////////////////////////////////////////////////////////////////////////////

$('#activateButton').on('click', function() {
  $('#hiddenFooter').addClass('hide');
  $('#overlay').removeClass('hide');
});

$('#back').on('click', function() {
  $('#hiddenFooter').removeClass('hide');
  $('#overlay').addClass('hide');
});

// //////////////////////////////////////////////////////////////////////////////////////////////
// Press and Hold to Redeem
// //////////////////////////////////////////////////////////////////////////////////////////////

var button = document.getElementById("circleButton");
var timeLeft = document.getElementById("timeLeft");
var counter = 3;

//  Mouse Down/Up for Desktop

button.addEventListener("mousedown", function(){
  $('#centerScreenText').addClass('hide');
  $('#centerScreenCountdown').removeClass('hide');
  timeLeft.innerHTML = counter;
});
button.addEventListener("mouseup", function(){
  $('#centerScreenCountdown').addClass('hide');
  $('#centerScreenText').removeClass('hide');
  timeLeft.innerHTML = "";
});

// Touch Start/End for Mobile

button.addEventListener("touchstart", function(){
  $('#centerScreenText').addClass('hide');
  $('#centerScreenCountdown').removeClass('hide');
  timeLeft.innerHTML = counter;
});

button.addEventListener("touchend", function(){
  $('#centerScreenCountdown').addClass('hide');
  $('#centerScreenText').removeClass('hide');
  timeLeft.innerHTML = "";
});
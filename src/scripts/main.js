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
var counter = 5;
var isLetGo = true;

// Defining Mouse and Touch Down/Up, as Well as Hide/Show of Divs

button.addEventListener("mousedown", function() {
  $('#centerScreenText').addClass('hide');
  $('#centerScreenCountdown').removeClass('hide');
  isLetGo = false;
});

button.addEventListener("touchstart", function() {
  $('#centerScreenText').addClass('hide');
  $('#centerScreenCountdown').removeClass('hide');
  isLetGo = false;
});

button.addEventListener("mouseup", function(){
  $('#centerScreenCountdown').addClass('hide');
  $('#centerScreenText').removeClass('hide');
  isLetGo = true;
});

button.addEventListener("touchend", function(){
  $('#centerScreenCountdown').addClass('hide');
  $('#centerScreenText').removeClass('hide');
  isLetGo = true;
});

// While Loop Countdown Based on Events

function countdown() {

  timeLeft.innerHTML = counter;

  if (counter >= 0 && !isLetGo) {
    counter--;
  }

  else if (counter >= 0 && isLetGo) {
    counter = 5;
    return;
  }

  else if (counter < 0 && !isLetGo) {
    window.location.href = "offerRedeemed.html";
  }

  window.setTimeout(countdown, 1000);

}

button.addEventListener("mousedown", function() {
  countdown();
});

button.addEventListener("touchstart", function() {
  countdown();
});









"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    $window.on('resize', function () {
      heightHeader();
      heightFooter();
      heightPage();
    });

    checkScroll();
    heightHeader();
    heightFooter();
    heightPage();

    $('.GoBottom').on('click', function (ev) {
      ev.preventDefault();

      var $this = $(ev.currentTarget),
          href = $this.attr('href') !== undefined ? $this.attr('href') : $this.data('href');

      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 600);
    });

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  var hViewport = function hViewport() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var getHFooter = function getHFooter() {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-footer'));
  };

  var getHHeader = function getHHeader() {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  };

  var heightFooter = function heightFooter() {
    var hFooter = parseFloat($('.Footer').innerHeight());

    document.documentElement.style.setProperty('--height-footer', '' + hFooter);
  };

  var heightHeader = function heightHeader() {
    var hHeader = parseFloat($('.Header').innerHeight());

    document.documentElement.style.setProperty('--height-header', hHeader + 'px');
  };

  var heightPage = function heightPage() {
    var hPage = hViewport() - getHFooter();

    document.documentElement.style.setProperty('--height-page', hPage + 'px');
  };
})(jQuery);
//# sourceMappingURL=script.js.map

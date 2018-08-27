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

    $('#js-display-reminders').on('click', function () {
      var button = $(this),
          parentWrapper = button.closest('.Page__child__content'),
          reminderWrapper = parentWrapper.next(),
          parentRow = parentWrapper.parent();

      parentRow.removeClass('Page__child--otherDates');
      parentWrapper.addClass('hide');
      reminderWrapper.removeClass('hide');
    });
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if (wViewport() < 992) {
      arrow.fadeOut();
      return;
    }

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  var hViewport = function hViewport() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var wViewport = function wViewport() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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

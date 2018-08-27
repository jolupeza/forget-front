"use strict";

;(function($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      checkScroll();
    });

    $window.on('resize', () => {
      heightHeader();
      heightFooter();
      heightPage();
    });

    checkScroll();
    heightHeader();
    heightFooter();
    heightPage();

    $('.GoBottom').on('click', (ev) => {
      ev.preventDefault();

      let $this = $(ev.currentTarget),
          href = ($this.attr('href') !== undefined) ? $this.attr('href') : $this.data('href');

      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 600);
    });

    $('.ArrowTop').on('click', (ev) => {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });

    $('#js-display-reminders').on('click', function () {
      let button = $(this),
          parentWrapper = button.closest('.Page__child__content'),
          reminderWrapper = parentWrapper.next(),
          parentRow = parentWrapper.parent();

      parentRow.removeClass('Page__child--otherDates');
      parentWrapper.addClass('hide');
      reminderWrapper.removeClass('hide');
    });
  });

  let checkScroll = () => {
    let arrow = $('.ArrowTop');

    if (wViewport() < 992) {
      arrow.fadeOut();
      return;
    }

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  }

  let hViewport = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  let wViewport = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  let getHFooter = () => {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-footer'));
  }

  let getHHeader = () => {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  }

  let heightFooter = () => {
    let hFooter = parseFloat($('.Footer').innerHeight());

    document.documentElement.style.setProperty('--height-footer', `${hFooter}`);
  }

  let heightHeader = () => {
    let hHeader = parseFloat($('.Header').innerHeight());

    document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  }

  let heightPage = () => {
    let hPage = hViewport() - getHFooter();

    document.documentElement.style.setProperty('--height-page', `${hPage}px`);
  }
})(jQuery);

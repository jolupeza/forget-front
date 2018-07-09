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
  });

  let checkScroll = () => {
    let arrow = $('.ArrowTop');

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  }

  let hViewport = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
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
    let hPage = hViewport() - getHFooter(),
        hPageRow = hPage / 2;

    document.documentElement.style.setProperty('--height-page', `${hPage}px`);
    document.documentElement.style.setProperty('--height-page-row', `${hPageRow}px`);
  }
})(jQuery);

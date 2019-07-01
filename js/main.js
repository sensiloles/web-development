$(document).ready(function () {
  /* Switch items feature for Portfolio */
  const filterList = $('button[filter').get();
  filterList.forEach(item => {
    switchItemDisplay(item.attributes.filter.value);
  });

  function switchItemDisplay(filter) {
    $(`button[filter=${filter}]`).click(function () {
      if ($(this).attr('val') === 'off') {
        if ($(this).attr('filter') !== 'all') {
          $('.button[filter]').attr('val', 'off');
          $(this).attr('val', 'on');
          $('.filter > div').hide();
          $(`.filter > div[filter=${filter}]`).show('slow');
        } else {
          $('.button[filter]').attr('val', 'off');
          $(this).attr('val', 'on');
          $(`.filter > div`).show('slow');
        }
      }
    });
  }

  /* Slider for Team section */
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  });

  /* Scroll to menu item */
  $('ul.menu a[href^="#"').click(function () {
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu a[href^="#"').css({ 'color': '#212121' });
    $(this).css({ 'color': '#004bee' });
    return false;
  });

  /* button functionality up */
  const buttonUp = $('#to-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      buttonUp.fadeIn();
    } else {
      buttonUp.fadeOut();
    }
  });
  buttonUp.click(function () {
    $('body, html').animate({
      scrollTop: 0
    });
  });

  /*drop-down menu*/
  let menuIcon = $('.menu-icon');
  menuIcon.click(function () {
    $('nav').slideToggle(500);
    $('ul.menu').css({
      'display': 'flex',
      'flex-direction': 'column'
    });

    if ($.trim(menuIcon.html()) == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });
});

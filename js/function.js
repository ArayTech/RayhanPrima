$(document).ready(function() {

  /* ============================================
  *  PARALLAX IMAGE
  *  ============================================ */
  $('.img-rayhantanahlot1').parallax("50%",0.1);


  /* ============================================
  *  SCROLL TO
  *  ============================================ */
  $('.nav-aboutme').click(function(){
    $('#aboutme').ScrollTo({duration : 1000});
  });
  $('.nav-portofolio').click(function(){
    $('#portofolio').ScrollTo({duration : 1000});
  });
  $('.nav-socmed').click(function(){
    $('#socmed').ScrollTo({duration : 1000});
  });
  $('.nav-contact').click(function(){
    $('#contact').ScrollTo({duration : 1000});
  });
  /* ============================================
  *  HEADER SLIDER
  *  ============================================ */

  var time = 10;
  var $progressBar,$bar,$elem,isPause,tick,percentTime;
  $('#header').owlCarousel({
    items : 1,
    itemsDesktop : 1,
    itemsTablet : 1,
    itemsMobile : 1,
    singleItem : true,
    paginationSpeed : 1000,
    slideSpeen : 1000,
    rewindSpeed : 500,
    navigation : true,
    navigationText : ['<span class="fa fa-chevron-left fa-2x"></span>','<span class="fa fa-chevron-right fa-2x"></span>'],
    pagination : true,
    transitionStyle : false,
    afterInit : progressBar,
    afterMove : moved,
    startDragging : pauseOnDragging,
    autoHeight : false,
  });
  function progressBar(elem){
    $elem = elem;
    buildProgressBar();
    start();
  }
  function buildProgressBar(){
    $progressBar = $('<div>',{
      id : 'progressbar'
    });
    $bar = $('<div>',{
      id : 'bar'
    });
    $progressBar.append($bar).appendTo($elem);
  }
  function start(){
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval,10);
  }
  function interval(){
    if(isPause === false){
      percentTime += 1 / time;
      $bar.css({
        width : percentTime+'%'
      });
    }
    if(percentTime >= 100){
      $elem.trigger('owl.next');
    }
  }
  function moved(){
    clearInterval(tick);
    start();
  }
  function pauseOnDragging(){
    isPause = true;
  };

  /* ============================================
  *  PORTOFOLIO SLIDER
  *  ============================================ */
  $('#portofolio-slider').owlCarousel({
    items : 4,
    itemsCustom : [[1024, 4],[768, 3],[480, 2],[320, 1],[240, 1]],
    autoPlay:true,
    navigation:true,
    navigationText : ['<span class="fa fa-chevron-left"></span>','<span class="fa fa-chevron-right"></span>'],
  });

  /* ============================================
  *  SOCIAL MEDIA
  *  ============================================ */
  $('.socmed-icon i').click(function(){
    var socmedrel = $(this).attr('rel');
    var socmedtitle = $(this).attr('title');
    var socmedlink = $(this).attr('alt');
    $('.socmed-link h3').remove();
    $('.socmed-link a').remove();
    $('.socmed-link').append('<h3>'+socmedrel+'</h3><a href="'+socmedlink+'" target="_blank">'+socmedtitle+'</a>');
  });

});

  /* ============================================
  *  WOW JS
  *  ============================================ */
  wow = new WOW({
    boxClass : 'wow',
    animateClass : 'animated',
    offset : 0,
    mobile : true,
    live : true,
  })
  wow.init();

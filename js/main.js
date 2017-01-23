$(function() {
	// align description block in slider
	var slideDescription = $('.slide__item__description').height();
	$('.slide__item__description').css('marginTop', -slideDescription / 2);

	// align description block in suggestions 
	var suggestionsDescription = $('.b-full__description').height();
	$('.b-full__description').css('marginTop', -suggestionsDescription / 2);  

	// selectWrapper('select');
  $('.custom-select').styler({
    selectSmartPositioning: false,
    selectPlaceholder: true
  });


  // MAIN OWL SLIDER 

  var owl = $("#b-owl__carousel");
 
  owl.owlCarousel({
    items : 4, 
    itemsDesktop : [1000,4], 
    itemsDesktopSmall : [900,2], 
    itemsTablet: [600,2], 
    itemsMobile : false 
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
});


// INNER OWL SLIDERS

// 1 item
var owlInner = $('.owl-slider .b-owl__carousel');

owlInner.owlCarousel({
  items : 1, 
  itemsDesktop : [1000,1], 
  itemsDesktopSmall : [900,1], 
  itemsTablet: [600,2], 
  itemsMobile : false 
});

$('.owl-slider .next').click(function(){
  $this = $(this).parents('.owl-slider').children('.b-owl__carousel');
  $this.trigger('owl.next');
});
  
$(".owl-slider .prev").click(function(){
  $this = $(this).parents('.owl-slider').children('.b-owl__carousel');
  $this.trigger('owl.prev');
});

// 2 items

var owlInner__2items = $('.owl-slider__2items .b-owl__carousel');

owlInner__2items.owlCarousel({
  items : 2, 
  itemsDesktop : [1000,1], 
  itemsDesktopSmall : [900,1], 
  itemsTablet: [600,2], 
  itemsMobile : false 
});

$('.owl-slider__2items .next').click(function(){
  $this = $(this).parents('.owl-slider__2items').children('.b-owl__carousel');
  $this.trigger('owl.next');
});
  
$(".owl-slider__2items .prev").click(function(){
  $this = $(this).parents('.owl-slider__2items').children('.b-owl__carousel');
  $this.trigger('owl.prev');
});


// SLIDER

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3300,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


// ASIDE

$('.b-aside__list a').click(function(event) {
  event.preventDefault();

  $('.b-accessories__tiles .b-tiles__style').css('display','none');

  var anchor = $(this).attr('href');

  $('.b-aside__list li').removeClass('b-list__active');

  $(this).parent().addClass('b-list__active');
  $(anchor + '').css('display','block');
  $(anchor + '').find('div').css('display','block');

});


// POPUP 

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


$('.b-work__link').click(function(event) {
  event.preventDefault();

  var anchor = $(this).attr('href');

  $('.b-popup').css('display', 'block');
  $('.b-popup__description div').css('display','none');

  $(anchor + '').css('display', 'block');

  disableScroll();

  // align popup description 
  var popupDescription = $('.b-popup__description').height();
  $('.b-popup__description').css('marginTop', -popupDescription / 2);
});


$('.clear').click(function(e){
  if ($('.b-popup').css('display','block')) {

    $('.b-popup').css('display','none');
    $('.b-popup__description div');

    enableScroll();
  }
});



// CALCULATOR OF WINDOWS

// COUNTER
var i;

$('.plus').click(function(event) {
  event.preventDefault();

  i = $(this).parent().find('.input-value').val();
  $(this).parent().find('.input-value').attr('value', ++i);
});

$('.minus').click(function(event) {
  event.preventDefault();

  i = $(this).parent().find('.input-value').val();

  if (i > 0 && i != -1) {
    $(this).parent().find('.input-value').attr('value', --i);
  }
});


// ADD FIELDS ON CALCULATOR

function addFieldWindowsill(item) {
  var fieldLength = $('#b-calc__sill .b-default__add-field').length;

  if (fieldLength <= 1) {
    $('<div class="b-default__add-field">'+ 
      '<div class="b-sill__style">'+
        '<select id="sill-style" name="sill-style" class="custom-select">'+
          '<option value="ПВХ (белый)">ПВХ (белый)</option>'+
          '<option value="ПВХ (moeller)">ПВХ (moeller)</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-width">'+
        '<label for="b-level-3__window-width">Ширина</label>'+
        '<select id="b-level-3__window-width" name="b-level-3__window-width" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="150">150</option>'+
          '<option value="200">200</option>'+
          '<option value="250">250</option>'+
          '<option value="300">300</option>'+
          '<option value="350">350</option>'+
          '<option value="400">400</option>'+
          '<option value="450">450</option>'+
          '<option value="500">500</option>'+
          '<option value="550">550</option>'+
          '<option value="600">600</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-sill__height">'+
        '<label for="b-level-3__window-height">Длина</label>'+
        '<select id="b-level-3__window-height" name="b-level-3__window-height" class="custom-select">'+
          '<option value="0">0</option>'+
          '<option value="3000">3000</option>'+
          '<option value="3500">3500</option>'+
        '</select>'+
      '</div>'+
      '<a href="" class="sill__remove"></a>'+
      '</div>')
    .fadeIn('slow')
    .prependTo(item);

    if (fieldLength == 1) {
      $('#b-calc__sill #add-field__sill').css('display', 'none');
    }
  }

  $('.custom-select').styler({
    selectSmartPositioning: false 
  });

  $('.sill__remove').click(function(event) {
    event.preventDefault();

    $('#b-calc__sill #add-field__sill').css('display', 'inline-block');
    $(this).parent('.b-default__add-field').remove();
  });

  var widthVal = $('#b-field__width').val();
  if (widthVal >= 0) {
    var num = parseFloat(widthVal);

    if (isNaN(num)) {
      $('#b-level-3__window-height-styler .jq-selectbox__select-text').text(0);
      $('#b-level-3__window-height option:first').text(0);
      $('#b-level-3__window-height option:first').val(0);
    } else {
      $('#b-level-3__window-height-styler .jq-selectbox__select-text').text(num + 100);
      $('#b-level-3__window-height option:first').text(num + 100);
      $('#b-level-3__window-height option:first').val(num + 100);
    }

    $('#b-field__width').on('input', function() {
      var widthVal = $(this).val();
      var $heightVal = $('#b-level-3__window-height-styler .jq-selectbox__select-text').text();
      var num = parseFloat(widthVal);

      console.log(num);
      $('#b-level-3__window-height-styler .jq-selectbox__select-text').text(num + 100);
      $('#b-level-3__window-height option:first').text(num + 100);
    });
  }

};

function addFieldBalconySill(item) {
  var fieldLength = $('#b-calc__balconySill .b-default__add-field').length;

  if (fieldLength <= 1) {
    $('<div class="b-default__add-field">'+ 
      '<div class="b-sill__style">'+
        '<select id="sill-style" name="sill-style" class="custom-select">'+
          '<option value="ПВХ (белый)">ПВХ (белый)</option>'+
          '<option value="ПВХ (moeller)">ПВХ (moeller)</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-width">'+
        '<label for="b-level-3__balcony-width">Ширина</label>'+
        '<select id="b-level-3__balcony-width" name="b-level-3__balcony-width" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="150">150</option>'+
          '<option value="200">200</option>'+
          '<option value="250">250</option>'+
          '<option value="300">300</option>'+
          '<option value="350">350</option>'+
          '<option value="400">400</option>'+
          '<option value="450">450</option>'+
          '<option value="500">500</option>'+
          '<option value="550">550</option>'+
          '<option value="600">600</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-sill__height">'+
        '<label for="b-level-3__balcony-height">Длина</label>'+
        '<select id="b-level-3__balcony-height" name="b-level-3__balcony-height" class="custom-select">'+
          '<option value="0">0</option>'+
          '<option value="3000">3000</option>'+
          '<option value="3500">3500</option>'+
        '</select>'+
      '</div>'+
      '<a href="" class="sill__remove"></a>'+
      '</div>')
    .fadeIn('slow')
    .prependTo(item);

    if (fieldLength == 1) {
      $('#b-calc__balconySill #add-field__balconySill').css('display', 'none');
    }
  }

  $('.custom-select').styler({
    selectSmartPositioning: false 
  });

  $('.sill__remove').click(function(event) {
    event.preventDefault();

    $('#b-calc__balconySill #add-field__balconySill').css('display', 'inline-block');
    $(this).parent('.b-default__add-field').remove();
  });

  var widthVal = $('#b-field__balcony-width').val();
  if (widthVal >= 0) {
    var num = parseFloat(widthVal);

    if (isNaN(num)) {
      $('#b-level-3__balcony-height-styler .jq-selectbox__select-text').text(0);
      $('#b-level-3__balcony-height option:first').text(0);
      $('#b-level-3__balcony-height option:first').val(0);
    } else {
      $('#b-level-3__balcony-height-styler .jq-selectbox__select-text').text(num + 100);
      $('#b-level-3__balcony-height option:first').text(num + 100);
      $('#b-level-3__balcony-height option:first').val(num + 100);
    }

    $('#b-field__balcony-width').on('input', function() {
      console.log('test');
      var widthVal = $(this).val();
      var $heightVal = $('#b-level-3__balcony-height-styler .jq-selectbox__select-text').text();
      var num = parseFloat(widthVal);

      console.log(num);
      $('#b-level-3__balcony-height-styler .jq-selectbox__select-text').text(num + 100);
      $('#b-level-3__balcony-height option:first').text(num + 100);
    });
  }

};


function addField(item) {
  var fieldLength = $('#b-calc__tide .b-default__add-field').length;

  if (fieldLength <= 0) {
    $('<div class="b-default__add-field">'+ 
      '<div class="b-sill__style">'+
        '<select id="sill-style" name="sill-style" class="custom-select">'+
          '<option value="Металл (белый)">Металл (белый)</option>'+
          '<option value="Металл (другой)">Металл (другой)</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-width">'+
        '<label for="b-level-3__window-width-sill">Ширина</label>'+
        '<select id="b-level-3__window-width-sill" name="b-level-3__window-width-sill" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="150">150</option>'+
          '<option value="200">200</option>'+
          '<option value="250">250</option>'+
          '<option value="300">300</option>'+
          '<option value="350">350</option>'+
          '<option value="400">400</option>'+
          '<option value="450">450</option>'+
          '<option value="500">500</option>'+
          '<option value="550">550</option>'+
          '<option value="600">600</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-sill__height">'+
        '<label for="b-level-3__window-height-sill">Длина</label>'+
        '<select id="b-level-3__window-height-sill" name="b-level-3__window-height-sill" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="3000">3000</option>'+
          '<option value="3500">3500</option>'+
        '</select>'+
      '</div>'+
      '<a href="" class="sill__remove"></a>'+
      '</div>')
    .fadeIn('slow')
    .prependTo(item);

    if (fieldLength == 0) {
      $('#b-calc__tide #add-field__tide').css('display', 'none');
    }
  } 

  $('.custom-select').styler({
    selectSmartPositioning: false 
  });

  $('.sill__remove').click(function(event) {
    event.preventDefault();

    $('#b-calc__tide #add-field__tide').css('display', 'inline-block');
    $(this).parent('.b-default__add-field').remove();
  });

  var widthVal = $('#b-field__width').val();
  if (widthVal >= 0) {
    var num = parseFloat(widthVal);

    if (isNaN(num)) {
      $('#b-level-3__window-height-sill-styler .jq-selectbox__select-text').text(0);
      $('#b-level-3__window-height-sill option:first').text(0);
      $('#b-level-3__window-height-sill option:first').val(0);
      console.log('test')
    } else {
      $('#b-level-3__window-height-sill-styler .jq-selectbox__select-text').text(num);
      $('#b-level-3__window-height-sill option:first').text(num);
      $('#b-level-3__window-height-sill option:first').val(num);
    }

    $('#b-field__width').on('input', function() {
      var widthVal = $(this).val();
      var $heightVal = $('#b-level-3__window-height-styler .jq-selectbox__select-text').text();
      var num = parseFloat(widthVal);

      console.log(num);
      $('#b-level-3__window-height-sill-styler .jq-selectbox__select-text').text(num);
      $('#b-level-3__window-height-sill option:first').text(num);
      $('#b-level-3__window-height-sill option:first').val(num);
    });
  }

};

function addFieldBalcony(item) {
  var fieldLength = $('#b-calc__balconyTide .b-default__add-field').length;
  console.log('fieldLength');

  if (fieldLength <= 0) {
    $('<div class="b-default__add-field">'+ 
      '<div class="b-sill__style">'+
        '<select id="sill-style" name="sill-style" class="custom-select">'+
          '<option value="Металл (белый)">Металл (белый)</option>'+
          '<option value="Металл (другой)">Металл (другой)</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-width">'+
        '<label for="b-level-3__balcony-width-sill">Ширина</label>'+
        '<select id="b-level-3__balcony-width-sill" name="b-level-3__balcony-width-sill" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="150">150</option>'+
          '<option value="200">200</option>'+
          '<option value="250">250</option>'+
          '<option value="300">300</option>'+
          '<option value="350">350</option>'+
          '<option value="400">400</option>'+
          '<option value="450">450</option>'+
          '<option value="500">500</option>'+
          '<option value="550">550</option>'+
          '<option value="600">600</option>'+
        '</select>'+
      '</div>'+
      '<div class="b-sill__height">'+
        '<label for="b-level-3__balcony-height-sill">Длина</label>'+
        '<select id="b-level-3__balcony-height-sill" name="b-level-3__balcony-height-sill" class="custom-select">'+
          '<option value="100">100</option>'+
          '<option value="3000">3000</option>'+
          '<option value="3500">3500</option>'+
        '</select>'+
      '</div>'+
      '<a href="" class="sill__remove"></a>'+
      '</div>')
    .fadeIn('slow')
    .prependTo(item);

    if (fieldLength == 0) {
      $('#b-calc__balconyTide #add-field__balconyTide').css('display', 'none');
    }
  } 

  $('.custom-select').styler({
    selectSmartPositioning: false 
  });

  $('.sill__remove').click(function(event) {
    event.preventDefault();

    $('#b-calc__balconyTide #add-field__balconyTide').css('display', 'inline-block');
    $(this).parent('.b-default__add-field').remove();
  });

  var widthVal = $('#b-field__balcony-width').val();
  if (widthVal >= 0) {
    var num = parseFloat(widthVal);
    console.log(num);

    if (isNaN(num)) {
      $('#b-level-3__balcony-height-sill-styler .jq-selectbox__select-text').text(0);
      $('#b-level-3__balcony-height-sill option:first').text(0);
      $('#b-level-3__balcony-height-sill option:first').val(0);
      console.log('test')
    } else {
      $('#b-level-3__balcony-height-sill-styler .jq-selectbox__select-text').text(num);
      $('#b-level-3__balcony-height-sill option:first').text(num);
      $('#b-level-3__balcony-height-sill option:first').val(num);
    }

    $('#b-field__balcony-width').on('input', function() {
      var widthVal = $(this).val();
      var $heightVal = $('#b-level-3__balcony-height-styler .jq-selectbox__select-text').text();
      var num = parseFloat(widthVal);

      console.log(num);
      $('#b-level-3__balcony-height-sill-styler .jq-selectbox__select-text').text(num);
      $('#b-level-3__balcony-height-sill option:first').text(num);
      $('#b-level-3__balcony-height-sill option:first').val(num);
    });
  }

};


$('#add-field__sill').click(function(event) {
  event.preventDefault();

  addFieldWindowsill('#b-calc__sill');
});

$('#add-field__balconySill').click(function(event) {
  event.preventDefault();

  addFieldBalconySill('#b-calc__balconySill');
});


$('#add-field__tide').click(function(event) {
  event.preventDefault();

  addField('#b-calc__tide');
});

$('#add-field__balconyTide').click(function(event) {
  event.preventDefault();

  addFieldBalcony('#b-calc__balconyTide');
});


$(function(){
    $("input[name='services'").change(function(){
        var input = $(this).parent().next().find('input[type="text"]');
        $('input[name="distance"]').attr('readonly', true);
        input.removeAttr('readonly');
    });
});

// SWITCH WINDOWS

var $window1 = $('.b-window-box__level-1');
var $window2 = $('.b-window-box__level-2');
var $window3 = $('.b-window-box__level-3');

var $balcony1 = $('.b-balcony-box__level-1');
var $balcony2 = $('.b-balcony-box__level-2');
var $balcony3 = $('.b-balcony-box__level-3');
var $balcony4 = $('.b-balcony-box__level-4');
var $balcony5 = $('.b-balcony-box__level-5');
var $balcony6 = $('.b-balcony-box__level-6');
var $balcony7 = $('.b-balcony-box__level-7');

// $(function() {
//   if ($window1.hasClass('show')) {
//     $('#window2 input','#window3 input').attr('checked', false);
//     $('#window1 input').attr('checked', true);
//   }
// });

function removeClasses() {
  $window1.removeClass('show');
  $window1.removeClass('hide');

  $window2.removeClass('show');
  $window2.removeClass('hide');

  $window3.removeClass('show');
  $window3.removeClass('hide');
}

$('#window1').click(function() {
  removeClasses();
  $window1.addClass('show');
});

$('#window2').click(function(){
  removeClasses();
  $window2.addClass('show');
});

$('#window3').click(function(){
  removeClasses();
  $window3.addClass('show');
});

function removeClassesForBalcony() {
  $balcony1.removeClass('show');
  $balcony1.removeClass('hide');

  $balcony2.removeClass('show');
  $balcony2.removeClass('hide');

  $balcony3.removeClass('show');
  $balcony3.removeClass('hide');

  $balcony4.removeClass('show');
  $balcony4.removeClass('hide');

  $balcony5.removeClass('show');
  $balcony5.removeClass('hide');

  $balcony6.removeClass('show');
  $balcony6.removeClass('hide');

  $balcony7.removeClass('show');
  $balcony7.removeClass('hide');
}

$('#balcony1').click(function() {
  removeClassesForBalcony();
  $balcony1.addClass('show');
});

$('#balcony2').click(function(){
  removeClassesForBalcony();
  $balcony2.addClass('show');
});

$('#balcony3').click(function(){
  removeClassesForBalcony();
  $balcony3.addClass('show');
});

$('#balcony4').click(function() {
  removeClassesForBalcony();
  $balcony4.addClass('show');
});

$('#balcony5').click(function(){
  removeClassesForBalcony();
  $balcony5.addClass('show');
});

$('#balcony6').click(function(){
  removeClassesForBalcony();
  $balcony6.addClass('show');
});

$('#balcony7').click(function(){
  removeClassesForBalcony();
  $balcony7.addClass('show');
});

// SWITCH WINDOW ITEM

setTimeout(function(){
  // left
  $('#formWindows .jq-selectbox__dropdown .left__1').click(function() {
    $('.b-window__left').find('img').attr('src', 'img/calc/window1.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .left__2').click(function() {
    $('.b-window__left').find('img').attr('src', 'img/window3.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .left__3').click(function() {
    $('.b-window__left').find('img').attr('src', 'img/calc/window-center1.jpg')
  });

  // center 
  $('#formWindows .jq-selectbox__dropdown .center__1').click(function() {
    $('.b-window__center').find('img').attr('src', 'img/calc/window1.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .center__2').click(function() {
    $('.b-window__center').find('img').attr('src', 'img/window3.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .center__3').click(function() {
    $('.b-window__center').find('img').attr('src', 'img/calc/window-center1.jpg')
  });

  // right 
  $('#formWindows .jq-selectbox__dropdown .right__1').click(function() {
    $('.b-window__right').find('img').attr('src', 'img/calc/window1.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .right__2').click(function() {
    $('.b-window__right').find('img').attr('src', 'img/window3.jpg')
  });

  $('#formWindows .jq-selectbox__dropdown .right__3').click(function() {
    $('.b-window__right').find('img').attr('src', 'img/calc/window-center1.jpg')
  });
}, 500);

// SWITCH BALCONY ITEM

setTimeout(function(){
  // left
  $('#formBalconyGroup .jq-selectbox__dropdown .left__1').click(function() {
    $('.b-balcony__left').find('img').attr('src', 'img/calc/window1.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .left__2').click(function() {
    $('.b-balcony__left').find('img').attr('src', 'img/window3.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .left__3').click(function() {
    $('.b-balcony__left').find('img').attr('src', 'img/calc/window-center1.jpg')
  });

  // door

  $('#formBalconyGroup .jq-selectbox__dropdown .door__1').click(function() {
    $('.b-balcony__door-1').find('img').attr('src', 'img/calc/door1.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .door__2').click(function() {
    $('.b-balcony__door-1').find('img').attr('src', 'img/calc/door2.jpg')
  });

  // door2
  $('#formBalconyGroup .jq-selectbox__dropdown .door__1-2').click(function() {
    $('.b-balcony__door-2').find('img').attr('src', 'img/calc/door1.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .door__2-2').click(function() {
    $('.b-balcony__door-2').find('img').attr('src', 'img/calc/door2.jpg')
  });

  // right 
  $('#formBalconyGroup .jq-selectbox__dropdown .right__1').click(function() {
    $('.b-balcony__right').find('img').attr('src', 'img/calc/window1.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .right__2').click(function() {
    $('.b-balcony__right').find('img').attr('src', 'img/window3.jpg')
  });

  $('#formBalconyGroup .jq-selectbox__dropdown .right__3').click(function() {
    $('.b-balcony__right').find('img').attr('src', 'img/calc/window-center1.jpg')
  });
}, 500);

$('.clear-order').click(function(event) {
  event.preventDefault();
  $(this).parent().parent().parent().remove();
});

// FORM

$('#formWindows').on('submit', function(e){
  e.preventDefault();
  
  var $that = $(this),
  formData = $that.serializeArray();

  $.ajax({
    url: $that.attr('action'),
    type: $that.attr('method'),
    data: {form_data: formData},
    dataType: 'json',
    success: function(json){
      if(json){
        $that.replaceWith(json);
      }
    }
  });
});

$('#formBalconyGroup').on('submit', function(e){
  e.preventDefault();
  
  var $that = $(this),
  formData = $that.serializeArray();

  $.ajax({
    url: $that.attr('action'),
    type: $that.attr('method'),
    data: {form_data: formData},
    dataType: 'json',
    success: function(json){
      if(json){
        $that.replaceWith(json);
      }
    }
  });
});
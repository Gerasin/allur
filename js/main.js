function maxHeight() {
	if($(window).width() > 990) {
		var maxHeight = 0, 
		maxHeightItem = 0,
		itemName = $('.head-baner__item');
		itemName.css({'height' : 'auto'});
		itemName.each(function(){
			maxHeightItem = $(this).innerHeight();

			if(maxHeightItem > maxHeight) {
				maxHeight = maxHeightItem
				console.log(maxHeight);
			}
		});
		itemName.css({'height' : maxHeight})
	}
}

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100
  }
);
wow.init();
$(document).ready(function() {


	// карусель
	$('.brends-corusel').owlCarousel({
    	items:6,
	    margin:86,
	    loop:true,
	    lazyLoad:true,
	    autoHeight:false,
	    autoplay:false,
	    nav:true,
	    smartSpeed: 1000,
	    responsive:{
	    	0:{
	            items:2,
	            margin:30
	        },
	        767:{
	            items:3,
	            margin:30
	        },
	        990:{
	            items:4,
	            margin:86
	        },
	        1200:{
	            items:6
	        }
	    }
	});

	$('.gallery-corusel').owlCarousel({
    	items:3,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    smartSpeed: 1000,
	    nav:true
	});

	$(window).scroll(function(){
		var scrollBody = $(window).scrollTop();
		if(scrollBody > 900) {
			$('.btn-up').fadeIn();
		} else {
			$('.btn-up').fadeOut();
		};

		var topImg = scrollBody*0.5,
		topHeader = scrollBody*0.1;
		if(topImg >= 270) {
			topImg = 270
		}
		$('.head-baner__img-parallax').css({'top' : topImg});
		$('.head-baner__txt').css({'top' : topImg});

	});
	$('.btn-up').on('click', function () {
		$('html, body').animate({'scrollTop' : 0});
		return false;
	});

	$('a[href^="#"').on('click', function () {
		var el = $(this).attr('href');
		$('html, body').animate({scrollTop: $(el).offset().top}, 2000);
		return false;
	});


	owlMain = $('.head-baner__list');
	owlMain.owlCarousel({
    	items:1,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    nav:true,
	    responsive:{
	    	0:{
	            items:3,
	            loop:false,
	            mouseDrag: false,
	            touchDrag: false,
	            pullDrag: false
	        },
	        737:{
	            items:1,
	            loop:true,
	            mouseDrag: true,
	            touchDrag: true,
	            pullDrag: true
	        },
	        990:{
	            items:3,
	            loop:false,
	            mouseDrag: false,
	            touchDrag: false,
	            pullDrag: false
	        }
	    }
	});
	owlMain.on('resized.owl.carousel', function(event) {
		setTimeout(maxHeight, 300);
	});

	maxHeight();

	

	$('.working-atmosphere__list').owlCarousel({
    	items:2,
	    margin:0,
	    loop:true,
	    lazyLoad:true,
	    nav:true,
	    responsive:{
	    	0:{
	            items:1
	        },
	        700:{
	            items:2
	        },
	        994:{
	            items:4,
	            loop:false,
	            mouseDrag: false,
	            touchDrag: false,
	            pullDrag: false
	        }
	    }
	});









	// мобильное меню
	$('.burger').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.head__menu').fadeOut(300);
			$(this).removeClass('active');
		} else {
			$('.head__menu').fadeIn(300);
			$(this).addClass('active');
		};
		return false;
	});

	

	$(".fancybox").fancybox({
		openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
	});


	

	// Валидация
	if($('.valid-phone').length) {
		$('.valid-phone').inputmask("999999999999");
	};
	$('.valid-btn').on('click', function () {
		$('.input-wrap__erro').remove();
		$('.inp-error').removeClass('inp-error');
		var way = $(this).parents('form');
		var valIndex = 0;
		var errorTxt;
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		way.find('input').removeClass('inp-error');
		way.find('.error-txt').fadeOut();
		way.find('.valid-txt').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			}
		});
		way.find('.valid-mail').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 2) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).parent().addClass('inp-error');
				errorTxt = $(this).attr('date-error');
				$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
				valIndex = 1
			} else {
				if(!pattern.test($(this).val())){
		            $(this).parent().find('.error-txt').fadeIn();
		            $(this).parent().addClass('inp-error');
		            errorTxt = $(this).attr('date-error');
					$(this).parent().prepend('<div class="input-wrap__erro">'+ errorTxt +'</div>');
		            valIndex = 1
		        }
	        }
		});
		way.find('.valid-phone').each(function() {
			var lengthVal = $(this).val().length;
			if(lengthVal < 7) {
				$(this).parent().find('.error-txt').fadeIn();
				$(this).addClass('inp-error');
				valIndex = 1
			}
		});   

		if(valIndex == 0) {
			$('#modal-popup').modal('show')
		};

		return false
	});


	// arhive
	$('.mask').inputmask("+999(99)999-99-99");  //static mask

	var minHeight = $('.sidebar_inner').height();
	$('.container').css({'min-height' : minHeight});


	$('.corusel').owlCarousel({
    	items:1,
	    margin:0,
	    lazyLoad:true,
	    autoHeight:false,
	    nav:true
	});


	// select style
	$('select').selectize({
	    create: true,
	    sortField: 'text'
	});

	// map max width
	mapWidth();

	// min height box info
	minHeightImg();

	// main corusel
	mainCorusel();



	// Center Modal
	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	  $(this).css('display', 'none');
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	// select style
	$('.select-st').selectize({
	    sortField: 'text'
	});


	// fancybox
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding     : 40
	});

	footerHeight();

	// Зависающий заголовок
	headerHeight();


	

})
function mapWidth() {
	if($('.map').length) {
		var mapLeft = -1 * $('.contacts').offset().left;
		$('.map').css({'margin-left' : mapLeft, 'margin-right' : mapLeft});
	}
}

function minHeightImg() {
	if($('.magazin-info').length) {
		var minHeightImg = $('.magazin-info').height() + 20;
		$('.page-img').css({'min-height' : minHeightImg});
	}
}

function mainCorusel() {
	if($('.main-coruselbig__list').length) {
		var mapLeft = -1 * $('.main-coruselbig').offset().left;
		$('.main-coruselbig__width').css({'margin-left' : mapLeft, 'margin-right' : mapLeft});
	}
}

function headerHeight() {

	if($('.section-header').length) {
		var hHeight = $('.section-header h2').height();
		$('.section-header').css({'min-height' : hHeight})

		var headeName = $('.section-header');
		var hStopTop = headeName.offset().top;
		var hStopBottom = $('.section-stop').offset().top - headeName.height() - 22;
		var hStop = hStopBottom - hStopTop;
		$(window).scroll(function(){
			var scrollBody = $(window).scrollTop();
			if(scrollBody > hStopTop) {
				headeName.addClass('active');
			} else {
				headeName.removeClass('active');
			};
			if(scrollBody > hStopBottom) {
				headeName.addClass('stop');
				headeName.find('h2').css({'top' : hStop})
			} else {
				headeName.removeClass('stop');
				
				headeName.find('h2').css({'top' : 0}) 
			};
		})
	}
}



function footerHeight() {
	$('.footer-padding').css({'height' : $('.footer').height() + 50});
}
$(window).load(function() {

	footerHeight();
	headerHeight();

});

$(window).resize(function() {

	footerHeight();
	headerHeight();
	mapWidth();
	minHeightImg();
	mainCorusel();

});

//  REMOVE
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; text-align: left; border: solid 1px #000; width: 200px; font-size: 13px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20; text-decoration:none" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol style="padding: 9px 0 7px 30px; margin: 0"> \
		<li style="margin: 0 0 5px;"><a href="index.html">Index</a></li> \
		<li style="margin: 0 0 5px;"><a href="page-404.html">404</a></li> \
	</ol> \
</div>');
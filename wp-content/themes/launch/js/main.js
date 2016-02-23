$(function() {
	// test mobile or desktop
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	// chatbox widget 
	(function chatboxWidget(){
		//open chatbox
		$('.chatbox-widget').click(function(e){
			var $chatbox = $('.chatbox');
			if (!$chatbox.hasClass('is-open') && $chatbox.hasClass('is-close')) {
				$chatbox.removeClass('is-close').addClass('is-open');
			};
		});
		//close chatbox
		$('.chatbox-chat__close-btn').click(function(e){
			var $chatbox = $('.chatbox');
			if (!$chatbox.hasClass('is-close') && $chatbox.hasClass('is-open')) {
				$chatbox.removeClass('is-open').addClass('is-close');
			};
		});
	})();
	// show more clients btn
	$('.our-clients__more__btn').click(function(e){
		e.preventDefault();
		$('.our-clients__grid.is-hidden').toggle('fast');
	});

	
	/*
		animate blocks
		used: animate.css & waypoint.js
		docs: https://daneden.github.io/animate.css/, http://imakewebthings.com/waypoints/

		for create animation need:
			- animateBlocks.run(param1, param2, param3, param4)
				- param1: css selector of elements
				- param2: type of aniamtion, one of this:https://daneden.github.io/animate.css/
				- param3: delay before start in ms
				- param4: true if need hide elem before animate (than will be shown)
	*/
	var AnimateBlocks = function(){
		this.run = function(elemParent, anim, delay, hide){
			var curElem = $(elemParent);
			if (!isMobile) {
				curElem.each(function(){
					if (hide) {
						if ($(this).hasClass('animated')) {
							$(this).css({opacity: 0});
						}else{
							$(this).find('.animated').css({opacity: 0})
						}
					};
					$(this).waypoint(function(){
						if (curElem.hasClass('animated')) {
							curElem.addClass(anim);
							curElem.css({opacity: 1});
							curElem.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							});
						} else {
							curElem.find('.animated').each(function(index){
								console.log('a');
								var $el = $(this);
								setTimeout(function() {
									$el.addClass(anim);
									$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$el.css({opacity: 1});
									});
								}, index*delay);
							});
						};
					},
					{
						offset: '80%',
						triggerOnce: true
					});
				});
			} else {
				curElem.each(function(){
					if ($(this).hasClass('animated')) {
						$(this).css({opacity: 1});
					} else {
						$(this).find('.animated').css({opacity: 1});;
					};
				});
			}
		}
	};
	var animateBlocks = new AnimateBlocks();

	animateBlocks.run('.how-it-works__list', 'bounceIn', 400, true);
	animateBlocks.run('.benefits__tabs__cnt', 'slideInLeft', 400);
	animateBlocks.run('.how-it-works__ipad__img', 'slideInLeft', 400);
	animateBlocks.run('.how-it-works__ipad__text', 'slideInRight', 400);
	animateBlocks.run('.our-clients', 'fadeIn', 100, true);
	animateBlocks.run('.supports__grid', 'fadeIn', 200, true);
	animateBlocks.run('.testimonials__tabs__nav', 'slideInUp', 100, true);
	animateBlocks.run('.testimonials__tabs__cnt .col-sm-3.animated', 'slideInLeft', 200, true);
	animateBlocks.run('.testimonials__tabs__cnt .pane_text.animated', 'slideInRight', 200, true);
	animateBlocks.run('#testimonials .section__title.animated', 'slideInRight', 200, true);

	/*
		count up numbers
		used: CountUp.js
		docs & examples: https://inorganik.github.io/countUp.js/
	*/
	if (!isMobile) {
		// animate numbers in "Why choose eKomi?" section
		$('.why-choose').waypoint(function(direction) {
			// compagnies num
			var wccn = new CountUp("whyChooseCompanyNum", 0, 14000, 0, 3, {
			  useEasing : true,
			  useGrouping : true,
			  separator : ',',
			  decimal : '.',
			  prefix : '',
			  suffix : ''
			});
			wccn.start();
			// customer reviews num
			var wccrn = new CountUp("whyChooseCustomerNum", 0, 40.2, 1, 3, {
			  useEasing : true,
			  separator : '.',
			  decimal : '.',
			  prefix : '',
			  suffix : ''
			});
			wccrn.start();
			// countries num
			var wccountn = new CountUp("whyChooseCountriesNum", 0, 26, 0, 4, {
			  useEasing : true,
			  prefix : '',
			  suffix : ''
			});
			wccountn.start();
			}, {
			offset: '25%' // position of scroll when begin anim
		});
		// animate numbers in "What are your cutomers saying?" block 
		$('.counter').waypoint(function(direction) {
			var ciFull = new CountUp("ci-full", 0, 40280166, 0, 20, {
			  useEasing : true,
			  useGrouping : true,
			  separator : '',
			  decimal : '.',
			  prefix : '',
			  suffix : ''
			});
			ciFull.start(function(){
				var val = 40280166;
				ciFull.update(val+1000);
				console.log('finish');
			});

			}, {
			offset: '50%'
		});
	};
	/*
		end count up numbers
	*/
		

	/*
		sliders
		used plugin: 'owl-carousel'
		link to docs: http://www.owlcarousel.owlgraphic.com/docs/started-welcome.html		
	*/
	// rewiews slider
	$('#reviews__list, #reviews__list-2').owlCarousel({
	  stagePadding: 25,
	  merge:true,
	  items:1,
	  loop:true,
	  margin:30,
	  nav:false,
	  dots:false,
	  autoplay:true,
	  autoplayTimeout:1000,
	  responsive : {
		  1600 : {
		    stagePadding : 50,
		    margin : 60,
		    items:3
		  },
		  980:{
		  	items:2
		  },
		  768:{
		  	items:2
		  }			   
		}
	});
	// slider in header
	// slider in header
    if($('#header__carousel > div').length > 1){
        $('#header__carousel').owlCarousel({
            items:1,
            margin:0,
            nav:true,
            navContainer:'.header__slider__nav',
            loop:false,
            mouseDrag:false
        });
    }else{

    }
	// eKomi integration  slider
	$('#integration__slider').owlCarousel({
    items:1,
    margin:0,
    loop:true,
    nav:true,
    dotsContainer: '.integration__slider__dots',
    navContainer:'.integration__slider__nav',
    mouseDrag:false,
    smartSpeed:1000
	});
	/*
		end sliders
	*/


	/*
		tabs activate
		more documentation: http://getbootstrap.com/javascript/#tabs
	*/
	// tabs in "How you benefit from eKomi"
	$('#benefits__tabs .nav a').hover(function (e) {
	  e.preventDefault();
	  $(this).tab('show')
	});
	// tabs How Ekomi Works
	$('.how-it-works__list a').hover(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  $('.how-it-works__list a').removeClass('active');
	  $(this).addClass('active');
	  $('.how-it-works__cnt').attr('data-tab', $(this).index()+1);
	});
	// testimonials tabs
	$('.testimonials__tabs__nav a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  $(this).parent().find('a').removeClass('active');
	  $(this).addClass('active');
	});
	/*
		end tabs
	*/
	
	// lazy load images for "eKomi solutions" parallax section
	if (!isMobile) {
		$('#solution_ipad-parallax').find('.lazy').each(function(){
			$(this).attr('src', $(this).data('src'));
		});
		$('#solution_ipad-parallax').find('.lazy').bind('load', function(){
			var s = skrollr.init();			
		});
	}




});
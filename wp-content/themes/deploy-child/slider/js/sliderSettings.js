$(function () {
    function setSameHeight() {
        var maxHeight = 0;

        $.each($('[class*="_box"]'), function () {
            if ( $(this).height() > maxHeight ) {
                maxHeight = $(this).height();
               }
        });

        $('[class*="_box"]').height(maxHeight);
    }

    function setSamePadding() {
        $.each( $('.css_lb_content'), function () {
            var $this = $(this),
                parent = $this.parent(),
                thisHeight = $this.height(),
                parentHeight = parent.height(),
                paddingTB = (parentHeight - thisHeight) / 2;

                console.log(parentHeight);
                console.log(thisHeight);

            parent.css({
                'boxSizing' : 'borderBox',
                'paddingTop' : paddingTB - 20 +'px', 
                'paddingBottom' : paddingTB +'px' 
            });    
        });
    }

    if ($(window).width() > 767) {
        setSameHeight();
        setSamePadding();
    };


});

$(document).ready(function(){
        $('.css_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            dots: false,
            infinite: true,
            asNavFor: '.css_slider_nav',
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false
                }
            }
        ]

        });
    });

    $('.css_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.css_slider',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.css_slider',
                    dots: false,
                    focusOnSelect: true,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.css_slider',
                    dots: false,
                    focusOnSelect: true,
                    infinite: true
                }
            }
        ]
    });
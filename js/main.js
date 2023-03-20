$(document).ready(function () {
    addClassOnScroll();
    scrollToBannerNext();

    $( ".email-popup" ).click(function() {
        $( ".email-block" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });

    $( ".call-popup" ).click(function() {
        $( ".call-block" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });

    $( ".form-close" ).click(function() {
        $( ".service-inquiry" ).fadeOut( "slow", function() {
            // Animation complete
        });
    });

    $('.form-redirect').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });


});
$(window).on('scroll', function(){
    addClassOnScroll();
});

// Add scrolled class on scroll
function addClassOnScroll(){
    if($(this).scrollTop() > 0) {
        $('.site-header').addClass('scrolled');
    } else {
        $('.site-header').removeClass('scrolled');
    }
}

// Scroll to banner next section
function scrollToBannerNext(){
    var nextSection = $('.banner-down-arrow-wrap').parents('.banner-sec').next();
    $('.banner-down-arrow-wrap').click(function(){
        var headerHeight = $('header.site-header').outerHeight();
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top - headerHeight
        }, 1000);
        return false;
    });
}
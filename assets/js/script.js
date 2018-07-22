// $(window).load(function() {




$(document).ready( function () {
    $('.welcome-txt h3').hide();
    $('.background_source').hide();  
    $('.welcome-txt h1').addClass("animated zoomInUp");
    // $('#home').addClass("animated rotateIn")
    setTimeout(() => {
        $('.welcome-txt h3').fadeIn(2000, function() {
            $('.social').removeClass('invisible').addClass("animated jello");
            $('.background_source').fadeIn(1000);
        });
    }, 1500);

    // hover animation
    $('.hover-bounce').hover(
        function(){ $(this).addClass('animated bounce') },
        function(){ $(this).removeClass('animated bounce') }
    );
    $('#home').hover(
        function(){ $(this).addClass('animated rotateIn') },
        function(){ $(this).removeClass('animated rotateIn') }
    );

    // view port checker slide animation
    $('.about-img-1').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'animated slideInRight',
        offset: 100,
        repeat: false
    });
    $('.about-img-2').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'animated slideInLeft',
        offset: 100,
        repeat: false
    });
    $('.ex').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'animated slideInRight',
        offset: 100,
        repeat: false
    });
    
    $('.portfolio-area').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'animated slideInRight',
        offset: 100,
        repeat: false
    });
    $('.contact-area').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'animated slideInLeft',
        offset: 100,
        repeat: false
    });
    
    // view port checker logo animation
    $('.html-img').viewportChecker({
        classToAdd: 'animated fadeInLeft',
        offset: 100,
        repeat: false
    });
    $('.js-img').viewportChecker({
        classToAdd: 'animated zoomInRight',
        offset: 100,
        repeat: false
    });
    $('.node-img').viewportChecker({
        classToAdd: 'animated rollIn',
        offset: 100,
        repeat: false
    });
    $('.java-img').viewportChecker({
        classToAdd: 'animated wobble',
        offset: 100,
        repeat: false
    });
    $('.react-img').viewportChecker({
        classToAdd: 'animated fadeInRight',
        offset: 100,
        repeat: false
    });
    
});

// $(window).load(function() {

$(document).ready( function () {
    $('.welcome-txt h3').hide();
    $('.background_source').hide();  
    $('.welcome-txt h1').addClass("animated zoomInUp");
    $('#home').addClass("animated rotateIn")
    setTimeout(() => {
        $('.welcome-txt h3').fadeIn(2000, function() {
            $('.welcome-txt h3').addClass("animated bounceIn");   
            $('.background_source').fadeIn(1000, function() {
                $('.social').removeClass('invisible').addClass("animated jello");
            });  
        });
    }, 1500);

    // it adds and remove the class without animation
    $('.hover-bounce').hover(
        function(){ $(this).addClass('animated bounce') },
        function(){ $(this).removeClass('animated bounce') }
    );

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
    })
});

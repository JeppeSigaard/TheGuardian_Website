$(function() {
    
    $windowHeightInt = $( window ).height();
    $windowHeightString = $( window ).height().toString();
    
    $('#wrapper').css('height', '300vh')
    
    $('#main_feature').css('height', 
        $windowHeightString);
    
    $('#main_feature #container').css('margin',
        ($windowHeightInt / 2 - 150).toString() + 'px auto');
    
    $('#main_feature #button_bar').fadeTo(2000, 0);
    $('#main_feature #button_bar').hover(function() {
        $(this).fadeTo(100, 1);
    }, function() {
        $(this).fadeTo(500, 0);
    });
    
    // TOP_BAR    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $('#main_feature').height()) {
            $('.top_bar').addClass('fixed');
        }
        else {
            $('.top_bar').removeClass('fixed');
        }
    });
    
});
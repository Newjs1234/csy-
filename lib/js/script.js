$(document).ready(function(){
    // technologien
    $('#touch-technologien').mouseover(function() {
        $('#touch-technologien-box').addClass("nav-link-hover");
    });
    $('#touch-technologien-box').mouseover(function() {
        $('#touch-technologien-box').addClass("nav-link-hover");
    });
    $('#touch-technologien').mouseout(function() {
        $('#touch-technologien-box').removeClass("nav-link-hover");
    });
    $('#touch-technologien-box').mouseout(function() {
        $('#touch-technologien-box').removeClass("nav-link-hover");
    });

    //dienstleistungen
    $('#touch-dienstleistungen').mouseover(function() {
        $('#touch-dienstleistungen-box').addClass("nav-link-hover");
    });
    $('#touch-dienstleistungen-box').mouseover(function() {
        $('#touch-dienstleistungen-box').addClass("nav-link-hover");
    });
    $('#touch-dienstleistungen').mouseout(function() {
        $('#touch-dienstleistungen-box').removeClass("nav-link-hover");
    });
    $('#touch-dienstleistungen-box').mouseout(function() {
        $('#touch-dienstleistungen-box').removeClass("nav-link-hover");
    });

    //unternehmen
    $('#touch-unternehmen').mouseover(function() {
        $('#touch-unternehmen-box').addClass("nav-link-hover");
    });
    $('#touch-unternehmen-box').mouseover(function() {
        $('#touch-unternehmen-box').addClass("nav-link-hover");
    });
    $('#touch-unternehmen').mouseout(function() {
        $('#touch-unternehmen-box').removeClass("nav-link-hover");
    });
    $('#touch-unternehmen-box').mouseout(function() {
        $('#touch-unternehmen-box').removeClass("nav-link-hover");
    });

    //karriere
    $('#touch-karriere').mouseover(function() {
        $('#touch-karriere-box').addClass("nav-link-hover");
    });
    $('#touch-karriere-box').mouseover(function() {
        $('#touch-karriere-box').addClass("nav-link-hover");
    });
    $('#touch-karriere').mouseout(function() {
        $('#touch-karriere-box').removeClass("nav-link-hover");
    });
    $('#touch-karriere-box').mouseout(function() {
        $('#touch-karriere-box').removeClass("nav-link-hover");
    });

// mouseover

    $('.nav-link-hover').mouseover(function() {
        $(this).css("background-color", "green");
    })

    $('.nav-link-hover').mouseout(function() {
        $(this).css("background-color", "white");
    })

    // mouseover blog
$(".background-img-cover-id").mouseover(function() {
    let parent = $(this).parent();
    let test = parent.children($(".background-img-cover"));
    $(test[1]).animate({top: '0px'});
})

$(".background-img-cover-id").mouseout(function() {
    let parent = $(this).parent();
    let test = parent.children();
    $(test[1]).animate({top: '80%'});
}) 

    // navbar
    $('#eins').on('click', function() {
        $('.nav-bar-box').addClass('test');
    });

    $('#zwei').on('click', function() {
        $('.nav-bar-box').removeClass('test');
    });



});


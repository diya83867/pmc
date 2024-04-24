$( document ).ready(function() {

    $(".carousel").carousel({
        interval: false,
        pause: true
    });

    $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
        this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
        this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
        window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements:"label, button, input, select, textarea, .noSwipe"
    } );

    $('.carousel .carousel-inner').on('dragstart', 'a', function () {
        return false;
    });  
    
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbarpcm');
    if (window.scrollY > 100) { 
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
});

var topButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

$(".back-to-top").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    }, "fast");
    return false;
});
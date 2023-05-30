document.addEventListener('DOMContentLoaded', function () {
    var prevScrollPos = $(window).scrollTop();

    $(window).scroll(function () {
        var currentScrollPos = $(window).scrollTop();

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up, show the navbar
            $('#navbar').removeClass('navbar-hidden');
        } else {
            // Scrolling down, hide the navbar
            $('#navbar').addClass('navbar-hidden');
        }

        prevScrollPos = currentScrollPos;
    });
})
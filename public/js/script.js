function changeNavColor(state) {
    if (state) {
        $('#navbar').removeClass('bg-white/0').addClass('bg-white');
    } else {
        $('#navbar').removeClass('bg-white').addClass('bg-white/0');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var prevScrollPos = $(window).scrollTop();
    var navbar = $('#navbar');
    var navbarHeight = navbar.outerHeight();
    var isNavVisible = true;

    $(window).scroll(function () {
        var currentScrollPos = $(this).scrollTop();

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            if (!isNavVisible) {
                navbar.removeClass('navbar-hidden');
                isNavVisible = true;
            }
        } else {
            // Scrolling down
            if (isNavVisible && currentScrollPos > navbarHeight) {
                navbar.addClass('navbar-hidden');
                isNavVisible = false;
            }
        }

        prevScrollPos = currentScrollPos;

        if (window.scrollY >= 10) {
            changeNavColor(true)
        } else {
            changeNavColor(false)
        }
    });


})
var menuState;

function changeNavColor(state) {
    if (state) {
        $('#navbar').removeClass('bg-white/0').addClass('bg-white');
    } else {
        $('#navbar').removeClass('bg-white').addClass('bg-white/0');
    }
}

function hideNav() {
    var prevScrollPos = $(window).scrollTop();
    var navbar = $('#navbar');
    var navbarHeight = navbar.outerHeight();
    var isNavVisible = true;

    $(window).on('scroll', function () {
        var currentScrollPos = $(this).scrollTop();

        if (!menuState) {
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
        }

        prevScrollPos = currentScrollPos;

        if (window.scrollY >= 10) {
            changeNavColor(true)
        } else {
            changeNavColor(false)
        }
    });
}

function mobileMenu() {
    var $menuBtn = $('#menu-btn');
    var $mobileMenu = $('#mobile-menu');
    var menuExpanded = $mobileMenu.attr('aria-hidden') === 'true';

    $menuBtn.on('click', function () {
        $mobileMenu.removeClass('translate-x-full').addClass('translate-y-0')

        $mobileMenu.attr('aria-hidden', !menuExpanded);
        $('body').addClass('overflow-hidden')
        menuState = true
    })

    $('#close-menu-btn').on('click', function () {
        $mobileMenu.removeClass('translate-y-0').addClass('translate-x-full')

        $mobileMenu.attr('aria-hidden', menuExpanded);
        $('body').removeClass('overflow-hidden')
        menuState = false
    })

    $mobileMenu.on('scroll', function (event) {
        event.stopPropagation();
    });
}

function toggleBtn(button) {
    var targetId = button.getAttribute('aria-controls');
    var toggleAttr = button.getAttribute('data-collapse-toggle');

    if (targetId && toggleAttr === 'true') {
        $('#' + targetId).removeClass('hidden').addClass('block');
        button.setAttribute('data-collapse-toggle', 'false');
        button.setAttribute('aria-expanded', 'true');
    } else if (targetId && toggleAttr === 'false') {
        $('#' + targetId).removeClass('block').addClass('hidden');
        button.setAttribute('data-collapse-toggle', 'true');
        button.setAttribute('aria-expanded', 'false');
    }
}

function hoverBtn(button) {
    var targetId = button.getAttribute('aria-controls');
    var toggleAttr = button.getAttribute('data-hover');
    var span = $(button).find('span:first')

    if (targetId && toggleAttr === 'true') {
        $('#' + targetId).removeClass('hide-dropdown').addClass('show-dropdown');
        button.setAttribute('data-hover', 'false');
        button.setAttribute('aria-expanded', 'true');
        span.removeClass('-z-10').addClass('z-10')
    }
}

function unhoverBtn(button) {
    var targetId = button.getAttribute('aria-controls');
    var toggleAttr = button.getAttribute('data-hover');
    var span = $(button).find('span:first')

    if (targetId && toggleAttr === 'false') {
        $('#' + targetId).removeClass('show-dropdown').addClass('hide-dropdown');
        button.setAttribute('data-hover', 'true');
        button.setAttribute('aria-expanded', 'false');
        span.removeClass('z-10').addClass('-z-10')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    hideNav()

    mobileMenu()

    $('[data-collapse-toggle]').on('click', function () {
        toggleBtn(this);
    });

    $('[data-hover]').on('mouseenter', function () {
        hoverBtn(this);
    });

    $('[data-hover]').on('mouseleave', function () {
        unhoverBtn(this);
    });
})
//scroll menu

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('nav');
    document.addEventListener('scroll', function () {
        var offset = pageYOffset;
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        if (width >= 1000) {
            if (offset > 100) {
                nav.classList.add('nav-scroll');
            } else {
                nav.classList.remove('nav-scroll');
            }
        }
    });
});

//hamburger menu

document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById("navmenu");
    var button = document.getElementById("dropdownbutton");
    button.addEventListener('click', function () {
        if (menu.className == "nav-menu") {
            menu.classList.add('nav-menu-mobile');
        } else {
            menu.classList.add('nav-menu-hide');
            setTimeout(function () {
                menu.classList.remove('nav-menu-mobile');
                menu.classList.remove('nav-menu-hide');
            }, 500);
        }
    });
});

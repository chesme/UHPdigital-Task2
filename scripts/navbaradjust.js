$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".navbar-color-swap").addClass("navbar-color-swaped");
            $(".nav-link-color-swap").addClass("nav-link-color-swaped");
            $(".nav-item-border-swap").addClass("nav-item-border-swaped");
        } else {
            $(".navbar-color-swap").removeClass("navbar-color-swaped");
            $(".nav-link-color-swap").removeClass("nav-link-color-swaped");
            $(".nav-item-border-swap").removeClass("nav-item-border-swaped");
        }
    });
});
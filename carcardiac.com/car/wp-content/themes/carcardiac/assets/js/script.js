$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )

    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    var $acpanel = $(".accordion > .accordion-content"),
        $acsnav = $(".accordion > .accordion-title > a");

    $acpanel.hide().first().slideDown("easeOutExpo");
    $acsnav.first().addClass("active");
    $acsnav.on('click', function() {
        var $this = $(this).parent().next(".accordion-content");
        $acsnav.removeClass("active");
        $(this).addClass("active");
        $acpanel.not($this).slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");
        return false;
    });

});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('.menu').addClass('desktopTopFixed').fadeIn(200);

    } else {
        $('.menu').removeClass('desktopTopFixed').fadeIn(200);
    }
});
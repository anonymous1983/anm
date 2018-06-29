(function ($) {

    $('.circle').each(function () {
        var $circle = $(this);
        $circle.circleProgress().on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round($circle.data('number') * progress));
        })
    });


})(jQuery);
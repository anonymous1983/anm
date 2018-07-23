(function ($) {


    $('[data-toggle="tooltip"]').tooltip();

    $('.circle').each(function () {
        var $circle = $(this);
        $circle.circleProgress().on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round($circle.data('number') * progress));
        })
    });


        $('#numberDematSimple').animateNumber(
            {number: 100},
            1000
            );
        $('#numberMarchePublicFranceAnnee').animateNumber(
            {number: 200000},
            1000,
            function() {
                $('#numberMarchePublicFranceAnnee').text('200 000')
            }

            );




})(jQuery);
(function ($) {


    $('[data-toggle="tooltip"]').tooltip();

    $('.circle').each(function () {
        var $circle = $(this);
        $circle.circleProgress().on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html($.number( Math.round($circle.data('number') * progress), 0, ',', ' ' ));
        }).on('circle-animation-end', function () {
            $(this).find('strong').html($.number( $circle.data('number'), 0, ',', ' ' ));
        })
    });


    $('#numberDematSimple').animateNumber(
        {number: 100},
        1000
    );
    $('#numberMarchePublicFranceAnnee').animateNumber(
        {number: 200000},
        1000,
        function () {
            $('#numberMarchePublicFranceAnnee').text('200 000')
        }
    );


    $('.animate-number').each(function () {
        var $number = $(this);
        $number.animateNumber(
            {number: $number.data('number')},
            1000,
            function () {
                $number.text($.number( $number.data('number'), 0, ',', ' ' ));
            }
        );
    });

    $(document).ready(function () {
        $('.carousel-logos').carousel('cycle')
    });


})(jQuery);
$(document).ready(function () {

    $('#menu').click(function (event) {
        $('.arrow').slideToggle('slow');
        $('#gridbox').slideToggle('slow');
        event.stopPropagation();
    });

    $('body').click(function () {
        $('.arrow').hide();
        $('#gridbox').hide();
    });
});
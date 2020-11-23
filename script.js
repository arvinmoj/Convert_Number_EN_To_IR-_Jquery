$(document).ready(function () {
    $("#convertEA").click(function () {
        var number = $("#enternumberEA").val();
        var numbers = $.latin2Arabic.toArabic(number);
        $("#convertnumberEA:text").val(numbers);
    });
});

$(document).ready(function () {
    $("#convertAE").click(function () {

        var number = $("#enternumberAE").val();
        var numbers = $.latin2Arabic.toLatin(number);
        $("#convertnumberAE:text").val(numbers);
    });
});
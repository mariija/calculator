$(document).ready(function () {

    $("#formId").submit(function (e) {
        return false;
    });

    $("#addition").click(function () {
        $("#result").html(
            parseInt($("#num1").val()) + parseInt($("#num2").val())
        );
    });

    $("#subtraction").click(function () {
        $("#result").html(
            parseInt($("#num1").val()) - parseInt($("#num2").val())
        );
    });

    $("#multiplication").click(function () {
        $("#result").html(
            parseInt($("#num1").val()) * parseInt($("#num2").val())
        );
    });

    $("#division").click(function () {
        $("#result").html(
            parseInt($("#num1").val()) / parseInt($("#num2").val())
        );
    });

});
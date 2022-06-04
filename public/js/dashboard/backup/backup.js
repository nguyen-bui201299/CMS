function keyUp() {
    $(":input").keyup(function () {
        if ($(this).val()) {
        $(".bunch_of_button").fadeIn(200);
        }
        else {
        $(".bunch_of_button").fadeOut(200);
        }
        console.log(this)
    });
    $(".bunch_of_button").click(function () {
        $(":input").val('');
        $(this).hide();
    });
}

$(document).ready(function(){
    $('.insights .access').click(function(){
        var x = $(".demo").css('display');
        if(x=='none'){
           $(".demo").fadeIn();
        }else{
           $(".demo").fadeOut();
        }
    })

    $('.addControl').click(function(){
        // $('.modal-add-users').toggle('slow')
        alert('hello')
    })

})
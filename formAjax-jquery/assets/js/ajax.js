function loadAjax(){
    $.ajax({
        url:    "server.php",
        type:   "post",
        dataType: "text",
        data:{
            name: $('input[name=username]').val(),
            password: $('input[name=password]').val(),
            email: $('input[name=email]').val(),
            birthday: $('input[name=ngaysinh]').val(),
        },
        success: function (result){
            $('b').eq(0).text(result).css({'color':'lightgreen'});
        }
    })
}
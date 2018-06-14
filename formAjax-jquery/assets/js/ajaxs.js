function loadAjax(){
    $.ajax({
        url:    "server.php",
        type:   "get",
        dataType: "xml",
        data:{
            username: $('input[name=username]').val(),
            password: $('input[name=password]').val(),
            email: $('input[name=email]').val(),
            ngaysinh: $('input[name=ngaysinh]').val(),
        },
        success: function (result){
            $('.showTime').eq(0).text(result).css({'color':'lightgreen'});
            console.log(result)
        }
    })
}
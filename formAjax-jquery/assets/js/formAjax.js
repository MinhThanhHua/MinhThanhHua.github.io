$(document).ready(function(){
    $('#nhapNgayThang').click(function(){
        showTable();
    })
})
function checkValidateForm() {
    let name = $('input[name=username]').val();
    let password = $('input[name=password]').val();
    if (name.length < 8){
        $('b').eq(0).text('Username length min 8 letter!');
        return false;
    }
    $('b').eq(0).text('Success ^.^').css({'color':'lightgreen'});;
    if (password.length < 8){
        $('b').eq(1).text('Password length min 8 letter!');
        return false;
    }
    $('b').eq(1).text('Success ^.^').css({'color':'lightgreen'});;
    if (1){
        let text = validateEmail();
        if (text.length > 0){
            $('b').eq(2).text(text).css({'color':'red'});;
            return false;
        }  
    }
    $('b').eq(2).text('Success ^.^').css({'color':'lightgreen'});
    return false;
}
function validateEmail() {
    let email = $('input[name=email]').val();
    let i =0;
    let emailLength = email.length;
    let viTriA = 0;
    let countA = 0;
    let viTriCham = 0;
    let countCham = 0;
    if (emailLength < 8 || emailLength > 100)
    {
        return 'Độ dài email từ 8 đến 100';
    }
    for (i = 0; i < emailLength; i++){
        if (email[i] == '@'){
            viTriA = i; 
            countA++;
        }
        if (email[i] =='.'){
            viTriCham = i;
            countCham++;
        }
    }
    if (countA > 1){
        return 'Chỉ được 1 dấu @';
    }
    if (countCham > 1){
        return 'Chỉ được 1 dấu .'
    }
    if (countCham == 0 || countA == 0){
        return 'Thiếu ký tự @ hoặc .';
    }
    if (viTriA > viTriCham){
        return 'Phải đặt dấu chấm sau @';
    }
    if (viTriA < 3){
        return "Tên email phải dài hơn 3";
    }
    if (viTriCham - viTriA < 3){
        return "Tên miền email phải dài hơn 3";
    }
    if (emailLength - viTriCham <3){
        return "Sau dấu chấm ít nhất 3 ký tự";
    }
    return 0;
}
$(document).ready(function(){
    $('#nhapNgayThang').click(function(){
        showTable();
    })
    $('#nhapNgayThang').keydown(function(){
        $('.table').slideUp(500);
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
            $('b').eq(2).text(text).css({'color':'red'});
            return false;
        }  
    }
    $('b').eq(2).text('Success ^.^').css({'color':'lightgreen'});
    if (checkBirthday()){
        $('b').eq(3).text("Wrong birthday").css({'color':'red'});
        return false;
    }
    $('b').eq(3).text('Success ^.^').css({'color':'lightgreen'});
    if (1){
        loadAjax();
        return false;
    }
    return true;
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

//check ngay sinh
function checkBirthday() {
    let birthday = $('input[name=ngaysinh]').val();
    if (birthday.length < 8){
        return 1;
    } else{
        let arrBirthday = birthday.split(/\/|\-/);
        if (arrBirthday.length != 3){
            return 1;
        }
        let date = new Date();
        let timeNow = date.getTime();
        let month = arrBirthday[1];
        if (isNaN(arrBirthday[2]) || isNaN(arrBirthday[1]) || isNaN(arrBirthday[0])){
            return 1;
        }
        if (arrBirthday[2] < 1900 || arrBirthday[2] > 2048){
            return 1;
        }
        if (arrBirthday[1] < 1 || arrBirthday[1] >12){
            return 1;
        }
        if (month == 4 || month == 6 || month == 9 || month == 11){
            if (arrBirthday[0] > 30){
                return 1;
            }
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || 
            month == 10 || month == 12){
            if (arrBirthday[0] > 31){
                return 1;
            } 
        }
        if (month == 2){
            if (checkNamNhuan(arrBirthday[2])){
                if (arrBirthday[0]> 29){
                    return 1;
                }
            } else{
                if (arrBirthday[0]> 28){
                    return 1;
                }
            }
        }
        let birthdayInput = new Date(arrBirthday[2], arrBirthday[1]-1, arrBirthday[0]);
        let timeBirthday = birthdayInput.getTime();
        if(timeNow < timeBirthday){
            return 1;
        }
    }
    return 0;
}
function checkNamNhuan(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && (year /100) % 4 == 0)) {
        return true;
    }
    return false;
}
// /\@|\./
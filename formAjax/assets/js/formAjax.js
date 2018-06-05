
// check validate form
function checkValidateForm() {
	var divInput = document.getElementsByClassName('input-control');
	var userName = document.getElementsByName('username');
	var password = document.getElementsByName('password');
	var email = document.getElementsByName('email');
	var ngaySinh = document.getElementsByName('ngaysinh');
	var divInput = document.getElementsByClassName('input-control');
	var show = document.getElementsByClassName('show');
	if (userName[0].value == '' || userName[0].value.length <8) {
		show[0].innerHTML = 'Username length min 8 letter';
		return false;
	}
	show[0].innerHTML = '';
	if (password[0].value == '' || password[0].value.length <8) {
		show[1].innerHTML = 'Password length min 8 letter';
		return false;
	}
	show[1].innerHTML = '';
	if (checkEmail(email[0].value)) {
		show[2].innerHTML = 'Email wrong format';
		return false;
	}
	show[2].innerHTML = '';
	if (checkBirthday(ngaySinh[0].value)){
		show[3].innerHTML = 'Wrong Birthday';
		return false;
	}
	show[3].innerHTML = '';
	checkValidate();
	return false;
}  
// validate ngày sinh
function checkBirthday(ngaySinh) {
	var arr = ngaySinh.split('/');
	var date = new Date();
	var dateInput = new Date(arr[2], arr[1]-1, arr[0]);
	if (date.getTime() < dateInput.getTime() || ngaySinh == ''){
		return 1;
	}
	return 0;
}

// validate email
function checkEmail(email) {
	var arrEmail = email.split('@');
	var emailTail = arrEmail[1];
	if (emailTail == undefined || arrEmail[0].length < 3) {
		return 1;
	}
	var arrEmailTail = emailTail.split('.');
	if (arrEmailTail.length < 2 || arrEmailTail[0].length < 1 || arrEmailTail[1].length < 1 
		|| !isNaN(arrEmailTail[0]) || !isNaN(arrEmailTail[1])) {
		return 1;
	}
	return 0;
}
// /\@|\./
// chỉ cần 1 giá trị undefine là submit => vãi :)))
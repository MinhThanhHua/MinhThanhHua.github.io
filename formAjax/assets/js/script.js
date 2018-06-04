function HTTP() {
	if (window.XMLHttpRequest) {
		var http = new XMLHttpRequest();
	} else {
		http = new ActiveXObject();
	}
	return http;
}
var http = HTTP();

function checkValidate() {
	http.open('get', 'sever.php?data=true', true);
	http.onreadystatechange = process;
	http.send(null);
}
function process() {
	if (http.readyState == 4 || http.status == 200) {
		kq = http.responseText;
		console.log(kq)
		var show = document.getElementsByClassName('show');
	}
}
// check validate form
function checkValidateForm() {
	var userName = document.getElementsByName('username');
	var password = document.getElementsByName('password');
	var email = document.getElementsByName('email');
	if (userName[0].value == '') {
		message(0, 'Chưa nhập tên')
	}consolelog('ok')
	return false;
}  
// xuất thông báo
function message(viTri, noiDung) {
	var divInput = document.getElementsByClassName('input-control')
	console.log(divInput[0])

	var text = document.createTextNode(noiDung);
	span.appendChild(text);
	var ten = divInput[viTri].appendChild(span);
	console.log(ten)
}
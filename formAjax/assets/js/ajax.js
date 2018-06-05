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
	var userName = document.getElementsByName('username');
	var password = document.getElementsByName('password');
	var email = document.getElementsByName('email');
	var ngaySinh = document.getElementsByName('ngaysinh');
	http.open('post', 'server.php?username='+userName[0].value+'&password='+password[0].value+
	'&email='+email[0].value+'&birthday='+ngaySinh[0].value, true);
	http.onreadystatechange = process;
	http.send('string');
}
function process() {
	if (http.readyState == 4 || http.status == 200) {
		kq = http.responseText;
		console.log(kq)
		var show = document.getElementsByClassName('show');
		show[0].innerHTML = kq;
	}
}
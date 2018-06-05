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
	console.log('ok')
	http.open('get', 'sever.php?data=true', true);
	http.onreadystatechange = process;
	http.send(null);
}
function process() {
	console.log('ok')
	if (http.readyState == 4 || http.status == 200) {
		kq = http.responseText;
		console.log(kq)
		var show = document.getElementsByClassName('show');
	}
}
function hello(){
    alert('ok')
}
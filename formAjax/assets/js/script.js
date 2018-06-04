function HTTP() {
	if (window.XMLHttprequest){
		var http = new XMLHttpRequest();
	} else{
		http = new ActiveXObject();
	}
	return http;
}
var http = HTTP();
function checkValidate() {
	http.open('get',);
}
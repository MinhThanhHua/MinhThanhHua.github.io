window.onload = function() {
	setInterval(function(){ 
		changeImageClick("phai");
	}, 3000);
}
// thay đổi độ mờ của ảnh
function changeOpacity() {
	var image = document.getElementById("imageshow");
	var opacity =0.5;
	changOp();
	function changOp() {
		if(opacity<0.9) {
			opacity += 0.1;
			setTimeout(function() {
				changOp();
			},200);
			image.style.opacity = opacity;
		}
	}
}
// đổi ảnh khi click vào ảnh nhỏ
function changeImage(name) {
	changeOpacity();
	var image = document.getElementById("imageshow");
	image.src = "image/"+name+".jpg";
	image.name= name;
}
// đổi ảnh khi bấm sang trái hoặc phải
function changeImageClick(viTri) {
	changeOpacity();
	var image = document.getElementById("imageshow");
	var name = getName(viTri);
	image.src = "image/"+name+".jpg";
	image.name= name;
}
// đưa tên các ảnh vào ds, trả về ds ảnh.
function addArr() {
	var arr = [];
	var anhCon = document.querySelectorAll(".image-mini > img");
	var soLuong = anhCon.length;
	var i;
	for (i = 0; i < soLuong; i++){
		arr.push(anhCon[i].name);
	}
	return arr;
}
//lấy ra tên ảnh trước hoặc sau bức ảnh hiện tai
function getName(viTri) {
	var arr = addArr();
	var image = document.getElementById("imageshow");
	var i = 0;
	if (viTri === "trai"){
		for (i = 0; i < arr.length; i++){
			if (arr[i] == image.name){
				if(i === 0) {
					return arr[3];
				}
				return arr[i-1];
			}	
		}
	}
	if (viTri === "phai"){
		for (i = 0; i < arr.length; i++){
			if (arr[i] === image.name){
				if((arr.length-1) == i) {
					return arr[0];
				}
				return arr[i+1];
			}		
		}
	}
	return 0;
}
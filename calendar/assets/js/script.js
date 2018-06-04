window.onload = function() {
	createTable();
}
function showCalendar() {
	getDay();
	getMonth();
	getYear();
	changeDate();
	var getTable = document.getElementById('calendar');
	if (getTable.style.display == 'none' || getTable.style.display == ''){
		getTable.style.display = 'table';
	} else {
		getTable.style.display = 'none';
	}
}
// tạo list tháng
function getMonth() {
	var date = new Date();
	var month = document.getElementById('month');
	var thang = 1;
	if (month.length < 1){
		for (thang = 1; thang < 13; thang++){
			var option = document.createElement('option');
			var text = document.createTextNode('Tháng' + ' ' +thang);
			option.appendChild(text);
			month.appendChild(option);
		}
	}
	month.options[date.getMonth()].selected = 'selected';
}
// lấy ngày tháng
function changeDate() {
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var thang = getMonthSelected(month);
	var nam = getYearSelected(year);
	change(thang, nam)
}
// tìm ngày đầu tiên ứng với tháng và năm truyền vào, sau đó xuất list ngày.
function change(thang, nam) {
	resetTable();
	var i = 1;
	var td = document.getElementsByTagName('td');
	var date = new Date(nam, thang, 1);
	var viTriNgay = date.getDay();
	if (checkMonth31(thang)){
		var songay = 31+viTriNgay;
		for(i = 1; i < 32; i++){
			td[i+6+viTriNgay].style.display = 'table-cell'
			td[i+6+viTriNgay].innerHTML = i;
			addEvent(i+6+viTriNgay, thang, nam, songay);
		}
	}
	if (checkMonth30(thang)){
		var songay = 30+viTriNgay;
		for(i = 1; i < 31; i++){
			td[i+6+viTriNgay].style.display = 'table-cell'
			td[i+6+viTriNgay].innerHTML = i;
			addEvent(i+6+viTriNgay, thang, nam, songay);
		}
	}
	if ((thang+1) == 2){
		if (((nam % 4 === 0) && (nam % 100 !== 0)) || (nam % 400 === 0)){
			var songay = 29+viTriNgay;
			for(i = 1; i < 30; i++){
				td[i+6+viTriNgay].style.display = 'table-cell'
				td[i+6+viTriNgay].innerHTML = i;
				addEvent(i+6+viTriNgay, thang, nam, songay);
			}
		} else{
			var songay = 28+viTriNgay;
			for(i = 1; i < 29; i++){
				td[i+6+viTriNgay].style.display = 'table-cell'
				td[i+6+viTriNgay].innerHTML = i;
				addEvent(i+6+viTriNgay, thang, nam, songay);
			}
		}
	}
}
// kiểm tra tháng 30 ngày
function checkMonth30(thang) {
	if ((thang+1) == 4 || (thang+1) == 6 || (thang+1) == 9 || (thang+1) == 11){
		return 1;
	}
	return 0;
}
// kiểm tra tháng 31 ngày
function checkMonth31(thang) {
	if ((thang+1) == 1 || (thang+1) == 3 || (thang+1) == 5 || (thang+1) == 7 || 
		(thang+1) == 8 || (thang+1) == 10 || (thang+1) == 12){
		return 1;
	}
	return 0;
}

// add event cho các ô ngày, ẩn các ô thừa
function addEvent(viTri, thang, nam, songay) {
	var td = document.getElementsByTagName('td');
	var input = document.getElementById('nhapNgayThang')
	td[viTri].addEventListener('click', function() {
		input.value=td[viTri].innerHTML+'/'+(thang+1)+'/'+nam;
	})	
	for (songay+7; songay+7 < 49; songay++){
		td[songay+7].style.display  = 'none'
	}
}
//reset bang
function resetTable() {
	var td = document.querySelectorAll('td')
	for(i = 1; i < 40; i++){
		td[i+6].innerHTML = '';
	}
}
// tạo bang
function createTable() {
	var table = document.getElementById('calendar');
	var tr = document.createElement('tr');
	var count = 1;
	var i = 0;
	table.appendChild(tr);
	for (i =0; i < 47; i++){
		if (count < 8){	
			var td = document.createElement('td');
			tr.appendChild(td)
			count++;
		} else{
			var tr = document.createElement('tr');
			table.appendChild(tr);
			count = 1;		
		}
	}
}
// lấy tháng đang hiển thị
function getMonthSelected(month) {
	var thang = 0;
	for (thang = 0; thang < 12; thang++){
		if (month.options[thang].selected){
			return thang;
		}
	}
	return -1;
}
// lấy năm đang hiển thị
function getYearSelected(year) {
	var date = new Date();
	var nam = date.getFullYear();
	for (i = 0; i < year.length; i++){
		if (year.options[i].selected){
			return year.options[i].text;
		}
	}
	return 0;
}
// lấy ngày đang hiển thị
function getDay() {
	var date = new Date();
	var thang = date.getMonth();
	var nam = date.getUTCFullYear();
	var firstDayInMonth = new Date(nam, thang, 1);
	var td =document.getElementsByTagName('td');
	var date1 = new Date();
	td[firstDayInMonth.getDay()+6+date.getDate()].style.backgroundColor = 'blue';
}
// kiểm tra có phải tháng năm hiện tại ko để tô background
function calendar() {
	// năm tháng lấy trên selec
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var thang = getMonthSelected(month);
	var nam = getYearSelected(year);
	var date = new Date();
	// tháng ngày lấy theo hiện tai
	var thangHienTai = date.getMonth();
	var firstDayInMonth = new Date(nam, thangHienTai, 1);
	var td =document.getElementsByTagName('td');
	if (date.getMonth() == thang && date.getFullYear() == nam){
		getDay();
	} else{
		console.log(firstDayInMonth.getDay()+7)
		td[firstDayInMonth.getDay()+6+date.getDate()].style.backgroundColor = 'white'
	}	
}
// tạo list year
function getYear() {
	var date = new Date();
	var year = document.getElementById('year');
	var nam = 1950;
	var yearNow = date.getFullYear();
	if (year.length < 1){
		for (nam = 1950; nam < 2048; nam++){
			var option = document.createElement('option');
			var text = document.createTextNode(nam);
			option.appendChild(text);
			year.appendChild(option);
		}
	}
	year.options[yearNow-1950].selected = 'selected';
}
// đổi ngày theo tháng bằng button 
function changeMonth(mucdo) {
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var thang = getMonthSelected(month);
	var nam = getYearSelected(year);
	if (thang == 0 && mucdo == -1){
		month.options[11].selected = 'selected';
		changeYear(-1)
		return;
	}
	if (thang == 11 && mucdo == 1){
		month.options[0].selected = 'selected';
		changeYear(1)
		return;
	}
	change((thang + mucdo),nam);
	month.options[thang + mucdo].selected = 'selected';
}
// đổi ngày theo năm bằng button
function changeYear(mucdo) {
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var thang = getMonthSelected(month);
	var nam = getYearSelected(year);
	var parseNam = parseInt(nam)
	if (parseNam === 1950 && mucdo == -1){
		alert('Đây là năm nhỏ nhất trong lịch này');
		changeDate();
		return;
	}
	if (parseNam === 2047 && mucdo == 1){
		alert('Đây là năm lớn nhất trong lịch này');
		changeDate();
		return;
	}
	change(thang,(parseNam+mucdo));
	year.options[parseNam-1950+mucdo].selected = 'selected';
}
// khi nhập sẽ thay đổi value trên calendar
function inputDate() {
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var input = document.getElementById('nhapNgayThang');
	var str = input.value;
	var arr = str.split('/');
	var nam = arr[2];
	var thang = arr[1];
	var ngay = arr[0];
	if (!isNaN(ngay) && !isNaN(thang) && !isNaN(nam)){
		thang = parseInt(thang);
		var kiemTraSoNgay = 0;
		if (checkMonth30(thang-1)){
			kiemTraSoNgay = 1;
		} 
		if (checkMonth31(thang-1)){
			kiemTraSoNgay = 2;
		}
		if (kiemTraSoNgay == 1 && ngay < 31 && nam > 1950 && nam <2048){
			var getTable = document.getElementById('calendar');
			getYear();
			getMonth();
			change(thang-1, nam);
			year.options[nam-1950].selected = 'selected';
			month.options[thang-1].selected = 'selected';
			if (getTable.style.display == 'none' || getTable.style.display == ''){
				getTable.style.display = 'table';
			}	
		} else if (kiemTraSoNgay == 2 && ngay < 32 && nam > 1950 && nam <2048 ){
			var getTable = document.getElementById('calendar');
			getYear();
			getMonth();
			change(thang-1, nam);
			year.options[nam-1950].selected = 'selected';
			month.options[thang-1].selected = 'selected';
			if (getTable.style.display == 'none' || getTable.style.display == ''){
				getTable.style.display = 'table';
			}
		} else{
			alert('sai định dạng ngày nhập');
		}
	}
}
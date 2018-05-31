window.onload = function() {
	createTable();
}
function showCalendar() {
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
// hiển thị ngày  và đưa ngày vào ô input
function change(thang, nam) {
	resetTable();
	var i = 1;
	var td = document.getElementsByTagName('td');
	var date = new Date(nam, thang, 1);
	var viTriNgay = date.getDay();
	if ((thang+1) == 1 || (thang+1) == 3 || (thang+1) == 5 || (thang+1) == 7 || 
		(thang+1) == 8 || (thang+1) == 10 || (thang+1) == 12){
		for(i = 1; i < 32; i++){
			td[i+6+viTriNgay].innerHTML = i;
			addEvent(i+6+viTriNgay, thang, nam);
		}
	}
	if ((thang+1) == 4 || (thang+1) == 6 || (thang+1) == 9 || (thang+1) == 11){
		for(i = 1; i < 31; i++){
			td[i+6+viTriNgay].innerHTML = i;
			addEvent(i+6+viTriNgay, thang, nam);
		}
	}
	if ((thang+1) == 2){
		for(i = 1; i < 29; i++){
			td[i+6+viTriNgay].innerHTML = i;
			addEvent(i+6+viTriNgay, thang, nam);
		}

	}
}

// add event cho thẻ
function addEvent(viTri, thang, nam) {
	var td = document.getElementsByTagName('td');
	var input = document.getElementsByTagName('input');
	td[viTri].addEventListener('click', function() {
		input[0].value=td[viTri].innerHTML+'/'+(thang+1)+'/'+nam;
	})
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
	for (i = 0; i < 47; i++){
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
// tạo list year
function getYear() {
	var date = new Date();
	var year = document.getElementById('year');
	var nam = date.getFullYear();
	if (year.length < 1){
		for (nam; nam > 1950; nam--){
			var option = document.createElement('option');
			var text = document.createTextNode(nam);
			option.appendChild(text);
			year.appendChild(option);
		}
	}
}
// đổi ngày theo tháng bằng button 
function changeMonth() {
	var month = document.getElementById('month');
	var thang = getMonthSelected(month);
	
}

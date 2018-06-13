$(document).ready(function() {
    $('#imageCalendar').click(function(){
       showTable();
    })
    createCalendar = true;
    $('.table').hide(500);
})
var createCalendar = false;
function createTable() {
    console.log('create')
    let table = $('<table></table>');
    let i = 0;
    var tr = $('<tr></tr>');
    let countCol = 0;
    for (i = 0; i < 56; i++){
        if (i < 6){//các button
            var td = $('<td></td>');
            var text = addButton(i, td);
            td.append(text)
            tr.append(td);
            table.append(tr);
        } 
        if (i >= 6 && i < 13){// thứ ngày tháng bằng chữ
            if (i == 6){
                var tr = $('<tr></tr>');
            }
            text = selectDay(i);
            var td = $('<td></td>').text(text);
            tr.append(td);
            table.append(tr);
            countCol++;
        }
        if (i > 12){// điền ngày
            countCol++;
            let day = i-12;
            if (countCol < 7){ 
                    var td = $('<td></td>');
                    tr.append(td);
                }
            else{
                table.append(tr);
                var tr = $('<tr></tr>');
                var td = $('<td></td>');
                tr.append(td);
                countCol = 0;
            } 
        } 
    }
    $('.table').append(table);
    $('td').eq(2).attr('colspan',2);
}
function showTable() {
    let yearNow = getYearNow();
    let monthNow = getMonthNow();
    // if (createCalendar){
    //     createTable();
    //     addEventClickButton();
    //     console.log('ok')
    //     createCalendar = false;
    // }
    cssTable();
    placeDate(monthNow, yearNow);
    $('select').first().change(changeMonth);
    $('select').last().change(changeYear);
   
    $('.table').slideToggle(500);
}
function cssTable() {
    let i = 6;
    for(i = 6; i < 13; i++){
        $('td').eq(i).css({'color':'lightgreen','background-color':'#777','font-size':'25px'})    
    }
}
// thêm sự kiện cho button
function addEventClickButton() {
    $(':button').eq(0).click(function() {
        changeYearPreOrNext(-1);
    });
    $(':button').eq(1).click(function() {
        changeMonthPreOrNext(-1);
    });
    $(':button').eq(2).click(function() {
        changeMonthPreOrNext(1);
    });
    $(':button').eq(3).click(function() {
        changeYearPreOrNext(1);
    });
}
//change year with button
function changeYearPreOrNext(value) {
    let year = $('.year').val();
    year = parseInt(year);
    let month = $('select').first().val();
    year += value;
    if (year > 2047){
        alert('đã là năm lớn nhất trong lịch');
        return;
    }
    if (year < 1950){
        alert('đã là năm nhỏ nhất trong lịch');
        return;
    }
    $('.year').val(year);
    resetTable();
    placeDate(month, year);
}
//change month with button
function changeMonthPreOrNext(value) {
    let month = $('select').first().val();
    month = parseInt(month);
    month += value;
    if (month > 12){
        month = 1;
        changeYearPreOrNext(1);
    }
    if (month < 1){
        month = 12;
        changeYearPreOrNext(-1);
    }
    $('select').first().val(month);
    resetTable();
    let year = $('.year').val();
    placeDate(month, year);
}
// fucntion add button and select
function addButton(viTri) {
    if (viTri == 0){
        return $('<input type="button" value="<<"></input>');
    }
    if (viTri == 1){
        return $('<input type="button" value="<"></input>');
    }
    if (viTri == 2){
        return selectMonth();
    }
    if (viTri == 3){
        return selectYear();
    }
    if (viTri == 4){
        return $('<input type="button" value=">"></input>');
    }
    if (viTri == 5){
        return $('<input type="button" value=">>"></input>');
    }
    return 1;
}
function selectYear() {
    let yearNow = getYearNow();
    let select = $('<select></select>').addClass('year');
    let i = 1950;
    for (i = 1950; i < 2048; i++){
        var option = (i == yearNow) ? $('<option selected="selected"></option>').text(i) 
        : $('<option></option>').text(i);
        select.append(option);
    }
    console.log(option)
    return select;
}
function selectMonth() {
    let monthNow = getMonthNow();
    let select = $('<select></select>');
    let i = 1;
    for (i = 1; i < 13; i++){
        var option = (i == monthNow)? $('<option selected="selected"></option>').text('Tháng '+i).val(i) 
        : $('<option></option>').text('Tháng '+i).val(i);
        select.append(option);
    }
    return select;
}
function selectDay(viTri) {
    if (viTri == 6){
        return 'Sun';
    }
    if (viTri == 7){
        return 'Mon';
    }
    if (viTri == 8){
        return 'Tue';
    }
    if (viTri == 9){
        return 'Wed';
    }
    if (viTri == 10){
        return 'Thu';
    }
    if (viTri == 11){
        return 'Fri';
    }
    if (viTri == 12){
        return 'Sat';
    }
    return 0;
}
//lấy năm hiện tại
function getYearNow(){
    let date = new Date()
    let year = date.getFullYear();
    return year;
}
// lấy tháng hiện tại
function getMonthNow(){
    let date = new Date()
    let month = date.getMonth()+1;
    return month;   
}
// lấy ngày
function getPlaceDay(month, year){
    var date = new Date(year, month, 01);
    var day = date.getDay();
    return day;
}
// phân vị trí ngày vào ô
function placeDate(month, year) {
    clearEventClick();
    let i = 1;
    let placeDay = getPlaceDay(month-1, year);
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || 
        month == 10 || month == 12){
        for (i = 1; i< 32; i++){
            $('td').eq(placeDay+12+i).text(i);
            $('td').eq(placeDay+12+i).click(showTimeOnInput);
        }
        if (placeDay+12+31 < 49){
            $('tr').eq(7).hide();
        } else{
            $('tr').eq(7).show();
        }
    }
    if (month == 4 || month == 6 || month == 9 || month == 11){
        for (i = 1; i< 31; i++){
            $('td').eq(placeDay+12+i).text(i);
            $('td').eq(placeDay+12+i).click(showTimeOnInput);
        }
        if (placeDay+12+31 < 49){
            $('tr').eq(7).hide();
        } else{
            $('tr').eq(7).show();
        }
    }
    if (month == 2){
        let themNgay = checkNamNhuan(year);
        let maxDate = 29 + themNgay;
        let i = 1;
        for (i = 1; i < maxDate; i++){
            $('td').eq(placeDay+12+i).text(i);
            $('td').eq(placeDay+12+i).click(showTimeOnInput);
        }
        if (placeDay+12+maxDate < 49){
            $('tr').eq(7).hide();
        }
        else{
            $('tr').eq(7).show();
        }
        if (placeDay+12+maxDate < 42){
            $('tr').eq(6).toggle();
        }else{
            $('tr').eq(6).show();
        }
    }
}
// reset table
function resetTable() {
    for (i = 13; i < 56; i++){
        $('td').eq(i).text('');
    }
}
//kiểm tra năm nhuận
function checkNamNhuan(year) {
    if ((year % 100 == 0 && year % 4 == 0) || (year % 100 != 0 && year % 4 ==0)){
        return 1;
    }
    return 0;
}
// đổi tháng
function changeMonth(){
    let month = $(this).val();
    let year = $('.year').val();
    resetTable();
    placeDate(month, year);
}
// đổi năm
function changeYear(){
    let month = $('select').first().val();
    let year = $(this).val();
    resetTable();
    placeDate(month, year)
}
// thêm sự kiện click cho lịch
function showTimeOnInput(viTri) {
    let day = $(this).text();
    let month = $('select').first().val();
    let year = $('select').last().val();
    $('.form-input :text').val(day+'/'+month+'/'+year);
}
function clearEventClick() {
    for (i = 13; i < 56; i++){
        $('td').eq(i).unbind();
    }
}
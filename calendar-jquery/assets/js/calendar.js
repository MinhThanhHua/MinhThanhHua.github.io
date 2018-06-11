$(document).ready(function() {
    $('#imageCalendar').click(function(){
       showTable();
    })
})
function showTable() {
    let table = $('<table></table>')
    let td = 0;
    var tr = $('<tr></tr>')
    for(td = 0; td < 56; td++){
        if (td % 7 != 0){
            let td = $('<td></td>').text(td);
            tr.append(td);
        } else{
            table.append(tr);
            let tr = $('<tr></tr>');
            let td = $('<td></td>').text(td);
        }
    }
}
var canvasMenu = document.getElementById('menu');
var ctxMenu = canvasMenu.getContext('2d');

var canvasMain = document.getElementById('gameplay');
var ctxMain = canvasMain.getContext('2d');
//random
var cx = Math.floor(Math.random()*(canvasMain.width-100));
var cy = Math.floor(Math.random()*(canvasMain.height-100))
var monster = new Monster(canvasMain.width, canvasMain.height, cx, cy);
var monster1 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster2 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster3 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster4 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster5 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster6 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster7 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monster8 = new Monster(canvasMain.width, canvasMain.height, 0, 0);
var monsters = [monster, monster1, monster2, monster3, monster4, monster5, monster6,
                monster7, monster8];
var diem = 0;
var fast = setInterval('update()',10);
var startStatus = true;
//-------------------Image -------------------------
// Hình ảnh menu
var imgMenuBg = new Image();


var imgBoomBb = new Image();
imgBoomBb.src = 'image/boombbb.png';

var imgPause = new Image();
imgPause.src = 'image/pause.png';

var imgReload = new Image();
imgReload.src = 'image/reload.png';


// Hình ảnh main

var imgMonster = new Image();
imgMonster.src = 'image/monster.png'
//------------------End Image---------------------------------

//------------------- Layout --------------------------------

//Hiển thị chữ và ảnh cho menu
function layoutMenu() {
    ctxMenu.drawImage(imgMenuBg, 0, 0);
    ctxMenu.drawImage(imgBoomBb, 230, 40, 50, 50);
    ctxMenu.drawImage(imgPause, 320, 50, 40, 40);
    ctxMenu.drawImage(imgReload, 390, 50, 40, 40);
    ctxMenu.fillStyle = '#fff';
    ctxMenu.font = ' 23px Arial';
    ctxMenu.fillText('Score:', 10, 30);
    ctxMenu.fillText('Heart:', 10, 60);
    ctxMenu.fillText('Speed:', 10, 90);
    ctxMenu.fillText('Random Monster:', 230, 30);
}
//-------------------End layout-------------------------------

//------------------tạo monster và di chuyển monster-----------------
// khởi tạo đối tượng monster xuất hiện bất kì
function Monster(mapWidtch, mapHeight, cx, cy) {
    this.mapWidtch = mapWidtch;
    this.mapHeight = mapHeight;
    this.transparen = true;
    this.speedX = 1;
    this.speedY = 1;
    this.cx = cx;
    this.cy = cy;
}
// tạo monster xuất hiện cố định
// tạo ảnh monster
Monster.prototype.draw = function() {
    ctxMain.beginPath();
    ctxMain.drawImage(imgMonster,this.cx, this.cy, 100, 100);
    ctxMain.closePath();
}
// tạo chuyển dộng
Monster.prototype.move = function() {
    this.cx += this.speedX;
    this.cy += this.speedY;
    this.left = this.cx;
    this.top = this.cy;
    this.right = this.cx + 100;
    this.bottom = this.cy + 100;
}
// xử lý va chạm
Monster.prototype.checkCollision = function() {
    if (this.left <= 0 || this.right >= canvasMain.width){
        this.speedX = -this.speedX;
    }
    if (this.top <= 0 || this.bottom > canvasMain.height){
        this.speedY = -this.speedY;
    }
}
// xác định vị trí đối tượng chuyển động
Monster.prototype.monsterStatus =function(e) {
    preX = e.pageX - canvasMain.offsetLeft;
    preY = e.pageY - canvasMain.offsetTop;
    if (this.cx + 25 < preX && preX < this.cx + 100 && this.cy + 10 < preY && preY < this.cy +90){
        this.clearMonster();
        this.transparen = false;
        score();    
    }
}
// xóa ảnh monster
Monster.prototype.clearMonster = function() {
    ctxMain.clearRect(this.cx-1, this.cy-1, 100, 100);
    ctxMain.clearRect(this.cx+5, this.cy+5, 100, 100);
    
}
// update sau moi lan chuyen dong
function update() {
    let countMonster = 0;
    for (countMonster = 0; countMonster < 2; countMonster++){
        monsters[countMonster].move();
        monsters[countMonster].checkCollision();
        monsters[countMonster].clearMonster();
        if (monsters[countMonster].transparen){
            monsters[countMonster].draw();
        }
       
    }
    
}

//------------------End Tạo di chuyển của monster---------------

//------------------Function giết monster-----------------------
//Event onclick image
function mouseClickMenu(name, toaDoXMin, toaDoXMax,toaDoYMin, toaDoYMax) {
    canvasMenu.addEventListener('click',function(e) {
            preX = e.pageX - canvasMenu.offsetLeft;
            preY = e.pageY - canvasMenu.offsetTop;
            if (toaDoXMin < preX && preX < toaDoXMax && toaDoYMin < preY && preY < toaDoYMax){
                if (name == 'boom'){
                    alert('boom')
                }
                if (name == 'pause'){
                    startStatus = !startStatus;
                    fauseOrPlay(startStatus)
                }
            }
        })
}
function mouseClickMonster(i){
    canvasMain.addEventListener('click',function(e) {
        monsters[i].monsterStatus(e);
    })
}

//xác định vị trí đối tượng (tui dùng)
function mouse() {
    let preX;
    let preY;
    canvasMain.addEventListener('click',function(e) {
        preX = e.pageX - this.offsetLeft;
        preY = e.pageY - this.offsetTop;
        console.log(preX+ ' '+preY)
    })
}
//------------------End function kill monster----------------------

//-----------------Score, heart, speed, pause-----------------------------

// score
function score() {
    diem += 10;
    ctxMenu.beginPath();
    ctxMenu.clearRect( 100, 10, 40, 20);
    ctxMenu.fillText(diem, 100, 30);
    ctxMenu.closePath();
}
// pause or play
function fauseOrPlay(startStatus) {
    console.log(startStatus)
    if (startStatus){
        fast;
        console.log('yes')
    } else{
        clearInterval(fast);
        console.log('no')
    }
   
}
//-----------------Score, heart, speed-----------------------------
window.onload = function main(){
    let speed = 100;
    let countMonster = 0;
    layoutMenu();
    mouseClickMenu('boom', 240, 275, 50, 85);//Boom Kill All
    mouseClickMenu('pause', 320, 360, 50, 85);//pause
    mouseClickMenu('reload', 390, 420, 50, 85);//reload
    for (countMonster = 0; countMonster < 2; countMonster++){
        mouseClickMonster(countMonster);
    }
    fauseOrPlay();
}


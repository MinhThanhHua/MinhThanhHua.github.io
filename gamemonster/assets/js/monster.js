var canvasMenu = document.getElementById('menu');
var ctxMenu = canvasMenu.getContext('2d');

var canvasMain = document.getElementById('gameplay');
var ctxMain = canvasMain.getContext('2d');

var monster;

//S-------------------Image -------------------------
// Hình ảnh menu
var imgMenuBg = new Image();

imgMenuBg.src = 'image/menubg.png';

var imgBoomBb = new Image();
imgBoomBb.src = 'image/boombbb.png';

var imgPause = new Image();
imgPause.src = 'image/pause.png';

var imgReload = new Image();
imgReload.src = 'image/reload.png';


// Hình ảnh main

var imgMonster = new Image();
imgMonster.src = 'image/monster.png'
//E-------------------End Image---------------------------------

//S------------------- Layout --------------------------------

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
//E-------------------End layout-------------------------------

//S------------------tạo di chuyển cho monster-----------------
// khởi tạo đối tượng monster
function monster(mapWidtch, mapHeight) {
    this.mapWidtch = mapWidtch;
    this.mapHeight = mapHeight;
    this.speedX = 3;
    this.speedY = 3;
    this.cx = Math.floor(Math.random()*(this.mapWidtch-100));
    this.cy =  Math.floor(Math.random()*(this.mapHeight-100));
}
// tạo ảnh monster
monster.prototype.draw = function() {
    ctxMain.beginPath();
    ctxMain.drawImage(imgMonster,this.cx, this.cy, 100, 100)
    ctxMain.closePath();
}
// xóa ảnh monster
function clearMonster() {
    ctxMain.clearRect(0, 0, this.canvasMain.width, this.canvasMain.height);
    monster.draw();
}
// tạo chuyển dộng
monster.prototype.move = function() {
    this.cx += this.speedX;
    this.cy += this.speedY;
    this.left = this.cx;
    this.top = this.cy;
    this.right = this.cx + 100;
    this.bottom = this.cy + 100;
    mouseClick(canvasMain, this.cx + 25, this.cx + 100, this.cy + 10, this.cy +90);
}
// xử lý va chạm
monster.prototype.checkCollision = function() {
    if (this.left <= 0 || this.right >= canvasMain.width){
        this.speedX = -this.speedX;
    }
    if (this.top <= 0 || this.bottom > canvasMain.height){
        this.speedY = -this.speedY;
    }
}
// update sau moi lan chuyen dong
function update() {
    monster.move();
    monster.checkCollision();
    clearMonster();
}

//E------------------End Tạo di chuyển của monster---------------

//S------------------Function giết monster-----------------------
//Event onclick image
function mouseClick(nameCanvas, toaDoXMin, toaDoXMax,toaDoYMin, toaDoYMax) {
    var preX;
    var preY;
    nameCanvas.addEventListener('click',function(e) {
        preX = e.pageX - this.offsetLeft;
        preY = e.pageY - this.offsetTop;
        if (toaDoXMin < preX && preX < toaDoXMax && toaDoYMin < preY && preY < toaDoYMax){
            alert('ok')
        }
    })
}
function mouse() {
    var preX;
    var preY;
    canvasMain.addEventListener('click',function(e) {
        preX = e.pageX - this.offsetLeft;
        preY = e.pageY - this.offsetTop;
        console.log(preX+ ' '+preY)
    })
}
function KillAll() {
    console.log('chao')
    imageData.addEventListener('click',function(){
        alert('ok')
    })
}

//E------------------End function---------------------------------
window.onload = function main(){
    var speed = 100;
    layoutMenu();
    mouseClick(canvasMenu, 240, 275, 50, 85);//Boom Kill All
    mouseClick(canvasMenu, 320, 360, 50, 85);//Boom Kill All 
    mouseClick(canvasMenu, 390, 420, 50, 85);
//    mouse();
    monster = new monster(canvasMain.width, canvasMain.height);
    setInterval('update()',speed);
}

var canvasMenu = document.getElementById('menu');
var ctxMenu = canvasMenu.getContext('2d');

var canvasMain = document.getElementById('gameplay');
var ctxMain = canvasMain.getContext('2d');
//random
// var cx = Math.floor(Math.random()*(canvasMain.width-100));
// var cy = Math.floor(Math.random()*(canvasMain.height-100))
    var monster = new Monster(canvasMain.width, canvasMain.height, 1, 1, 170, 170);
    var monster1 = new Monster(canvasMain.width, canvasMain.height, 1, 1, 0, 0);
    var monster2 = new Monster(canvasMain.width, canvasMain.height, 0, 1, 170, 0);
    var monster3 = new Monster(canvasMain.width, canvasMain.height, -1, 1, 350, 0);
    var monster4 = new Monster(canvasMain.width, canvasMain.height, 1, 0, 0, 170);
    var monster5 = new Monster(canvasMain.width, canvasMain.height, -1, 0, 350, 170);
    var monster6 = new Monster(canvasMain.width, canvasMain.height, 1, 1, 0, 400);
    var monster7 = new Monster(canvasMain.width, canvasMain.height, 0, 1, 170, 400);
    var monster8 = new Monster(canvasMain.width, canvasMain.height, -1, 1, 350, 400);
    var monsters = [monster, monster1, monster2, monster3, monster4, monster5, monster6,
        monster7, monster8];
    var oldMonster = [monster, monster1, monster2, monster3, monster4, monster5, monster6,
        monster7, monster8];
//-------------------Image -------------------------
// Hình ảnh menu
var imgMenuBg = new Image();
imgMenuBg.src = 'image/menubg.png';

var imgBoomBb = new Image();
imgBoomBb.src = 'image/boombbb.png';

var imgPause = new Image();
imgPause.src = 'image/pause.png';

var imgReload = new Image();
imgReload.src = 'image/reload.png';

var imgHeart = new Image();
imgHeart.src = 'image/heart.png'

// Hình ảnh main
var imgMainBg = new Image();
imgMainBg.src = 'image/mainbg.png'

var imgMonster = new Image();
imgMonster.src = 'image/monster.png'

var imgBoom = new Image();
imgBoom.src = 'image/boom.png';

var imgLose = new Image();
imgLose.src = 'image/over.png';

var imgBlood = new Image();
imgBlood.src = 'image/blood.png';
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

// layout main
function layoutMain() {
    ctxMain.drawImage(imgMainBg, 0, 0)
}

//-------------------End layout-------------------------------

//------------------tạo monster và di chuyển monster-----------------
// khởi tạo đối tượng monster xuất hiện bất kì
function Monster(mapWidtch, mapHeight, speedX, speedY, cx, cy) {
    this.mapWidtch = mapWidtch;
    this.mapHeight = mapHeight;
    this.transparen = false;
    this.speedX = speedX;
    this.speedY = speedY;
    this.cx = cx;
    this.cy = cy;
    this.oldCx = cx;
    this.oldCy = cy;
}
function blood(bx, by){
    this.bx = bx;
    this.by = by;
}
// tạo monster xuất hiện cố định
// tạo ảnh monster
Monster.prototype.draw = function () {
    ctxMain.beginPath();
    ctxMain.drawImage(imgMonster, this.cx, this.cy, 100, 100);
    ctxMain.closePath();
}
// tạo chuyển dộng
Monster.prototype.move = function () {
    this.cx += this.speedX;
    this.cy += this.speedY;
    this.left = this.cx;
    this.top = this.cy;
    this.right = this.cx + 100;
    this.bottom = this.cy + 100;
}
// xử lý va chạm
Monster.prototype.checkCollision = function () {
    if (this.left < 0 || this.right > canvasMain.width) {
        this.speedX = -this.speedX;
    }
    if (this.top < 0 || this.bottom > canvasMain.height) {
        this.speedY = -this.speedY;
    }
}
// xác định vị trí đối tượng chuyển động
Monster.prototype.monsterStatus = function (e) {
    preX = e.pageX - canvasMain.offsetLeft;
    preY = e.pageY - canvasMain.offsetTop;
    if (this.cx + 25 < preX && preX < this.cx + 100 
        && this.cy + 10 < preY && preY < this.cy + 90 &&  this.transparen == true 
        && startStatus == true) {
        this.transparen = false;
        blood.bx = this.cx;
        blood.by = this.cy;  
        slMonster--;
        if (slMonster == 0){
            score(10);
            randomMonster();
            return;
        }
        score(10);
        
    }
    // if (0 < preX && preX < this.cx ){
    //     console.log('ok')
    // }
}
// xét vị trí để đi lùi
Monster.prototype.getPlace = function () {
    if (this.cx + 25 < 222 && 222 < this.cx + 100 && this.cy + 10 < 222 && 222 < this.cy + 90) {
        this.speedX = -this.speedX;
        this.speedY = -this.speedY;
    }
}
// xóa ảnh monster
Monster.prototype.clearMonster = function () {
    ctxMain.clearRect(this.cx - 1, this.cy - 1, 100, 100);
    ctxMain.clearRect(this.cx + 1, this.cy + 1, 100, 100);

}
// update sau moi lan chuyen dong
var startStatus = true;
function update() {
    fauseOrPlay(startStatus)
    if (startStatus) {
        
        let countMonster = 0;
        for (countMonster = 0; countMonster < soLuongMonster; countMonster++) {
            if (monsters[countMonster].transparen){
                monsters[countMonster].checkCollision();
                monsters[countMonster].clearMonster();
            }
        }
        drawMonster(soLuongMonster);
        checkHeart();
    }
}
// mỗi bước đi tiến hành vẽ lại
function drawMonster(soLuongMonster) {
    layoutMain();
    if (countClickMonster > 0){
        ctxMain.drawImage(imgBlood, blood.bx+25, blood.by+25, 100 , 100)
    }
    for (countMonster = 0; countMonster < soLuongMonster; countMonster++) {
        if (monsters[countMonster].transparen) {
            monsters[countMonster].draw();
            monsters[countMonster].move();
            if (countMonster != 0) {
                monsters[countMonster].getPlace();
            }
        }
    }
}

//------------------End Tạo di chuyển của monster---------------

//------------------Function giết monster-----------------------
//Event onclick image
function mouseClickMenu(name, toaDoXMin, toaDoXMax, toaDoYMin, toaDoYMax) {
    canvasMenu.addEventListener('click', function (e) {
        preX = e.pageX - canvasMenu.offsetLeft;
        preY = e.pageY - canvasMenu.offsetTop;
        if (toaDoXMin < preX && preX < toaDoXMax && toaDoYMin < preY && preY < toaDoYMax ) {
            if (countHeart >= 0){
                if (name == 'boom' && startStatus == true) {
                    killAll();
                }
                if (name == 'pause') {
                    startStatus = !startStatus;
                    update();
                }
            }
            if (name == 'reload') {
                location.reload();
            }
        }
    })
}
// lcik vào monster
var countClickMonster = 0;
function mouseClickMonster(i) {
    canvasMain.addEventListener('click', function (e) {
        monsters[i].monsterStatus(e);
    })
}
// click vào canvas
var countClickCanvasMain = 0;
function canvasClick(){
    canvasMain.addEventListener('click', function (e) {
        if (startStatus){
            countClickCanvasMain++;
        }  
    }) 
}
//kill all
function killAll() {
    startStatus = !startStatus;
    layoutMain();
    ctxMain.drawImage(imgBoom, 150, 150, 150, 150)
    setTimeout('play()', 1000)
}
function play() {
    let count = 0;
    for (countMonster = 0; countMonster < soLuongMonster; countMonster++) {
        if ( monsters[countMonster].transparen){
            monsters[countMonster].transparen = false;
            count ++;
        }
    }
    score(count * 10);
    startStatus = !startStatus;
    randomMonster();
    update();
}
//xác định vị trí đối tượng (tui dùng)
function mouse() {
    let preX;
    let preY;
    canvasMain.addEventListener('click', function (e) {
        preX = e.pageX - this.offsetLeft;
        preY = e.pageY - this.offsetTop;
        console.log(preX + ' ' + preY)
    })
}
//------------------End function kill monster----------------------

//-----------------Score, heart, speed, pause-----------------------------

// score
var diem = 0;
function score(number) {
    if(number > 0){
        countClickMonster++;
    }
    if (diem > 50 && slMonster == 0){
        slMonster = 2;
        console.log(slMonster)
    } 
    if (diem <= 50 && slMonster == 0){
        slMonster = 1;
    }
    diem += number;
    //localStorage.myScore = 0;
    ctxMenu.beginPath();
    ctxMenu.clearRect(100, 10, 40, 20);
    ctxMenu.fillText(diem, 100, 30);
    ctxMenu.closePath();
    highCore(diem);
}
// điểm cao
function highCore(diem) {
    let hiCore = 0;
    if (localStorage.myScore == undefined){
        localStorage.myScore = 0;
        hiCore = localStorage.myScore;
    } else{
        hiCore = localStorage.myScore;
        console.log(localStorage.myScore)
        if (diem >= hiCore){
            localStorage.myScore = diem;
            hiCore = diem;
        }
    }
    ctxMenu.clearRect(180, 0, 50, 30)
    ctxMenu.fillText(hiCore, 180, 30);
}
// pause or play
function fauseOrPlay(startStatus) {
    if (startStatus) {
        setTimeout('update()', 10)
    }
}
//-----------------Score, heart, speed-----------------------------
//-----------------Số lượng monster xuất hiện--------------------
//xuất ra so luong 
var soLuongMonster = 9
var slMonster = 1;
function randomMonster() {
    let sl = 0;
    let tt = -1;
    for (sl = 0; sl < slMonster; sl++){
        
        do{
            var randomMonst = random();
        } while(randomMonst == tt)
        tt = randomMonst;
        monsters[randomMonst].transparen = true;
        monsters[randomMonst].cx = monsters[randomMonst].oldCx;
        monsters[randomMonst].cy = monsters[randomMonst].oldCy;
        mouseClickMonster(randomMonst);
    }
}
function random(){
    let randomMonst = Math.floor(Math.random() * (soLuongMonster));
    return randomMonst;
}
function slMonsters() {
    level ++;
    slMonster = level;
}
// heart
var countHeart = 3;
function checkHeart() {
    if(countClickCanvasMain > countClickMonster ){
        score(-10);
        if (countHeart == 3){
            clearHeart(140, 40);
        }
        if(countHeart == 2){
            clearHeart(110, 40);
        }
        if (countHeart == 1){
            clearHeart(80, 40);
        }
        if (countHeart == 0){
            startStatus = false;
            ctxMain.drawImage(imgLose, 50, 100, 350, 350);
            console.log('ok')
        }
        countHeart--;
        countClickCanvasMain = countClickMonster; 
    }
}

//draw heart
function drawHeart() {
    ctxMenu.drawImage(imgHeart, 80, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 110, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 140, 40, 25, 25);
}
// clear heart
function clearHeart(hx, hy) {
    ctxMenu.clearRect( hx, hy, 25, 25)
}

//------------------Kết thúc------------------------------------
var level = 1;
window.onload = function main() {
    let speed = 100;
    let countMonster = 0;
    layoutMenu();
    layoutMain();  
    mouseClickMenu('boom', 240, 275, 50, 85);//Boom Kill All
    mouseClickMenu('pause', 320, 360, 50, 85);//pause
    mouseClickMenu('reload', 390, 420, 50, 85);//reload
    randomMonster();
    canvasClick();
    fauseOrPlay(startStatus);
    drawHeart();
    
}


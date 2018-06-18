window.onload = function() {
    var slideModule = (function(){
        var arr =document.querySelectorAll('.all-image  img');
        var image = document.querySelectorAll('.mini-image  img');
        var countImage = arr.length;
        var firstImage = true;
        arr[0].style.left = '0';
        var tam = -1;
        function getSpot() {
            let i = 0;
            for (i = 0; i < countImage; i++) {
                if (arr[i].offsetLeft == 0) {
                    return i;
                }
            }
            return tam;
        }

        function checkPlace(leftOrRight) {
            let viTri = getSpot();
            if (leftOrRight) {
                if ((viTri - 1 < 0)) {
                    arr[countImage - 1].style.left = '-400px';
                } else {
                    arr[viTri - 1].style.left = '-400px';
                }
                loadRight(viTri)
            } else {
                loadLeft(viTri);
            }
        }
        function loadLeft(viTri) {
            arr[viTri].style.left = (arr[viTri].offsetLeft-10) + 'px';
            if (viTri == (countImage-1)) {
                arr[0].style.left = (arr[0].offsetLeft-10) + 'px';
            } else {
                arr[viTri+1].style.left = (arr[viTri+1].offsetLeft-10) + 'px';
            }
            if (arr[viTri].offsetLeft == -400) {
                arr[viTri].style.left = 400 + 'px';
                viTri++;
                if (viTri == countImage) {
                    viTri = 0;
                }
            } else {
                firstImage = false;
                setTimeout(function() {
                    loadLeft(viTri)
                }, 10)
            }
        }

        function loadRight(viTri) {
            console.log(viTri)
            let vt = -1;
            arr[viTri].style.left = (arr[viTri].offsetLeft + 10) + 'px';
            if (viTri == 0) {
                vt = countImage - 1;
                arr[vt].style.left = (arr[vt].offsetLeft + 10) + 'px';
            } else {
                vt = viTri - 1;
                arr[vt].style.left = (arr[vt].offsetLeft + 10) + 'px'; 
            }
            if (arr[vt].offsetLeft != 0) {
                setTimeout(function() {
                    loadRight(viTri)
                }, 10)
            }
        }

        function showMiniImage() {
            let i = 0;
            image[0].addEventListener('click',function() {
                viTri = getSpot();
                let vt =viTri;
                tam = viTri;
                for (i = 0; i < viTri; i++) {
                    tam++;
                    checkPlace(1);
                }
            })
            image[1].addEventListener('click',function() {
                viTri = getSpot();
                
            })
            image[2].addEventListener('click',function() {
                viTri = getSpot();
                
            })
            image[3].addEventListener('click',function() {
                viTri = getSpot();
                
            })
        }

        return{
            checkPlace: checkPlace,
            loadLeft: loadLeft,
            loadRight: loadRight,
            showMiniImage: showMiniImage
        }
    })()
    var button = document.getElementsByTagName('input');
    button[0].addEventListener('click',function() {
        slideModule.checkPlace(1);
    })

    button[1].addEventListener('click',function() {
        slideModule.checkPlace(0);
    })
    
    slideModule.showMiniImage();
}
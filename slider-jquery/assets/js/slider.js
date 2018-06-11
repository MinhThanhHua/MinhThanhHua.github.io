$('.miniImage img').click(function() {
    var name = $(this).attr('alt');
    $('#slider').attr('src','image/'+name+'.jpg');
    $('#slider').attr('alt',name);
    
})

function changeImage(preOrNext) {
    let imageName = $('#slider').attr('alt');
    let arrImage = addArr();
    let arrImageLen = arrImage.length;
    let placeImage = arrImage.indexOf(imageName)
    let placeNextImage = placeImage + preOrNext;
    if (placeNextImage < 0){
        placeNextImage = arrImageLen-1;
    }
    if (placeNextImage == arrImageLen){
        placeNextImage = 0;
    }
    $('#slider').attr('src','image/'+arrImage[placeNextImage]+'.jpg');
    $('#slider').attr('alt',arrImage[placeNextImage]);
}
function  addArr() {
    let miniImage = $('.miniImage img');
    let miniImageLen = miniImage.length;
    let countImage = 0;
    let arr = [];
    for (countImage = 0; countImage < miniImageLen; countImage++){
        arr[countImage] = miniImage[countImage].alt;
    }
    return arr;
}
$(document).ready(function() {
    setInterval('autoLoad()',4000);
}) 
function autoLoad() {
    let imageName = $('#slider').attr('alt');
    let arr = addArr();
    let placeImageNow = arr.indexOf(imageName);
    placeImageNow++;
    if (placeImageNow > 3){
        placeImageNow = 0;
    }
    $('#slider').attr('src','image/'+arr[placeImageNow]+'.jpg');
    $('#slider').attr('alt',arr[placeImageNow]);
    autoOpacity(placeImageNow);
    
}
function autoOpacity(place) {
    let arr = addArr();
    let opacity = 0.5;
    $('#slider').css({'opacity':opacity});
    checkOpacity();
    function checkOpacity() {
        if (opacity < 1){
            setTimeout(function() {
                opacity += 0.1;
                checkOpacity();
            },150)
            $('#slider').css({'opacity':opacity});
        }
    }
}
(function () {
    'use strict';

$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

var json = {"images": [
    {
        "src": "./img/death-breath.jpg",
        "title": "Title 1",
        "price": "1200",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/waza.jpg",
        "title": "Title 2",
        "price": "3600",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/Firefox_wallpaper.png",
        "title": "Title 3",
        "price": "4500",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/Firefox_wallpaper.png",
        "title": "Title 4",
        "price": "800",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/Firefox_wallpaper.png",
        "title": "Title 5",
        "price": "9999",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/death-breath.jpg",
        "title": "Title 6",
        "price": "367",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/death-breath.jpg",
        "title": "Title 7",
        "price": "1000",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/waza.jpg",
        "title": "Title 8",
        "price": "3400",
        "captionHover": "title hov",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    }
]};


var mainImgId = 0;

window.onload = function drawAuctions(){

    for(var i=0; i<json.images.length; i++) {
        var thumb = document.createElement('div');
        thumb.className = 'thumbnail col-xs-12 col-sm-4 col-md-3 text-center';
        thumb.id = i;

        var img = document.createElement('img');
        img.className = 'img-responsive image';
        img.src = json.images[i].src;

        var cap = document.createElement('div');
        cap.className = 'caption';

        var h4 = document.createElement('h4');
        h4.innerHTML = json.images[i].title;

        var capHov = document.createElement('div');
        capHov.className = 'caption-hover';

        var h4Hov = document.createElement('h4');
        h4Hov.innerHTML = json.images[i].price + " zł";

        var p2 = document.createElement('p');
        p2.innerHTML = json.images[i].captionHover;

        var metro = document.getElementById("metro");
        metro.appendChild(thumb);
        thumb.appendChild(img);
        thumb.appendChild(cap);
        cap.appendChild(h4);
        thumb.appendChild(capHov);
        capHov.appendChild(h4Hov);
        capHov.appendChild(p2);
    }
};

$('#metro').on('click', '.thumbnail', function () {
    mainImgId = parseInt(jQuery(this).attr('id'));

    $('#metro').fadeOut( function(){
        $.get('./subpage2.html', function(data) {
            var $data = $(data);
            $data = $data.find('#main-row');
            $('#metro').replaceWith($data);
            loadCoverFlow(mainImgId);
        });
    });

});


$('#main-content').on('click','#nextImgCol .img-responsive', function () {
        var imgSrcPrev = json.images[mainImgId].src;
        var imgSrc = json.images[mainImgId+1].src;
    if(mainImgId+2 < json.images.length){
        var imgSrcNext = json.images[mainImgId + 2].src;}
        var h3 = json.images[mainImgId+1].title;
        var p = json.images[mainImgId+1].caption;
        var price = json.images[mainImgId+1].price;

        $('#previousImgWrap').fadeOut(function () {
        $('#previousImgWrap .img-responsive').attr('src', imgSrcPrev);});

        $('#mainImgCol').fadeOut(function () {
            $('#mainImgCol .img-responsive').attr('src', imgSrc);});
        $('#mainCapCol').fadeOut(function () {
            $('.covFlow h3').text(h3);
            $('.covFlow p').text(p);
            $('.covFlow h1').text(price + " zł");
        });

        $('#nextImgWrap').fadeOut(function () {
            if(mainImgId+2 < json.images.length){
            $('#nextImgCol .img-responsive').attr('src', imgSrcNext);}
        });
        if(mainImgId == 0){$('#previousImgWrap ').delay(400).fadeIn(500);}
        else{$('#previousImgWrap ').fadeIn(500);}
        $('#mainImgCol').fadeIn();
        $('#mainCapCol').fadeIn();
        if(mainImgId+2 < json.images.length){$('#nextImgWrap').fadeIn(500);}

        mainImgId++;
});

$('#main-content').on('click','#previousImgCol .img-responsive', function () {
        if(mainImgId-2 >= 0){
            var imgSrcPrev = json.images[mainImgId -2].src;}
        var imgSrc = json.images[mainImgId-1].src;
        var imgSrcNext = json.images[mainImgId].src;

        var h3 = json.images[mainImgId-1].title;
        var p = json.images[mainImgId-1].caption;
        var price = json.images[mainImgId-1].price;

        $('#nextImgWrap').fadeOut(function () {
            $('#nextImgWrap .img-responsive').attr('src', imgSrcNext);});

        $('#mainImgCol').fadeOut(function () {
            $('#mainImgCol .img-responsive').attr('src', imgSrc);});
        $('#mainCapCol').fadeOut(function () {
            $('.covFlow h3').text(h3);
            $('.covFlow p').text(p);
            $('.covFlow h1').text(price + " zł");
        });

        $('#previousImgWrap').fadeOut(function () {
            if(mainImgId-2 >= 0){
                $('#previousImgWrap .img-responsive').attr('src', imgSrcPrev);}
        });
        if(mainImgId == json.images.length-1){$('#nextImgWrap ').delay(400).fadeIn(500);}
        else{$('#nextImgWrap').fadeIn(500);}
        $('#mainImgCol').fadeIn();
        $('#mainCapCol').fadeIn();
        if(mainImgId-2 >= 0){$('#previousImgWrap').fadeIn(500);}

        mainImgId--;
});


    function loadCoverFlow(mainThumId) {
    if(mainThumId-1 >= 0) {
        var prevImg = document.createElement('img');
        prevImg.className = 'img-responsive';
        prevImg.src = json.images[mainThumId - 1].src;
    }

    if(mainThumId+1 < json.images.length){
        var nextImg = document.createElement('img');
        nextImg.className = 'img-responsive';
        nextImg.src = json.images[mainThumId + 1].src;
    }

    var prevImgCol = document.createElement('div');
    prevImgCol.className = 'col-xs-3';
    prevImgCol.id = 'previousImgCol';

    var prevImgWrap = document.createElement('div');
    prevImgWrap.id = 'previousImgWrap';

    var mainImgCol = document.createElement('div');
    mainImgCol.className = 'col-xs-6';
    mainImgCol.id = 'mainImgCol';

    var nextImgCol = document.createElement('div');
    nextImgCol.className = 'col-xs-3';
    nextImgCol.id = 'nextImgCol';


    var nextImgWrap = document.createElement('div');
    nextImgWrap.id = 'nextImgWrap';

    var mainImg = document.createElement('img');
    mainImg.className = 'img-responsive';
    mainImg.src = json.images[mainThumId].src;

    var prevCapCol = document.createElement('div');
    prevCapCol.className = 'col-xs-3';
    prevCapCol.id = 'previousCapCol';

    var arrowPrev = document.createElement('div');
    arrowPrev.className = 'arrowPrev';

    var mainCapCol = document.createElement('div');
    mainCapCol.className = 'col-xs-6';
    mainCapCol.id = 'mainCapCol';

    var nextCapCol = document.createElement('div');
    nextCapCol.className = 'col-xs-3';
    nextCapCol.id = 'nextCapCol';

    var arrowNext = document.createElement('div');
    arrowNext.className = 'arrowNext';

    var capCovFlow = document.createElement('div');
    capCovFlow.className = 'title covFlow';

    var capCovHead = document.createElement('h3');
    capCovHead.innerHTML = json.images[mainThumId].title;

    var capCov = document.createElement('p');
    capCov.innerHTML = json.images[mainThumId].caption;

    var capCovPrice = document.createElement('h1');
    capCovPrice.innerHTML = json.images[mainThumId].price + " zł";

    var mainRow = document.getElementById("main-row");
    mainRow.appendChild(prevImgCol);
    if(mainThumId-1 >= 0) {
        prevImgCol.appendChild(prevImgWrap);
        prevImgWrap.appendChild(prevImg)
        prevImgWrap.appendChild(arrowPrev);
    }
    mainRow.appendChild(mainImgCol);
    mainImgCol.appendChild(mainImg);
    mainRow.appendChild(nextImgCol);
    if(mainThumId+1 < json.images.length) {
        nextImgCol.appendChild(nextImgWrap);
        nextImgWrap.appendChild(nextImg)
        nextImgWrap.appendChild(arrowNext);
    }
    mainRow.appendChild(prevCapCol);
    mainRow.appendChild(mainCapCol);
    mainCapCol.appendChild(capCovFlow);
    capCovFlow.appendChild(capCovHead);
    capCovFlow.appendChild(capCov);
    capCovFlow.appendChild(capCovPrice);
    mainRow.appendChild(nextCapCol);
}

}());
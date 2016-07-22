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
    $('#metro').fadeOut( function(){
        $.get('./subpage2.html', function(data) {
            var $data = $(data);
            $data = $data.find('#main-row');
            $('#metro').replaceWith($data);
            loadCoverFlow(Id);
        });
    });
    var Id = parseInt(jQuery(this).attr('id'));
});

$('#main-content').on('click', '#previousImgCol .img-responsive', function () {
    $('#main-row').fadeOut( function(){
        $.get('./subpage2.html', function(data) {
            var $data = $(data);
            $data = $data.find('#main-row');
            $('#main-row').replaceWith($data);
            loadCoverFlow(Id);
        });
             var Id = parseInt($("#"+(jQuery(this).attr('id')+ " #previousImgCol div:first")).attr('id'));
    });
});

$('#main-content').on('click', '#nextImgCol .img-responsive', function () {
    $('#main-row').fadeOut( function(){
        $.get('./subpage2.html', function(data) {
            var $data = $(data);
            $data = $data.find('#main-row');
            $('#main-row').replaceWith($data);
            loadCoverFlow(Id);
        });
        var Id = parseInt($("#"+(jQuery(this).attr('id')+ " #nextImgCol div:first")).attr('id'));
    });
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

    var prevId = document.createElement('div');
    prevId.id = mainThumId-1;

    var mainImgCol = document.createElement('div');
    mainImgCol.className = 'col-xs-6';
    mainImgCol.id = 'mainImgCol';

    var nextImgCol = document.createElement('div');
    nextImgCol.className = 'col-xs-3';
    nextImgCol.id = 'nextImgCol';

    var nextId = document.createElement('div');
    nextId.id = mainThumId+1;

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
        prevImgCol.appendChild(prevId);
        prevId.appendChild(prevImg);
        prevId.appendChild(arrowPrev);
    }
    mainRow.appendChild(mainImgCol);
    mainImgCol.appendChild(mainImg);
    mainRow.appendChild(nextImgCol);
    if(mainThumId+1 < json.images.length) {
        nextImgCol.appendChild(nextId);
        nextId.appendChild(nextImg);
        nextId.appendChild(arrowNext);
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
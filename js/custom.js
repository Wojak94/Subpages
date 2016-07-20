$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});



var json = {"images": [
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 1",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/waza.jpg",
        "caption": "author 2",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/Firefox_wallpaper.png",
        "caption": "author 3",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 4",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 5",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 6",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 7",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/waza.jpg",
        "caption": "8",
        "headerHover": "Header hover",
        "captionHover": "caption hov",
    }

]};



window.onload = function drawAuctions(){

    for(var i=0; json.images.length; i++) {
        var thumb = document.createElement('div');
        thumb.className = 'thumbnail col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center';
        thumb.id = i;

        var img = document.createElement('img');
        img.className = 'img-responsive image';
        img.src = json.images[i].src;

        var cap = document.createElement('div');
        cap.className = 'caption';

        var p = document.createElement('p');
        p.innerHTML = json.images[i].caption;

        var capHov = document.createElement('div');
        capHov.className = 'caption-hover';

        var h5 = document.createElement('h5');
        h5.innerHTML = json.images[i].headerHover;

        var p2 = document.createElement('p');
        p2.innerHTML = json.images[i].captionHover;

        var metro = document.getElementById("metro");
        metro.appendChild(thumb);
        thumb.appendChild(img);
        thumb.appendChild(cap);
        cap.appendChild(p);
        thumb.appendChild(capHov);
        capHov.appendChild(h5);
        capHov.appendChild(p2);
    }

};

$('#metro').on('mouseenter', '.thumbnail', function() {
    $(this).find('.caption').stop().fadeOut();
    $(this).find('.caption-hover').stop().fadeIn();
});

$('#metro').on('mouseleave', '.thumbnail', function() {
    $(this).find('.caption').stop().fadeIn();
    $(this).find('.caption-hover').stop().fadeOut();
});




$('#metro').on('click', '.thumbnail', function () {
    $('#metro').fadeOut('fast', function(){
        $.get('./subpage2.html', function(data) {
            var $data = $(data);
            $data = $data.find('#main-row');
            $('#metro').replaceWith($data);
            loadCoverFlow();
        });


});

    var prevImgSrc = jQuery(this).prev().find('img:first').attr('src');
    var mainImgSrc =jQuery(this).find('img:first').attr('src');
    var nextImgSrc = jQuery(this).next().find('img:first').attr('src');


    function loadCoverFlow() {
        var prevImgCol = document.createElement('div');
        prevImgCol.className = 'col-xs-2';
        prevImgCol.id = 'previousImgCol';

        var mainImgCol = document.createElement('div');
        mainImgCol.className = 'col-xs-8';
        mainImgCol.id = 'mainImgCol';


        var nextImgCol = document.createElement('div');
        nextImgCol.className = 'col-xs-2';
        nextImgCol.id = 'nextImgCol';

        var prevImg = document.createElement('img');
        prevImg.className = 'img-responsive';
        prevImg.src = prevImgSrc;

        var mainImg = document.createElement('img');
        mainImg.className = 'img-responsive';
        mainImg.src = mainImgSrc;

        var nextImg = document.createElement('img');
        nextImg.className = 'img-responsive';
        nextImg.src = nextImgSrc;


        var mainRow = document.getElementById("main-row");
        mainRow.appendChild(prevImgCol);
            prevImgCol.appendChild(prevImg);
        mainRow.appendChild(mainImgCol);
            mainImgCol.appendChild(mainImg);
        mainRow.appendChild(nextImgCol);
            nextImgCol.appendChild(nextImg);

    }



});


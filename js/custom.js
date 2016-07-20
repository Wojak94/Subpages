var json = {"images": [
    {
        "src": "./img/death-breath.jpg",
        "caption": "author 1",
        "headerHover": "xDDDD",
        "captionHover": "asdasdasd"
    },
    {
        "src": "./img/death-breath.jpg",
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



window.onload = function dupa(){

    for(var i=0; json.images.length; i++) {
        var thumb = document.createElement('div');
        thumb.className = 'thumbnail col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center';


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

// $('.thumbnail').hover(
//
//     function () {
//         $(this).find('.caption').stop().fadeOut();
//         $(this).find('.caption-hover').stop().fadeIn();
//
//     },
//
//     function () {
//         $(this).find('.caption').stop().fadeIn();
//         $(this).find('.caption-hover').stop().fadeOut();
//     });


$('#metro').on('mouseenter', '.thumbnail', function() {
    $(this).find('.caption').stop().fadeOut();
    $(this).find('.caption-hover').stop().fadeIn();
});

$('#metro').on('mouseleave', '.thumbnail', function() {
    $(this).find('.caption').stop().fadeIn();
    $(this).find('.caption-hover').stop().fadeOut();
});
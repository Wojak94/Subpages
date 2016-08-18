(function () {
    'use strict';

//-------------------------------------------------------------------Disable caching of AJAX responses
$.ajaxSetup ({
    cache: false
});

//-------------------------------------------------------------------Json that stores auctions objects
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
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
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
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    },
    {
        "src": "./img/Firefox_wallpaper.png",
        "title": "Title 5",
        "price": "9999",
        "captionHover": "asdasdasd",
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
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
        "caption": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    }
]};

//-------------------------------------------------------------------Variable that stores currently selected image
var mainId = 0;

//-------------------------------------------------------------------Dynamically drawing set of auctions on page load
window.onload = drawAuctions();

//-------------------------------------------------------------------Listener of browser history manipulation by user
window.addEventListener("popstate", function(event) {
    if(event.state == null){                                                        //if state object of history is null draw main page
        drawAuctions();
    }
    else {
        var stateObject = event.state;

        if ((stateObject.url).indexOf('covFlow') != -1){                            //else check url stored in history.state if it contains 'covFlow' substring
            var imgId = (stateObject.url).charAt(stateObject.url.length - 1);       //if so, gather last char which is auction number
            loadCoverFlow(imgId);                                                   //and pass it to coverFlow drawing function
        }
    }
});

//-------------------------------------------------------------------Logo button click handler
$("#logoBtn").click(function(e) {
    e.preventDefault();                                                             //prevent changing site to href
    history.pushState(null, null, ' ');                                             //push history state
    drawAuctions();                                                                 //then draw auctions
});

//-------------------------------------------------------------------Function drawing auctions on main page
function drawAuctions(){

if($('#main-row').length){                                                          //if current page contains #main-row div
    $('#main-row').fadeOut(300, function(){                                         //which means its coverFlow page, remove it
            $('#main-row').remove();
})}

if($('#mainContentWrap').length){                                                   //if current page contains it, its already main page
        location.reload();                                                          //so just reload it
        return;
}
        $('#myCarousel').fadeIn();                                                  //show banner carousel with fadeIn
        $('#myCarousel').show();

        var mainContentWrap = document.createElement('div');
        mainContentWrap.className = 'hidden';                                       //setting div to hidden for fadeIn when its ready
        mainContentWrap.id = 'mainContentWrap';

        var container = document.getElementById("main-content");
        container.appendChild(mainContentWrap);

    for(var i=0; i<json.images.length; i++) {                                       //main loop that draws each thumbnail until end of json
                                                                                    //storing each auction
        var thumbCol = document.createElement('div');
        thumbCol.className = 'col-xs-12 col-sm-4 col-md-3 thumbCol';

        var thumb = document.createElement('div');
        thumb.className = 'thumbnail text-center';
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

        var shadow = document.createElement('div');
        shadow.className = 'shadow';

        mainContentWrap.appendChild(thumbCol);
        thumbCol.appendChild(thumb);
        thumb.appendChild(img);
        thumb.appendChild(cap);
        cap.appendChild(h4);
        thumb.appendChild(capHov);
        capHov.appendChild(h4Hov);
        capHov.appendChild(p2);
        thumb.appendChild(shadow);
    }
    $(document).ready(function () {                                                 //when populating page is done, fadeIn content
        $('#mainContentWrap').fadeIn(1000).removeClass('hidden');
    });
}

//-------------------------------------------------------------------Click on auction thumbnail event handler

$('#main-content').on('click', '.thumbnail', function () {
    mainId = parseInt(jQuery(this).attr('id'));                                     //sets global var containing id of main img in coverFlow
                                                                                    //from id of clicked thumbnail
    $('#mainContentWrap').fadeOut( function(){
        loadCoverFlow(mainId);                                                      //fadeOut of main content, then draw coverFlow
    });
    history.pushState({url: '#covFlow' + mainId}, null, '#covFlow' + mainId);       //pushing history state of loaded covFlow main image
});

//-------------------------------------------------------------------Coverflow loading function

    function loadCoverFlow(id) {

        mainId = id;                                                                //initializing variables of main and previous image id
        var prevId = id - 1;                                                        //and iterator that contains information about id of which
        var i = 0;                                                                  //image is currently drawn

        var mainRow = document.createElement('div');
        mainRow.className = 'row hidden';
        mainRow.id = 'main-row';

        var covFlow = document.createElement('div');
        covFlow.className = 'col-xs-12';
        covFlow.id = 'covFlow';

        var covList = document.createElement('ul');
        covList.id = 'covList';

        var mainContent = document.getElementById('main-content');
        $(mainContent).empty();

        mainContent.appendChild(mainRow);
        mainRow.appendChild(covFlow);
        covFlow.appendChild(covList);

        //---------------------------------------------------------------------------------FirstElements

        if (mainId > 1) {                                                           //load previous hidden images if any

            for (i; prevId > i; i++) {
                var listElem = document.createElement('li');
                $(listElem).css('transform', 'translate3d(0, 0, 0) rotateY(-90deg) scale(0.8)');

                var img = document.createElement('img');
                img.src = json.images[i].src;

                covList.appendChild(listElem);
                listElem.appendChild(img);
            }
        }

        //---------------------------------------------------------------------------------PrevElement

        if (mainId > 0) {                                                           //load previous image if it exist

            var listElem = document.createElement('li');
            $(listElem).css('transform', 'translate3d(0, 0, 0) rotateY(-45deg) scale(0.8)');
            $(listElem).css('opacity', '0.6');
            $(listElem).css('z-index', '1');
            listElem.id = 'prev';

            var img = document.createElement('img');
            img.src = json.images[i].src;

            covList.appendChild(listElem);
            listElem.appendChild(img);
            i++;
        }

        //---------------------------------------------------------------------------------MainElement

        var listElem = document.createElement('li');
        $(listElem).css('transform', 'translate3d(100%, 0, 0) rotateY(0deg) scale(1)');
        $(listElem).css('opacity', '1');
        $(listElem).css('z-index', '2');
        listElem.id = 'main';

        var img = document.createElement('img');
        img.src = json.images[i].src;

        covList.appendChild(listElem);
        listElem.appendChild(img);
        i++;

        //---------------------------------------------------------------------------------NextElement

        if (mainId < (json.images.length-1)) {                                      //load next image if it exist

            var listElem = document.createElement('li');
            $(listElem).css('transform', 'translate3d(200%, 0, 0) rotateY(45deg) scale(0.8)');
            $(listElem).css('opacity', '0.6');
            $(listElem).css('z-index', '1');
            listElem.id = 'next';

            var img = document.createElement('img');
            img.src = json.images[i].src;

            covList.appendChild(listElem);
            listElem.appendChild(img);
            i++;
        }

        //----------------------------------------------------------------------------------ClosingElements

        if (mainId < (json.images.length-2)) {                                      //load next hidden images if any

            for (i; json.images.length > i; i++) {
                var listElem = document.createElement('li');
                $(listElem).css('transform', 'translate3d(200%, 0, 0) rotateY(90deg) scale(0.8)');

                var img = document.createElement('img');
                img.src = json.images[i].src;

                covList.appendChild(listElem);
                listElem.appendChild(img);
            }
        }

        var prevCapCol = document.createElement('div');
        prevCapCol.className = 'col-xs-1 col-md-3';
        prevCapCol.id = 'previousCapCol';

        var mainCapCol = document.createElement('div');
        mainCapCol.className = 'col-xs-10 col-md-6';
        mainCapCol.id = 'mainCapCol';

        var nextCapCol = document.createElement('div');
        nextCapCol.className = 'col-xs-1 col-md-3';
        nextCapCol.id = 'nextCapCol';

        var capCovFlow = document.createElement('div');
        capCovFlow.className = 'title covFlow';

        var capCovHead = document.createElement('h3');
        capCovHead.innerHTML = json.images[mainId].title;

        var capCov = document.createElement('p');
        capCov.innerHTML = json.images[mainId].caption;

        var capCovPrice = document.createElement('h1');
        capCovPrice.innerHTML = json.images[mainId].price + " zł";

        var bidSection = document.createElement('div');
        bidSection.className = 'col-xs-12';
        bidSection.id = 'bidSection';

        var leftBid = document.createElement('div');
        leftBid.className = 'col-xs-hidden col-md-3';
        leftBid.id = 'leftBid';

        var mainBid = document.createElement('div');
        mainBid.className = 'col-xs-12 col-md-3';
        mainBid.id = 'mainBid';

        var rightBid = document.createElement('div');
        rightBid.className = 'col-xs-hidden col-md-3';
        rightBid.id = 'rightBid';

        var inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.id = 'bid-input';

        var input = document.createElement('input');
        input.type = 'number';
        input.className = 'form-control';

        var spanInput = document.createElement('span');
        spanInput.className = 'input-group-addon';
        spanInput.innerHTML = "PLN";

        var bidBtnWrap = document.createElement('div');
        bidBtnWrap.className = 'col-xs-12 col-md-3';
        bidBtnWrap.id = 'bid-btn';

        var buttonBid = document.createElement('button');
        buttonBid.type = 'button';
        buttonBid.className = 'btn btn-success';
        buttonBid.id = 'bid-button';

        var h4BtnBid = document.createElement('h4');
        h4BtnBid.innerHTML = "LICYTUJ";

        mainRow.appendChild(prevCapCol);
        mainRow.appendChild(mainCapCol);
        mainCapCol.appendChild(capCovFlow);
        capCovFlow.appendChild(capCovHead);
        capCovFlow.appendChild(capCov);
        capCovFlow.appendChild(capCovPrice);
        mainRow.appendChild(nextCapCol);
        mainRow.appendChild(bidSection);
        bidSection.appendChild(leftBid);
        bidSection.appendChild(mainBid);
        mainBid.appendChild(inputGroup);
        inputGroup.appendChild(input);
        inputGroup.appendChild(spanInput);
        bidSection.appendChild(bidBtnWrap);
        bidBtnWrap.appendChild(buttonBid);
        buttonBid.appendChild(h4BtnBid);
        bidSection.appendChild(rightBid);

        $(document).ready(function () {                                                 //when populating page is done, fadeIn content
            $('#main-row').fadeIn().removeClass('hidden');
            $('#myCarousel').slideUp();
        });


    }


//-------------------------------------------------------------------------------------Prev Image Click

    $('#main-content').on('click', '#covFlow #prev', function () {

        var prevImg = $('#covList #prev');
        var prevImg2 = prevImg.prev();
        var mainImg = $('#covList #main');
        var nextImg = $('#covList #next');

        console.log(prevImg2);
        console.log(prevImg);
        console.log(mainImg);
        console.log(nextImg);

        prevImg2.css('transform', 'translate3d(0,0,0) rotateY(-45deg) scale(0.8)');
        prevImg2.css('opacity', '0.6');
        prevImg2.css('z-index', '1');
        prevImg2.attr('id', 'prev');

        prevImg.css('transform', 'translate3d(100%,0,0) rotateY(0) scale(1)');
        prevImg.css('z-index', '2');
        prevImg.css('opacity', '1');
        prevImg.attr('id', 'main');

        mainImg.css('transform', 'translate3d(200%,0,0) rotateY(45deg) scale(0.8)');
        mainImg.css('z-index', '1');
        mainImg.css('opacity', '0.6');
        mainImg.attr('id', 'next');

        nextImg.css('transform', 'translate3d(200%,0,0) rotateY(90deg) scale(0.8)');
        nextImg.css('opacity', '0');
        nextImg.css('z-index', '0');
        nextImg.removeAttr('id');

        mainId--;

        $('#mainCapCol').fadeOut(300, function () {
            $('.covFlow h3').text(h3);
            $('.covFlow p').text(p);
            $('.covFlow h1').text(price + " zł");
        });
        $('#bidSection').fadeOut(300);

        var h3 = json.images[mainId].title;
        var p = json.images[mainId].caption;
        var price = json.images[mainId].price;

        $('#mainCapCol').fadeIn(300);
        $('#bidSection').fadeIn(300);

        history.replaceState({url: '#covFlow' + mainId}, null, '#covFlow' + mainId);
    });

//-------------------------------------------------------------------------------------Prev Image Hover


    $('#main-content').on('mouseenter', '#covFlow #prev', function () {
        $(this).css('opacity', '1');
    });

    $('#main-content').on('mouseleave', '#covFlow #prev', function () {
        $(this).css('opacity', '0.6');
    });

//-------------------------------------------------------------------------------------Next Image Hover

    $('#main-content').on('mouseenter', '#covFlow #next', function () {
        $(this).css('opacity', '1');
    });

    $('#main-content').on('mouseleave', '#covFlow #next', function () {
        $(this).css('opacity', '0.6');
    });


//-------------------------------------------------------------------------------------Next Image Click

    $('#main-content').on('click', '#covFlow #next', function () {

        var prevImg = $('#covList #prev');
        var mainImg = $('#covList #main');
        var nextImg = $('#covList #next');
        var nextImg2 = nextImg.next();

        prevImg.css('transform', 'translate3d(0,0,0) rotateY(-90deg) scale(0.8)');
        prevImg.css('opacity', '0');
        prevImg.css('z-index', '0');
        prevImg.removeAttr('id');

        mainImg.css('transform', 'translate3d(0,0,0) rotateY(-45deg) scale(0.8)');
        mainImg.css('z-index', '1');
        mainImg.css('opacity', '0.6');
        mainImg.attr('id', 'prev');

        nextImg.css('transform', 'translate3d(100%,0,0) rotateY(0) scale(1)');
        nextImg.css('z-index', '2');
        nextImg.css('opacity', '1');
        nextImg.attr('id', 'main');

        nextImg2.css('transform', 'translate3d(200%,0,0) rotateY(45deg) scale(0.8)');
        nextImg2.css('opacity', '0.6');
        nextImg2.css('z-index', '1');
        nextImg2.attr('id', 'next');

        mainId++;

        $('#mainCapCol').fadeOut(300, function () {
            $('.covFlow h3').text(h3);
            $('.covFlow p').text(p);
            $('.covFlow h1').text(price + " zł");
        });
        $('#bidSection').fadeOut(300);

        var h3 = json.images[mainId].title;
        var p = json.images[mainId].caption;
        var price = json.images[mainId].price;

        $('#mainCapCol').fadeIn(300);
        $('#bidSection').fadeIn(300);

        history.replaceState({ url: '#covFlow' + mainId}, null, '#covFlow' + mainId);

    });


    $('.carousel-control.left').click(function() {
        $('#myCarousel').carousel('prev');
    });

    $('.carousel-control.right').click(function() {
        $('#myCarousel').carousel('next');
    });



}());
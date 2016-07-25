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
var mainImgId = 0;

//-------------------------------------------------------------------Dynamically drawing set of auctions on page load
window.onload = drawAuctions();

//-------------------------------------------------------------------Listener of browser history manipulation by user
window.addEventListener("popstate", function(event) {
    if(event.state == null){                                                        //if state of history object is null draw main page
        drawAuctions();
    }
    else {
        var stateObject = event.state;

        if ((stateObject.url).indexOf('covFlow') != -1){                            //else check url stored in history.state if it contains 'covFlow' substring
            var imgId = (stateObject.url).charAt(stateObject.url.length - 1);       //if so, gather last char which is auction number
            loadCoverFlow(imgId);                                                   //and pass it to Coverflow drawing function
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
    $('#main-row').fadeOut(300, function(){                                         //which means its Coverflow page, remove it
            $('#main-row').remove();
})}

if($('#mainContentWrap').length){                                                   //if current page contains its already main page
        location.reload();                                                          //reload it
        return;
}
       var mainContentWrap = document.createElement('div');
        mainContentWrap.className = 'hidden';
        mainContentWrap.id = 'mainContentWrap';

        var container = document.getElementById("main-content");
        container.appendChild(mainContentWrap);

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


        mainContentWrap.appendChild(thumb);
        thumb.appendChild(img);
        thumb.appendChild(cap);
        cap.appendChild(h4);
        thumb.appendChild(capHov);
        capHov.appendChild(h4Hov);
        capHov.appendChild(p2);
    }
    $(document).ready(function () {
        $('#mainContentWrap').fadeIn(1000).removeClass('hidden');
    });
}

//-------------------------------------------------------------------Click on auction thumbnail event handler
$('#main-content').on('click', '.thumbnail', function () {
    mainImgId = parseInt(jQuery(this).attr('id'));

    $('#mainContentWrap').fadeOut( function(){
        loadCoverFlow(mainImgId);
    });
    history.pushState({url: '#covFlow' + mainImgId}, null, '#covFlow' + mainImgId);
});


//-------------------------------------------------------------------Coveflow drawing function
    function loadCoverFlow(Id) {
        var mainThumId = parseInt(Id);

        var prevImg = document.createElement('img');
        var arrowPrev = document.createElement('div');

        if(mainThumId-1 >= 0){
            prevImg.src = json.images[mainThumId - 1].src;
            prevImg.className = 'img-responsive';
            arrowPrev.className = 'arrowPrev';
        }
        else {
            prevImg.src = '';
            prevImg.className = 'img-responsive hidden';
            arrowPrev.className = 'arrowPrev hidden';
        }

        var nextImg = document.createElement('img');
        var arrowNext = document.createElement('div');


        if(mainThumId+1 < json.images.length){
            nextImg.src = json.images[mainThumId + 1].src;
            nextImg.className = 'img-responsive';
            arrowNext.className = 'arrowNext';
        }
        else{
            nextImg.src = '';
            nextImg.className = 'img-responsive hidden';
            arrowNext.className = 'arrowNext hidden';
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
        prevCapCol.className = 'col-xs-2 col-md-3';
        prevCapCol.id = 'previousCapCol';

        var mainCapCol = document.createElement('div');
        mainCapCol.className = 'col-xs-8 col-md-6';
        mainCapCol.id = 'mainCapCol';

        var nextCapCol = document.createElement('div');
        nextCapCol.className = 'col-xs-2 col-md-3';
        nextCapCol.id = 'nextCapCol';

        var capCovFlow = document.createElement('div');
        capCovFlow.className = 'title covFlow';

        var capCovHead = document.createElement('h3');
        capCovHead.innerHTML = json.images[mainThumId].title;

        var capCov = document.createElement('p');
        capCov.innerHTML = json.images[mainThumId].caption;

        var capCovPrice = document.createElement('h1');
        capCovPrice.innerHTML = json.images[mainThumId].price + " zł";

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

        var mainRow = document.createElement('div');
        mainRow.className = 'row-fluid';
        mainRow.id = 'main-row';

        var mainContent = document.getElementById('main-content');
        $(mainContent).empty();
        mainContent.appendChild(mainRow);
        mainRow.appendChild(prevImgCol);
        prevImgCol.appendChild(prevImgWrap);
        prevImgWrap.appendChild(prevImg);
        prevImgWrap.appendChild(arrowPrev);
        mainRow.appendChild(mainImgCol);
        mainImgCol.appendChild(mainImg);
        mainRow.appendChild(nextImgCol);
        nextImgCol.appendChild(nextImgWrap);
        nextImgWrap.appendChild(nextImg);
        nextImgWrap.appendChild(arrowNext);
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
    }
}());

//-------------------------------------------------------------------Click on next image in Coverflow event handler
$('#main-content').on('click','#nextImgCol .img-responsive', function () {
        var imgSrcPrev = json.images[mainImgId].src;
        var imgSrc = json.images[mainImgId+1].src;
    if(mainImgId+2 < json.images.length){
        var imgSrcNext = json.images[mainImgId + 2].src;}
        var h3 = json.images[mainImgId+1].title;
        var p = json.images[mainImgId+1].caption;
        var price = json.images[mainImgId+1].price;

        $('#previousImgWrap .img-responsive').removeClass('hidden');
        $('#previousImgWrap .arrowPrev').removeClass('hidden');


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

        $('#bidSection').fadeOut();

        if(mainImgId == 0){$('#previousImgWrap ').delay(400).fadeIn(500);}
        else{$('#previousImgWrap ').fadeIn(500);}
        $('#mainImgCol').fadeIn();
        $('#mainCapCol').fadeIn();
        if(mainImgId+2 < json.images.length){$('#nextImgWrap').fadeIn(500);}
         $('#bidSection').fadeIn(500);

        mainImgId++;
        history.replaceState({ url: '#covFlow' + mainImgId}, null, '#covFlow' + mainImgId);
});

//-------------------------------------------------------------------Click on previous image in Coverflow event handler
$('#main-content').on('click','#previousImgCol .img-responsive', function () {
        if(mainImgId-2 >= 0){
            var imgSrcPrev = json.images[mainImgId -2].src;}
        var imgSrc = json.images[mainImgId-1].src;
        var imgSrcNext = json.images[mainImgId].src;

        var h3 = json.images[mainImgId-1].title;
        var p = json.images[mainImgId-1].caption;
        var price = json.images[mainImgId-1].price;

        $('#nextImgWrap .img-responsive').removeClass('hidden');
        $('#nextImgWrap .arrowNext').removeClass('hidden');

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

        $('#bidSection').fadeOut();

        if(mainImgId == json.images.length-1){$('#nextImgWrap ').delay(400).fadeIn(500);}
        else{$('#nextImgWrap').fadeIn(500);}
        $('#mainImgCol').fadeIn();
        $('#mainCapCol').fadeIn();
        if(mainImgId-2 >= 0){$('#previousImgWrap').fadeIn(500);}
        $('#bidSection').fadeIn(500);

        mainImgId--;
        history.replaceState({url: '#covFlow' + mainImgId}, null, '#covFlow' + mainImgId);
});


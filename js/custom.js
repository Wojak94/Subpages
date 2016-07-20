//
// $('#sidebar').affix({
//     offset: {
//         top: $('#top_navbar').offset().top(),
//         left: 0
//     }
// });

$('.thumbnail').hover(

    function () {
        $(this).find('.caption').stop().fadeOut();
        $(this).find('.caption-hover').stop().fadeIn();

    },

    function () {
        $(this).find('.caption').stop().fadeIn();
        $(this).find('.caption-hover').stop().fadeOut();
});



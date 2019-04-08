// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // Ambil Isi dari si href yang ada di html
    var tujuan = $(this).attr('href');
    // Kemudian Tangkap Element Yang Bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    // console.log ("ok"); ini perintah untuk mengetahui udah berfungsi jquery nya,hehhe
    e.preventDefault(); //Fungsi ini untuk mendisable fungsi href Html yang di ambil dari si e yang di atas
});

// About atau tentang yang memunculkan semacam animasi tulisan yang ada di dalam nya guys
$(window).on('load', function () {
    $('.tentang').addClass('tmuncul');
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});


// Ini Fungsi Parallax Scrool Atau ketika di geser Mouse nya,heheheh,biar ingat aja makanya dibuat gini
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // Fungsi Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    //Memunculkan Gambar secara berurutan pada  Portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                // console.log('ok sudah muncul bosku');
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
        // $('.portfolio .thumbnail').addClass('muncul');
    }
    // Untuk Memunculkan Tulisan Portfolionya ini ya bosku,hehehh
    if (wScroll > $('.h2portfolio').offset().top - 400) {
        // console.log('beres bosku');
        $('.h2portfolio').addClass('h2muncul');
    };
});

// $('.portfolio .thumbnail').addClass('muncul');


// // Fungsi ScroolTOP
// var $backToTop = $(".backTop");
// $backToTop.hide();
// $(window).on('scroll', function() {
//   if ($(this).scrollTop() > 100) {
//     $backToTop.fadeIn();
//   } else {
//     $backToTop.fadeOut();
//   }
// });

// $backToTop.on('click', function(e) {
//   $("html, body").animate({scrollTop: 0}, 500);
// });
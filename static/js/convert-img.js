$(document).ready(function () {
    function OldFiger() {
        $('#cont2').find('.slide_content').each(function (e) {
            let urlImg = $(this).find('img').attr('src');
            let caption = $(this).text();
            let str = `<figure data-fancybox="gallery" href="` + urlImg + `" data-caption="` + caption + `"  class="img-cover fancybox">
            <img src="`+ urlImg + `" alt="">
              <figcaption>`+ caption + `</figcaption>
            </figure>`;
            $(this).replaceWith(str);
        })
    }
    function NewFiger() {
        $('#cont2').find('.wrapper-img').each(function (e) {
            let urlImg = $(this).find('img').attr('src');
            let caption = $(this).text();
            let str = `<figure data-fancybox="gallery" href="` + urlImg + `" data-caption="` + caption + `" class="img-cover fancybox">
            <img src="`+ urlImg + `" alt="">
             <figcaption>`+ caption + `</figcaption>
            </figure>`;
            $(this).replaceWith(str);
        })
    }
    let d = $('#cont2').find('table').attr('border');
    if (d == 0) {
        OldFiger();
    } else {
        NewFiger();
    }
});
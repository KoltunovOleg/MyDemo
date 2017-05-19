$(document).ready(function () {

    //выпадающее меню templates
    $('.templates').hover(function () {
        $(this).children('.templates-container').stop(false, true).fadeIn(300);
    }, function () {
        $(this).children('.templates-container').stop(false, true).fadeOut(300);
    })

    //выпадающее меню
    $('#menu').hover(function () {
        $(this).children('.menu-container').stop(false, true).fadeIn(300);
    }, function () {
        $(this).children('.menu-container').stop(false, true).fadeOut(300);
        
    });


    ////////////////////////////////////////////////////////////
    //выбор img
    $('.gallery-item div').click(function () {
        $('.gallery-item div').removeClass('selected gallery-item-selected');
        $(this).addClass('selected gallery-item-selected');
        toDrowImg(this);

    });


    // canvas
    var canvas = document.getElementById("fabric-canvas");
    var image = canvas.getContext("2d");


    // вывод img в canvas
    function toDrowImg(element) {
        var value = $(element).children("img").attr("src");
        var newSrc = value.replace("thumbnail", "full-size");
        // Создаём изображение
        var img = new Image();
        var w = $("#fabric-canvas").attr("width");
        var h = $("#fabric-canvas").attr("height");



        //получить размеры загружаемого изображения
        img.onload = function () {
            var intImageWidth = this.width;
            var intImageHeight = this.height;

            // работа с canvas
            
            if (h > "242") {
                var fx = (intImageWidth - w) / 2;
                var fy = function () {
                    if (intImageHeight < +h) {
                        return 0;
                    } else {
                        return (intImageHeight - h) / 2;
                    }
                }();
                image.drawImage(img, fx, fy, w, h, 0, 0, w, h);
            } else {
                var fy = (((+h * intImageWidth) / +w) - h) / 2;
                image.drawImage(img, 0, fy, intImageWidth, intImageHeight, 0, 0, w, h);
            }
        }
        img.src = newSrc;
        
        console.log(canvas.toDataURL("image/png"));
        $("#download-button").attr("href", canvas.toDataURL("image/png"));
    };

    //selection size
    $('.image-sizes .image-sizes-item').click(function () {
        $('.image-sizes .image-sizes-item').removeClass('selected');
        $(this).addClass('selected');
        toChangeSize(this);
    });


    // changing size of canvas
    function toChangeSize(element) {
        var idElem = $(element).attr('id');

        if (idElem == 'tall') {
            $("#fabric-canvas, .upper-canvas").attr('height', '725');
            toDrowImg('.gallery-item-selected');
        } else if (idElem == 'square') {
            $("#fabric-canvas, .upper-canvas").attr('height', '484');
            toDrowImg('.gallery-item-selected');
        } else if (idElem == 'wide') {
            $("#fabric-canvas, .upper-canvas").attr('height', '242');
            toDrowImg('.gallery-item-selected');
        }

    };


    ///////////////////////////////////////////////////

    // выбор фильтра
    $('.filters-selector').click(function () {
        $(".filters_list").slideToggle('fast');
        $(".filters_list").css('overflow-x', 'visible');
        $(".filters-selector #btn").css('transform', ' rotate(180deg)');

    });


    // выпадение списка фильтров
    $('ul.filters_list li').click(function () {
        var tx = $(this).html();
        $(".filters_list").slideUp('fast');
        $(".filters-selector #btn").css('transform', ' rotate(0)');
        $(".filters-selector--box").html(tx);
        toFilter(this);
    });


    //фильтры
    function toFilter(element) {
        if ($(element).children('div:first').hasClass("s-filter--none")) {
            $("#fabric-canvas").css({ 'filter': 'none', '-webkit-filter': 'none' });
            $(".upper-canvas").css('background', 'none');//+
        };
        if ($(element).children('div:first').hasClass("s-filter--light-contrast")) {
            $("#fabric-canvas").css({ 'filter': 'brightness(0.7)', '-webkit-filter': ' brightness(0.7)' });
            $(".upper-canvas").css('background', 'none');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--heavy-contrast")) {
            $("#fabric-canvas").css({ 'filter': 'brightness(0.5)', '-webkit-filter': 'brightness(0.5)' });
            $(".upper-canvas").css('background', 'none');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--light-blur")) {
            $("#fabric-canvas").css({ 'filter': 'blur(3px)', '-webkit-filter': 'blur(3px)' });
            $(".upper-canvas").css('background', 'none');//+
        };
        if ($(element).children('div:first').hasClass("s-filter--heavy-blur")) {
            $("#fabric-canvas").css({ 'filter': 'blur(6px)', '-webkit-filter': 'blur(6px)' });
            $(".upper-canvas").css('background', 'none');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--grayscale")) {
            $("#fabric-canvas").css({ 'filter': 'grayscale(100%)', '-webkit-filter': 'grayscale(100%)' });
            $(".upper-canvas").css('background', 'none');
        };
        if ($(element).children('div:first').hasClass("s-filter--blur-grayscale")) {
            $("#fabric-canvas").css({ 'filter': 'blur(3px) grayscale(100%)', '-webkit-filter': 'blur(3px) grayscale(100%)' });
            $(".upper-canvas").css('background', 'none');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--red-tint")) {
            $(".upper-canvas").css('background', 'rgba(255,0,0, 0.3)');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--green-tint")) {
            $(".upper-canvas").css('background', 'rgba(0,255,0, 0.3)');//-
        };
        if ($(element).children('div:first').hasClass("s-filter--blue-tint")) {
            $(".upper-canvas").css('background', 'rgba(0,0,255, 0.3)');//-
        };
    };



    //список медиа для загрузки изображения
    $('.btn-primary').click(function () {
        $(".share-dropdown").slideToggle('fast');
    });

    

}); 
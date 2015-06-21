$(document).ready(function() {
    var centerX = ($(window).width() / 2) - 250;
    var centerY = ($(window).height() / 2) - 250;
    var scale = scalefactor();
    var anglesNow = [0,0,0,0,0,0];
    var count = 0;
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(document).mousemove(function(e) {
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var x = e.pageX;
            var y = e.pageY;
            var rotateY = (360 / winWidth) * y;
            var rotateX = (360 / winHeight) * x;
            if (count === 0) {
                $('.cube').css({
                    'transform': '  translate3d(100%, 100%, -1000px)   rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)',
                });
            }
        }
    });
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.cube').css("transform","translate3d(0%,0%,-1000px)  rotateY(-15deg) rotateX(-10deg)");
    }
    if (count === 0) {
        $(".cube").click(function() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $('.cube').css({
                    'transform': ' translate3d(0%, 0%, -1000px) rotateY(0deg) rotateX(0deg) ',
                    'transition': ' all 1.8s ease',
                });
            }else{
                $('.cube').css({
                    'transform': ' translate3d(100%, 80%, -1000px) rotateY(' + '0' + 'deg) rotateX(' + '0' + 'deg) ',
                    'transition': ' all 1.8s ease',
                    cursor: 'default'
                });
            }
            $('.side.top, .side.left, .side.right,.side.bottom,.side.back,.side.front,.cube').addClass('flat');
            count += 1;
            $(".cube .bottom .back").css("background","#fff");
            $(this).off();
            setTimeout(function() {
                $('.cube, .cube .side').css('-webkit-transform-style','flat').css('transform','none');
                transform(2, 'translate');
            }, 1800);
            setTimeout(function(){
                $(".unfolded").css({
                    display: 'inline'
                });
                $(".cube").css("background","#fff");
            },2000);
        });
    }
    var angleCount = 3;

    function transform(face, transformType) {
        //rotation matrix, with scale according to scale factor
        var value = [
            [0, -scale, scale, 0],
            [-scale, 0, 0, -scale],
            [0, scale, -scale, 0],
            [scale, 0, 0, scale]
        ];
        var moveTo = [
            [centerX, centerY + 480, '50% -46% 0'],
            [centerX + 480, centerY, '-46% 50% 0'],
            [centerX, centerY, '50% 50% 0'],
            [centerX - 480, centerY, '146% 50% 0'],
            [centerX, centerY - 480, '50% 146% 0'],
            [centerX, centerY - 960, '50% 242% 0']
        ];
        if (transformType == 'rotate') {
            //add one to the rotation counter
            angleCount += 1;
            if (angleCount > 3) {
                angleCount = 0;
            }
            //if not, just preserve previous rotation and translate
        }
        // transformation matrices for rotating around the face at position moveTo[]
        $('.cube').css({
            transform: 'matrix(' + value[3] + ',' 
            					 + moveTo[face][0] + ',' 
            					 + moveTo[face][1] + ')',
            transition: "all 0.3s ease",
            'transform-origin': moveTo[face][2]
        });
    }
    var $elem = $('#page-content3');
    $('div.rotate-button').click(function() {
        var id = $(this).attr('id');
        // transform(id, 'rotate');

        // caching the object for performance reasons

        switch(id){
            case '0':
                $elem = $('#page-content3');
                break;
            case '1':
                $elem = $('#page-content5');
                break;
            case '2':
                $elem = $('#page-content0');
                break;
            case '3':
                $elem = $('#page-content4');
                break;
            case '4':
                $elem = $('#page-content2');
                break;
            case '5':
                $elem = $('#page-content1');
                break;
        }

        // we use a pseudo object for the animation
        // (starts from `0` to `angle`), you can name it as you want
        $({deg: anglesNow[id]}).animate({deg: anglesNow[id]+90}, {
            duration: 500,
            step: function(now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $elem.css({
                     transform: 'rotate(' + now + 'deg)'
                });
            }
        });
        anglesNow[id]=anglesNow[id]+90;
    });
    $('div.translate').click(function() {
        var id = $(this).attr('id');
        transform(id, 'translate');
    });
});
//helper function to find window width
function orienttest() {
    var w = $(window).width();
    var h = $(window).height();
    if (w > h) {
        return h;
    } else {
        return w;
    }
}
//helper function find max zoom factor
function scalefactor() {
    var cube = $('.cube').width();
    var sf = orienttest() / cube;
    return sf;
}



// By Kenneth Lim
$(document).ready(function(){
    var list1 = "", 
        list2 = "", 
        list3 = "", 
        list4 = "";

    var studentNames = [
        'Adam Willis',
        'Adhiraj Singh',
        'Aisha Tijani',
        'Amy Chau',
        '<a href="http://amyelmsdesign.tumblr.com" target="_blank">Amy Louise Elms</a>',
        'Angele Delajoux',
        'Anh Thu Dam',
        'Atikhun Jansanjai',
        'Barnaby Pau Jury Morgan',
        'Benjamin Sing',
        '<a href="http://www.chweetan.com" target="_blank">ChinHwee Tan</a>',
        'Claire Ann Köster',
        'Clara Alicia Metter',
        'Connor Daly',
        'Eftal Soral',
        'Emilien Malo Rabin',
        'Emily Schofield',
        'Gaetan Bernede',
        'Gautam Tankaria',
        'Georgia Cranstoun',
        'Hannah Nightingale',
        'Hattie Wade',
        '<a href="http://frankiehyleung.com" target="_blank">Frankie Ho Yiu Leung</a>',
        '<a href="http://hortensesells.tumblr.com" target="_blank">Hortense Franc</a>',
        'Isobel Ann Lily Orton',
        'Jack Smith',
        'Jasmine Kurino',
        'Jillian Ostek',
        '<a href="http://johncubillan.co.uk" target="_blank">John Cubillan</a>',
        '<a href="http://jordan-devos.com" target="_blank">Jordan DeVos</a>',
        '<a href="http://jordanwoodage.com" target="_blank">Jordan Woodage</a>',
        'Joshua James Smith',
        'Kateryna Kotikhina',
        'Katie Lambe',
        'Ke Fan',
        'Kerry McGranaghan',
        'Lara Bashar Arafeh',
        '<a href="http://larshoie.com" target="_blank">Lars Høie</a>',
        'Liisa Roll',
        'Louisa Luk',
        'Louise Dyhrfort',
        'Luying Xu',
        'Melissa Zee',
        'Michael Sierra',
        'Mika Hosono',
        '<a href="http://www.nataliepreston.com" target="_blank">Natalie Preston</a>',
        'Navjot Singh Chana',
        '<a href="http://cargocollective.com/nikkiritmeijer" target="_blank">Nikki Ritmeijer</a>',
        'Elky Li',
        'Olga Bagaeva',
        'Olga Carpenco',
        '<a href="http://philippinesohet.com" target="_blank">Philippine Sohet</a>',
        'Pui Sang Wu',
        'Rafael Bruni De Lima',
        'Raymond Hui',
        '<a href="http://www.rebeccabartola.com" target="_blank">Rebecca Bartola</a>',
        '<a href="http://rbk.graphics" target="_blank">Rebecca Lardeur</a>',
        'Satoko Furusawa',
        'Sean Wei Jun Song',
        'Shannon Swinburn',
        '<a href="http://www.amandachoy.com" target="_blank">Shiau Hui Choy, Amanda</a>',
        'Stephanie Kaiser',
        'Su Jung Choi',
        'Ta-Chun Hung',
        'Tatiana Ermolaeva',
        'Theo Bernard',
        '<a href="http://theresecappelen.com" target="_blank">Therese Cappelen</a>',
        'Varvara Zelenko',
        'Vorathap Kiathapkajon',
        'Xinxin Zheng',
        '<a href="http://yangziwang.com" target="_blank">Yangzi Wang</a>',
        'Yi Lin Kezia Kong',
        '<a href="http://www.mxxchxn.com" target="_blank">Mia Chen</a>',
        'Yuli Serfaty',
        '<a href="http://designerken.be/designing/" target="_blank">Kenneth Lim</a>',
        '<a href="https://www.behance.net/bernirgb" target="_blank">Bernardita Rodriguez</a>'];

    for(i=0; i<19; i++){
            list1 = list1 + "<div>" + studentNames[i] + "</div>";
            list2 = list2 + "<div>" + studentNames[i+19] + "</div>";
            list3 = list3 + "<div>" + studentNames[i+38] + "</div>";
            list4 = list4 + "<div>" + studentNames[i+57] + "</div>";
    }
    $("#page-content1 #nameList1").html(list1);
    $("#page-content2 #nameList2").html(list2);
    $("#page-content2 #nameList3").html(list3);
    $("#page-content1 #nameList4").html(list4);

    $(".navigation").hover(function(){
        $(this).css("opacity", "1");
    },function(){
        $(this).css("opacity", "0.3");
    })

    // $(window).click(function(e){
    //     // caching the object for performance reasons
    //     var $elem = $('.page-content');

    //     // we use a pseudo object for the animation
    //     // (starts from `0` to `angle`), you can name it as you want
    //     $({deg: anglesNow}).animate({deg: anglesNow+90}, {
    //         duration: 500,
    //         step: function(now) {
    //             // in the step-callback (that is fired each step of the animation),
    //             // you can use the `now` paramter which contains the current
    //             // animation-position (`0` up to `angle`)
    //             $elem.css({
    //                  transform: 'rotate(' + now + 'deg)'
    //             });
    //         }
    //     });
    //     anglesNow=anglesNow+90;
    // });
});
/* main.js */

/* ability animation */
enterView({
    selector: '.ani_1',  // 화면에 진입했을때 애니메이션이 될 요소명
    offset: 0.5,          // 시작 지연시간(ms)
    enter: function(el) {
        el.classList.add('play');  // 애니메이션 클래스 명(CSS)
    },
});

enterView({ 
    selector: '.ani_2', 
    offset: 0.5, 
    enter: function(el) { 
        el.classList.add('play'); 
    },
});  

enterView({
    selector: '.ani_3',
    offset: 0.5,
    enter: function(el) {
        el.classList.add('play');
    },
});

enterView({
    selector: '.ani_4',
    offset: 0.5,
    enter: function(el) {
        el.classList.add('play');
    },
});

/* 자동 스크롤 */
function fnMove(seq){
    var offset = $("section" + seq).offset();
    $('html, body').animate({scrollTop : offset.top},400);
}


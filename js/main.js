/* main.js */

/* ability animation */
enterView({
    selector: '.ability',  // 화면에 진입했을때 애니메이션이 될 요소명
    offset: 0.5,          // 시작 지연시간(ms)
    enter: function(el) {
        el.classList.add('play');  // 애니메이션 클래스 명(CSS)
    },
});

/* enterView({ 
    selector: '.block2', 
    offset: 0.5, 
    enter: function(el) { 
        el.classList.add('fade-slide-right'); 
    },
});  

enterView({
    selector: '.block3',
    offset: 0.5,
    enter: function(el) {
        el.classList.add('fade-slide-down');
    },
});  */
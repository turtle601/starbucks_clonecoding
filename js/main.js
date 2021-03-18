// 클래스가 search인 요소를 검색 
// document 객체는 html자체라고 할 수 있다. 
const searchEl = document.querySelector('.search');
// search 클래스에서 찾은 searchEl 중 input값 = searchInputEl
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();   
});

// 만약 searchInputEl에서 focus가 되면 함수가 실행이 된다. 
searchInputEl.addEventListener('focus', function(){
    // 특정 요소에 class정보를 가지고 있는 객체 classList에서
    // 내용을 추가하겠다. 추가할 클래스 이름은 'focused'
    // 즉 class = focused라는 새로운 태그를 만들겠다. 
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

// 만약 searchInputEl에서 focus가 해제되면 함수가 실행이 된다. 
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

// 화면이 스크롤 되면 배지가 사라지게 만들게 하는 함수
// html에 특정요소를 찾는다. = querySelector
const badgeEl = document.querySelector('header .badges');

// window. 출력되고 있는 화면
// 그 화면에다가 이벤트(스크롤) 추가
window.addEventListener('scroll',_.throttle(function(){
    
    //window.scrollY는 화면이 몇픽셀 위치에 있는지 보여준다. 
    console.log(window.scrollY);
    if (window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(애니메이션 처리 요소, 애니메이션 지속시간(s),애니메이션 처리 옵션{객체 데이터});
        gsap.to(badgeEl, .6, {
            opacity: 0,  // 시각적인 요소만 사라진 상태
            display:'none'
        });
        // .style을 사용하면 css속성을 사용할 수 있다. 
    } else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: "block"
        });
        // 배지 보이기
        
    }
}, 300)); 
// 하지만 창이 길어지고 계속해서 함수를 호출하게 되면
// 창이 버벅거리는 현상이 나타날 수 있다. 
//해결책 : 구글 -> lodash cdn 검색

// _.throttle을 통해 여러 개의 함수가 동시에 호출될 수 있는 상황을
// 300 = 0.3초 단위로 부하를 줘서 함수가 동시에 호출되는 것을 방지한다. 


// visual에 있는 각 그림들을 순차적으로 나타나게끔 하는 애니메이션 코드
const fadeEls = document.querySelectorAll('.visual .fade-in');
// fadeEls 객체의 요소들이 callback 함수에 순서대로 호출한다. 
// forEach를 통해서 값과, index값을 돌려 받을 수 있다. 
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index+1) * (0.7),
        opacity: 1
    });
});

// 공지사항 - swiper
// new - 생성자(클래스) - 자바 스크립트 내의 객체를 사용할 수 있다. 
//Swiper(선택자, 옵션 )
new Swiper('.notice-line .swiper-container',{
    // Swiper를 수직으로
    direction: 'vertical',
    //자동 재생
    autoplay: true,
    // 반복 재생
    loop: true

});

//프로모션 - swiper
new Swiper('.promotion .swiper-container',{
    // direction: 'horizontal'은 기본값
    // 한번에 보여줄 슬라이드 개수
    slidesPerView: 3,
    //슬라이드 사이 여백
    spaceBetween: 10,
    //1번 슬라이드가 가운데 보이기
    centeredSlides: true,
    loop: true,
    // 5초에 한번 씩 딜레이가 되도록 한다. 
    // autoplay:{
    //     delay: 5000
    // }

    // 어떤 번호 페이지인지 표시하는 함수
    pagination: {
        //페이지 번호 요소 선택자
        el: '.promotion .swiper-pagination',
        // 사용자의 페이지 번호 요소 제어
        clickable: true 
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//프로모션을 위아래로 열고 닫게 하기 위해서
const promotionEl = document.querySelector('.promotion')

const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 프로모션이 숨겨져 있으면 true, 없으면 False
// 원래 상태는 보여져 있는 상태
let isHidePromotion = false

//프로모션 버튼을 눌렀을 때
promotionToggleBtn.addEventListener('click',function (){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion){
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');

    }

});
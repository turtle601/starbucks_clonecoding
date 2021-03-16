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
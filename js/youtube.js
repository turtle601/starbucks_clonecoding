// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    // 유투브 링크에 v=되있는 부분 최초 재생할 유투브 영상 ID 
    videoId: 'An6LvWQuj_8&t=1s',
      playerVars: {
        // 자동 재생 유무
        autoplay: true,
        // 반복재생 유무
        loop: true,
        // 반복재생할 경우 유투브 영상 ID 목록을 쳐준다.
        playlist: "An6LvWQuj_8"
      },
      events: {
        // events라는 객체에 onReady라는 함수 정의
        onReady: function(event){
          event.target.mute()// 음소거

        }
      }
  });
}

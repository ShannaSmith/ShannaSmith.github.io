// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    videoId: 'kfOFtMCjCvg',
    playerVars: { 'autoplay': 1, 
    'playsinline': 1,
    'controls': 1,
    'showinfo':0,
    'modestbranding': 1,
    'loop': 1,
    'fs': 0,
    'cc load_policty': 1,
    'iv_load_policy': 3
 },
    events: {
      'onReady': function (e) {
          //e.target.mute();
          e.target.setVolume(50);
      }
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // e.target.mute();
   e.target.setVolume();
  e.target.playVideo();
}
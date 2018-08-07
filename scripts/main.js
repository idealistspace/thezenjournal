"use strict";

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "630",
    width: "291",
    videoId: "ZjpbeIYexFU",
    playerVars: { rel: 0 }
  });
}

MicroModal.init({
  onShow: () => player.playVideo(),
  onClose: modal => {
    player.stopVideo();
  }
});

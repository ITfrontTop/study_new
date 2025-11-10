const videoInfo = document.querySelector('.info__video');
const videoInfoBtn = document.querySelector('.info__video-btn');

function playVideo() {
  videoInfo.play();
  videoInfoBtn.style.display = 'none';
}

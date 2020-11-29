const player = document.querySelector('.video-stream');
const playBtn = document.querySelector('.ytp-play-button');

player.onmouseover = () => {
    playBtn.click();
};

player.onmouseout = () => {
    playBtn.click();  
};


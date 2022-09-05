const videoPlay = document.querySelector('.video-controller--play');
const videoPause = document.querySelector('.video-controller--pause');
const video = document.querySelector('.video');
const barLine = document.querySelector('.bar__line');
videoPlay.addEventListener('click', () => {
  video.play();
  videoPlay.style.display = 'none';
  videoPause.style.display = 'block';
});
videoPause.addEventListener('click', () => {
  video.pause();
  videoPause.style.display = 'none';
  videoPlay.style.display = 'block';
});

video.ontimeupdate = function () {
  let persentage = (video.currentTime / video.duration) * 100;
  barLine.style.width = persentage + '%';
};

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  let keys = {
    ESC: 27,
  };

  function showMenu() {
    menu.classList.add('menu--showed');
  };
  burger.addEventListener('click', showMenu);
});



// const root = document.documentElement;
// const darkBackgraund = '#2b2b2b';
// const lightBackgraund = '#fafafa';
// const button = document.querySelector('.header__burger');
// button.addEventListener('click', () => {
//   root.style.setProperty('--team-backgraund', lightBackgraund);

// });

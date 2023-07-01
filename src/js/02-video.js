import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    id: "vimeo-player",
    width: 640
});
const TIME_KEY = 'videoplayer-current-time';

const getCurrentTime = function(sec) {
     const curentTime = sec.seconds;
     localStorage.setItem(TIME_KEY, JSON.stringify(curentTime));
     
};
player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)) || 0)


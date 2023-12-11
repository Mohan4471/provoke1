// Replace 'YOUR_API_KEY' with your YouTube Data API key
const API_KEY = 'AIzaSyDPVV5l-FSKTIwm8VmhrWhOnJN42sfBG2s';

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube Video ID
const VIDEO_ID = 'lV1OOlGwExM';

// Load the YouTube IFrame Player API asynchronously
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-container', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready, if needed
}

function onPlayerStateChange(event) {
    // You can handle player state changes (e.g., video ended, paused, etc.), if needed
}

// Attach the YouTube API key
function attachApiKey() {
    const tag = document.createElement('script');
    tag.src = `https://www.youtube.com/player_api?api=${API_KEY}`;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Attach the YouTube API key and initialize the player
attachApiKey();

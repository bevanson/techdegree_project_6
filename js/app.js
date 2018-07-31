

const lines = document.querySelectorAll('span');
const video = document.querySelector('video');
const content = document.getElementById('content');

// add display items
$('video').mediaelementplayer({
  features: ['playpause', 'tracks', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
  startLanguage: 'en'
});

// Change background color for text being spoken
video.addEventListener("timeupdate", () => {
  for (let i = 0; i < lines.length; i++) {
    // find when text starts and then finishes
    if (video.currentTime > lines[i].getAttribute("data-start")
    && video.currentTime < lines[i].getAttribute("data-end")) {
      // style the text that is being spoken
      lines[i].style.color = "coral";
    }
    // put styles back to normal
    else {
      lines[i].style.color = ""
    }
  }
});

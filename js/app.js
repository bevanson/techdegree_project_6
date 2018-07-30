

const lines = document.querySelectorAll('span');
const video = document.querySelector('video');
const content = document.getElementById('content');


// Change background color for text being spoken
video.addEventListener("timeupdate", () => {
  for (let i = 0; i < lines.length; i++) {
    // find when text starts and then finishes
    if (video.currentTime > lines[i].getAttribute("data-start")
    && video.currentTime < lines[i].getAttribute("data-end")) {
      // style the text that is being spoken
      lines[i].style.backgroundColor = "yellow";
      lines[i].style.color = "#fff";
    }
    // put styles back to normal
    else {
      lines[i].style.backgroundColor = "#fff";
      lines[i].style.color = "grey"
    }
  }
});


// add click event to go to that section of the video
content.addEventListener("click", (event) => {
  if (event.target.tagName == 'SPAN') {
    video.currentTime = event.target.getAttribute('data-start');
  }
});

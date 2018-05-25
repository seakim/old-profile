
// ftr_btn function to pause and play
var video = document.getElementById("ftr_video");
var btn = document.getElementById("ftr_btn");
function play_pause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Resume";
    }
}
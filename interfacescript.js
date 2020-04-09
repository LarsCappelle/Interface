var vid = document.getElementById("achtergrondvideo");
vid.muted = true;

function geluidAan() {
    vid.muted = false;
}
/*
function geluidAan() {
  vid.muted = true;
}
*/

function verdedigen() {
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/defaultNaarVerdedigenFolie.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    video.onended = function (e) {
        console.log("end")
        video.src = "content/verdedigenFolie.mp4";
        video.play();
        vid.muted = false;
    };

}

function aanvallen() {
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/defaultNaarAanvallenFolie.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    video.onended = function (e) {
        video.src = "content/aanvallenFolie.mp4";
        video.play();
        vid.muted = false;
    };
}

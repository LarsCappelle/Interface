var vid = document.getElementById("achtergrondvideo");
vid.muted = true;


function verdedigen() {
    document.getElementById("knoppen").style.opacity = "0.5";
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/verdedigenFull.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended',reload,false);
    function reload() {
        location.reload();
    }
}


function aanvallen() {
    document.getElementById("knoppen").style.opacity = "0.5";
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/aanvallenFull.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended',reload,false);
    function reload() {
        location.reload();
    }
}


function overgeven() {
    document.getElementById("knoppen").style.opacity = "0.5";
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/overgevenFull.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended',reload,false);
    function reload() {
        location.reload();
    }
}






/*

Poging 1

function overgeven() {
    document.getElementById("knoppen").style.display = "none";
    document.getElementById("knoppenovergeven").style.display = "block";
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/defaultNaarOvergevenFolie.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended',transitie,false);
    function transitie() {
        var video = document.getElementById('achtergrondvideo');
        video.src = "content/overgevenFolie.mp4";
        video.loop = false;
        video.play();
        vid.muted = false;
         document.getElementById('achtergrondvideo').addEventListener('ended',transitie2,false);
        function transitie2() {
            var video = document.getElementById('achtergrondvideo');
            video.src = "content/overgevenNaarDefaultFolie.mp4";
            video.loop = false;
            video.play();
            vid.muted = false;
            document.getElementById('achtergrondvideo').addEventListener('ended',transitie2,false);
            function transitie2() {
                location.reload();
            }
          }
    }
}


function aanvallen() {
    var video = document.getElementById('achtergrondvideo');
    video.src = "content2/defaultNaarAanvallen.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended',transitie,false);
    function transitie() {
        var video = document.getElementById('achtergrondvideo');
        video.src = "content2/aanvallen.mp4";
        video.loop = false;
        video.play();
        vid.muted = false;
        document.getElementById('achtergrondvideo').addEventListener('ended',transitie2,false);
        function transitie2() {
            var video = document.getElementById('achtergrondvideo');
            video.src = "content2/aanvallenNaarDefault.mp4";
            video.loop = false;
            video.play();
            vid.muted = false;
            document.getElementById('achtergrondvideo').addEventListener('ended',transitie2,false);
            function transitie2() {
                location.reload();
            }
        }
    }
    
    
}

function verdedigen() {
    var video = document.getElementById('achtergrondvideo');
    video.src = "content/defaultNaarVerdedigenFolie.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    video.onended = function (e) {
        console.log("test")
        video.src = "content/verdedigenFolie.mp4";
        video.loop = false;
        video.play();
        vid.muted = false;
        document.getElementById('achtergrondvideo').addEventListener('ended',eindigVerdedigen,false);
        
    };

}

function eindigVerdedigen() {
    var video =  document.getElementById('achtergrondvideo');
    video.src = "content/verdedigenNaarDefaultFolie.mp4";
    video.loop = false;
    video.play();
    vid.muted = false;
    video.onended = function (e) {
        console.log("end")
        video.src = "content/defaultFolie.mp4";
        video.loop = false;
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
*/
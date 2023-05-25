var z = document.getElementById("fullscreen");
function fullscreenmode(){
    if(z.requestFullscreen){
        z.requestFullscreen();
    }
}
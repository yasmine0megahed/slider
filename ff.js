var index = 0;
var images = ["0.jpg","1.jpg", "2.jpg"]; 
var interv;

function play() {
    interv = setInterval(next, 1000);
}

function stop() {
    clearInterval(interv);
}

function next() {
    index = (index + 1) % images.length;
    upd();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    upd();
}

function upd() {
    document.getElementById("image").src = images[index];
}

var pho = document.getElementById("photos");
pho.addEventListener("mouseover", start);
pho.addEventListener("mouseout", stop);
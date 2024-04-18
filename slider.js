var images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg']
var index = 0
function play() {
  document.getElementById("play").disabled = true;
  interv = setInterval(next, 1000);
}
function stop() {
  clearInterval(interv);
  document.getElementById("play").disabled = false;
}
function next() {

  if (index < images.length - 1) {
    index++
  } else {
    index = 0
  }
  document.getElementById("image").src = images[index];
}
function prev() {
if (index > 0) {
  index--
  // index=Math.abs(index)
} else {
  index = images.length - 1
}
  document.getElementById("image").src = images[index];
}

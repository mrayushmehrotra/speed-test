//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr =
  "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300";
var downloadSize = 25005; //bytes

window.onload = function () {
  var oProgress = document.getElementById("progress");
  oProgress.innerHTML = "Loading the image, please wait...";
  window.setTimeout(MeasureConnectionSpeed, 1);
};

function MeasureConnectionSpeed() {
  var oProgress = document.getElementById("progress");
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    oProgress.innerHTML = "Invalid image, or error downloading";
    console.log(err || msg);
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (bitsLoaded / 1024 / duration).toFixed(2);
    var speedMbps = (bitsLoaded / 1024 / 1024 / duration).toFixed(2);
    oProgress.innerHTML =
      "Your connection speed is: <br />" +
      speedBps +
      " bps<br />" +
      speedKbps +
      " kbps<br />" +
      speedMbps +
      " Mbps<br />";
  }
}

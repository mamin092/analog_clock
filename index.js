var hour = document.querySelector(".hour-hand");
var minute = document.querySelector(".minute-hand");
var second = document.querySelector(".second-hand");

var setAngle = function(element, degrees) {
  degrees -= 90;
  element.style.transform = `rotate(${degrees}deg)`;
};

function tick() {
  var d = new Date();
  var t_hour = d.getHours();
  if (t_hour > 12) {
    t_hour -= 12;
  }
  var t_minute = d.getMinutes();
  var t_second = d.getSeconds();

  setAngle(hour, t_hour * 30 + t_minute * 0.5);
  setAngle(minute, t_minute * 6);
  setAngle(second, t_second * 6);
}

setInterval(tick, 1000);

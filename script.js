window.onload = function() {


// Get current time
var dateInfo = new Date();
var hr = dateInfo.getHours(),
    min = dateInfo.getMinutes(),
    sec = dateInfo.getSeconds(),
    milsec = dateInfo.getMilliseconds();

// Calculate angles for clock hands
var hrAngle = (hr % 12) * 30 + min * 0.5,
    minAngle = min * 6 + sec * 0.1,
    secAngle = sec * 6 + milsec * 0.006;

// Set initial angles for clock hands
function setAngle(yay, angle) {
  document.querySelector("." + yay).style.transform = "rotate(" + angle + "deg)";
}

setAngle("hour-yay", hrAngle);
setAngle("min-yay", minAngle);
setAngle("sec-yay", secAngle);

 
};

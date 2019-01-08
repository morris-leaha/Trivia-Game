window.onload = function() {
    $("#questions").hide();
    $("#start").on("click",start);
};

var intervalId;
var number = (120 * 1000);
var clockRunning = false;

function start() {
    $("#questions").show();
    $("#instructions").hide();
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}

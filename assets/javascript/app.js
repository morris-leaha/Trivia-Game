window.onload = function() {
    $("#questions").hide();
    $("#user-report-notsubmitted").hide();
    $("#user-report-submitted").hide();
    $("#start").on("click",start);
};

var intervalId;
var number = 10;
var clockRunning = false;

function start() {
    $("#questions").show();
    $("#instructions").hide();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#time-display").html(number);

    if (number === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    $("#user-report-notsubmitted").show();
    $("#questions").hide();
    $("#instructions").hide();
}

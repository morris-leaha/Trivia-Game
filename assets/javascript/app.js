window.onload = function() {
    $("#questions").hide();
    $("#user-report-notsubmitted").hide();
    $("#user-report-submitted").hide();
    $("#start").on("click",start);
};

var intervalId;
var time = 120;
var clockRunning = false;

function start() {
    $("#questions").show();
    $("#instructions").hide();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    var converted = timeConverter(time);
    $("#time-display").html(converted);

    if (number === 0) {
        stop();
        $("#user-report-notsubmitted").show();
        $("#questions").hide();
    }
}

function stop() {
    clearInterval(intervalId);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "0";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
window.onload = function() {
    $("#questions").hide();
    $(".timer").html("Time Remaining: " + " 02:00");
    $(".user-info").hide();
    $("#start").on("click",start);
    $("#submit").on("click",report);
};

var intervalId;
var time = 120;

function start() {
    $("#questions").show();
    $("#instructions").hide();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    var converted = timeConverter(time);
    $(".timer").html("Time Remaining: " + converted);

    if (time === 0) {
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

function report() {
    clearInterval(intervalId);
    $("#questions").hide();
    $("#user-report-submitted").show();

    if (correct >= 7){
        var msgDIV = $("<div class='card-text'>");

    }
}

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    $('#q-1 input').on('change', function() {
        var q1 = $('input[name=question1Radios]:checked', '#q-1').val(); 
        console.log("q1 value= " + q1);

        if (q1 === "option1a") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
    }
 });

    $('#q-2 input').on('change', function() {
        var q2 = $('input[name=question2Radios]:checked', '#q-2').val(); 
        console.log("q2 value= " + q2);

        if (q2 === "option2d") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
    }
 });

    $('#q-3 input').on('change', function() {
        var q3 = $('input[name=question3Radios]:checked', '#q-3').val(); 
        console.log("q3 value= " + q3);

        if (q3 === "option3c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
}
});

    $('#q-4 input').on('change', function() {
        var q4 = $('input[name=question4Radios]:checked', '#q-4').val(); 
        console.log("q4 value= " + q4);

        if (q4 === "option4d") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
}
});

    $('#q-5 input').on('change', function() {
        var q5 = $('input[name=question5Radios]:checked', '#q-5').val(); 
        console.log("q5 value= " + q5);

        if (q5 === "option5b") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
    }
 });

    $('#q-6 input').on('change', function() {
        var q6 = $('input[name=question6Radios]:checked', '#q-6').val(); 
        console.log("q6 value= " + q6);

        if (q6 === "option6c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
}
});

    $('#q-7 input').on('change', function() {
        var q7 = $('input[name=question7Radios]:checked', '#q-7').val(); 
        console.log("q7 value= " + q7);

        if (q7 === "option7a") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
}
});

    $('#q-8 input').on('change', function() {
        var q8 = $('input[name=question8Radios]:checked', '#q-8').val(); 
        console.log("q8 value= " + q8);

        if (q8 === "option8c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct-submitted").html(correct);
            $("#incorrect-submitted").html(incorrect);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#incorrect-submitted").html(incorrect);
            $("#correct-submitted").html(correct);
}
});

$('#q-9 input').on('change', function() {
    var q9 = $('input[name=question9Radios]:checked', '#q-9').val(); 
    console.log("q9 value= " + q9);

    if (q9 === "option9d") {
        correct++;
        console.log("# correct " + correct); 
        $("#correct-submitted").html(correct);
        $("#incorrect-submitted").html(incorrect);
    } else {
        incorrect++;
        console.log("# incorrect " + incorrect);
        $("#incorrect-submitted").html(incorrect);
        $("#correct-submitted").html(correct);
}
});

$('#q-10 input').on('change', function() {
    var q10 = $('input[name=question10Radios]:checked', '#q-10').val(); 
    console.log("q10 value= " + q10);

    if (q10 === "option10b") {
        correct++;
        console.log("# correct " + correct); 
        $("#correct-submitted").html(correct);
        $("#incorrect-submitted").html(incorrect);
    } else {
        incorrect++;
        console.log("# incorrect " + incorrect);
        $("#incorrect-submitted").html(incorrect);
}
});



window.onload = function() {
    $("#questions").hide();
    $(".timer").html("Time Remaining: " + " 02:00");
    $("#user-report").hide();
    $("#start").on("click",start);
    $("#submit").on("click",report);
    $("#reset").on("click", reset);
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
        $("#user-report").show();
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
    $("#user-report").show();
    
    if (correct === 10) {
        $("#msg").html("Perfect Score -- You must be a wine connoisseur!");
    } else if (correct < 10 && correct >= 6) {
        $("#msg").html("Nicely Done -- Try Again?");
    } else if (correct < 6 && correct >= 1) {
        $("#msg").html("Better Luck Next Time -- Try Again?");
    } else {
        $("#msg").html("Wah, Wah, Wah... -- Try Again?");
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
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
 });

    $('#q-2 input').on('change', function() {
        var q2 = $('input[name=question2Radios]:checked', '#q-2').val(); 
        console.log("q2 value= " + q2);

        if (q2 === "option2d") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
    
 });

    $('#q-3 input').on('change', function() {
        var q3 = $('input[name=question3Radios]:checked', '#q-3').val(); 
        console.log("q3 value= " + q3);

        if (q3 === "option3c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }

});

    $('#q-4 input').on('change', function() {
        var q4 = $('input[name=question4Radios]:checked', '#q-4').val(); 
        console.log("q4 value= " + q4);

        if (q4 === "option4d") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

    $('#q-5 input').on('change', function() {
        var q5 = $('input[name=question5Radios]:checked', '#q-5').val(); 
        console.log("q5 value= " + q5);

        if (q5 === "option5b") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
 });

    $('#q-6 input').on('change', function() {
        var q6 = $('input[name=question6Radios]:checked', '#q-6').val(); 
        console.log("q6 value= " + q6);

        if (q6 === "option6c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

    $('#q-7 input').on('change', function() {
        var q7 = $('input[name=question7Radios]:checked', '#q-7').val(); 
        console.log("q7 value= " + q7);

        if (q7 === "option7a") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

    $('#q-8 input').on('change', function() {
        var q8 = $('input[name=question8Radios]:checked', '#q-8').val(); 
        console.log("q8 value= " + q8);

        if (q8 === "option8c") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

    $('#q-9 input').on('change', function() {
        var q9 = $('input[name=question9Radios]:checked', '#q-9').val(); 
        console.log("q9 value= " + q9);

        if (q9 === "option9d") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

    $('#q-10 input').on('change', function() {
        var q10 = $('input[name=question10Radios]:checked', '#q-10').val(); 
        console.log("q10 value= " + q10);

        if (q10 === "option10b") {
            correct++;
            console.log("# correct " + correct); 
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        } else {
            incorrect++;
            console.log("# incorrect " + incorrect);
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            unanswered--;
            $("#unanswered").html(unanswered);
        }
});

if ("#q-1 input" !== "question1a" || "question1b" || "question1c" || "question1d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
} 

if ("#q-2 input" === "question2a" || "question2b" || "question2c" || "question2d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-3 input" === "question3a" || "question3b" || "question3c" || "question3d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-4 input" === "question4a" || "question4b" || "question4c" || "question4d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-5 input" === "question5a" || "question5b" || "question5c" || "question5d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-6 input" === "question6a" || "question6b" || "question6c" || "question6d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-7 input" === "question7a" || "question7b" || "question7c" || "question7d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-8 input" === "question8a" || "question8b" || "question8c" || "question8d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-9 input" === "question9a" || "question9b" || "question9c" || "question9d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}

if ("#q-10 input" === "question10a" || "question10b" || "question10c" || "question10d") {
    unanswered++;
    console.log("# unanswered" + unanswered);
    $("#unanswered").html(unanswered);
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
}


// function reset() {
//     correct = 0;
//     incorrect = 0;
//     unanswered = 0;
    


//     $("#questions").hide();
//     $("#user-report").hide();
//     $("#instructions").show();
//     $(".timer").html("Time Remaining: " + " 02:00");
// }
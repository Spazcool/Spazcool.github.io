$(document).ready(function() {
    $("#tooltip2").slider({
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 60,
        value: 30,
    });

    var breakLength = 0,
        staticWorkLength = 0,
        workLength = 0,
        pausedWorkLength = 0,
        objInterval = 0,
        bob = 0,
        tester = 30,
        pauseCount = 0,
        breakCount = 0;
    
    function chime() {
		document.getElementById('chime').play();
	}; 
    
    //CLOCK & HUMAN READY
    function millisToMinutesAndSeconds(secs) {
        var minutes = 0;
        var seconds = 0;
        minutes = Math.floor(secs / 60);
        seconds = (secs % 60).toFixed(0);
        $("#tooltip2").slider({
            step: 1,
            value: minutes
        });
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    };

    function startcountdown(cat) {
        // console.log("startcountdown START- arguments: " + arguments[0] + " || cat: " + cat + " || workLength: " + workLength + " || staticWorkLength: " + staticWorkLength + " || breakLength: " + breakLength);
        clearInterval(objInterval);
        objInterval = setInterval(function() {
            showcountdown(cat)
        }, 1000);
        breakCount += 1;
    };

    //RUNS EVERY SECOND
    function showcountdown(him) {
        if (him !== workLength) {
            him = workLength;
        }
        //CHANGE THE RAW MILLISECOND TIME TO HUMAN READABLE
        bob = millisToMinutesAndSeconds(him);
        //POST HUMAN READABLE TO THE SCREEN
        document.getElementById("screen").innerHTML = bob;
        //BREAK TIME
        //CHANGED FROM 0 TO 1
        if (him < 1) {
            chime();
            // console.log("BREAK START- arguments: " + arguments[0] + " || him: " + him + " || workLength: " + workLength + " || staticWorkLength: " + staticWorkLength + " || breakLength: " + breakLength);
            clearInterval(objInterval);
            // console.log("breakCount: " + breakCount);
            if (breakCount % 2 === 0) {
                workLength = staticWorkLength;
                startcountdown(workLength);
            } else {
                workLength = breakLength;
                startcountdown(breakLength);
            }
        } else {
            //console.log("look at him: " + him + " || tester: " + tester + " || workLength: " + workLength);
            him--;
            workLength--;
        }
    };

    //PAUSE LOGIC
    function pushPend(wo) {
        // console.log("pausing");
        $("#screen").html(":");
        if (wo === "pause") {
            if (breakCount % 2 === 0) {
                pausedWorkLength = breakLength;
            } else {
                pausedWorkLength = workLength;
            }
            pauseCount += 1;
            $("#spinP").html("");
            //UNPAUSE
            if (pauseCount % 2 === 0) {
                // console.log("unpause it - breakLength: " + breakLength);
                $("#spinP").html("PAUSE");
                if (breakCount % 2 === 0) {
                    breakLength = pausedWorkLength;
                    breakCount -= 1;
                    startcountdown(breakLength);
                } else {
                    workLength = pausedWorkLength;
                    breakCount -= 1;
                    startcountdown(workLength);
                }
                //PAUSE
            } else {
                // console.log("PAUSE it - breakLength: " + breakLength);
                $("#spinP").html("PAUSED");
                clearInterval(objInterval);
            }
        }
    };

    //STARTS HERE WITH THE INPUTS
    $(".btn").click(function() {
        switch (this.id) {
            case "pause":
                pushPend("pause");
                break;
            case "work":
                staticWorkLength = $("#tooltip2").slider("option", "value") * 60;
                workLength = staticWorkLength;
                breakLength = staticWorkLength / 6;
                pauseCount = 0;
                breakCount = 0;
                $("#spinP").html("PAUSE");
                startcountdown(workLength);
                break;
        };
    });
});

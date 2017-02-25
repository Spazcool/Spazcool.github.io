$(document).ready(function() {
    var run = [];
    var oper = [];
    var ele1 = [];
    var ele2 = [];
    var ele3 = [];
    var ans = "";
    var counter = 0;

    //SUM DIFF PROD
    function mather(num1, num2, operation) {
        //console.log("mather... oper:", oper);
        //console.log("mather BEFORE... typeof ele1:", typeof ele1, "typeof ele2:", typeof ele2);
        //console.log("mather BEFORE... ele1:", ele1, "ele2:", ele2, "ele3:", ele3, "oper:", oper, "ans:", ans, "run:", run);
        switch (operation) {
            case "+":
                ans = Number(num1) + Number(num2);
                break;
            case "-":
                ans = Number(num1) - Number(num2);
                break;
            case "x":
                ans = Number(num1) * Number(num2);
                break;
            case "&divide;":
                ans = Number(num1) / Number(num2);
                break;
        }
        //console.log("mather AFTER.... ele1:", ele1, "ele2:", ele2, "ele3:", ele3, "oper:", oper, "ans:", ans, "run:", run);
    };

    //RUN mather FUNC AS LONG AS IT NEEDS TO & CHANGE THE VARS ACCORDINGLY
    function lengther() {
        console.log("lengther... ele2:", ele2);
        for (var c = 0; c < oper.length; c++) {
            mather(ele1, ele2, oper[c])
            ele1 = ans.toString();
            ele2 = ele3[c.toString()];
        }
    };

    //PUSH THE NUMBERS INTO THEIR ARRAYS AND APPEND THE HTML
    function pushPend(num) {
        $("#screen").append(num);
        run.push(num);
        if (oper.length === 0) {
            ele1.push(num);
        } else if (oper.length === 1) {
            //object to string nonsense again
            console.log("happening?", typeof ele2);
            ele2.push(num);
            console.log("really?");
        } else {
            ele3.push(num);
        }
    };

    //PUSH THE OPERATION INTO THEIR ARRAYS AND APPEND THE HTML
    function pushPendOps(ops) {
        //console.log("typeof ele1:", typeof ele1, "typeof ele2:", typeof ele2);
        if (oper.length >= 1) {
            if (typeof ele1 == "object") {
                ele1 = ele1.join("");
                ele2 = ele2.join("");
            }
            lengther();
            $("#screen").append("<p>" + ans.toFixed(2) + "</p>");
            ele1 = [ans.toString()];
            ele2 = [];
            ele3 = [];
        }
        $("#screen").append(" " + ops + " ");
        run.push(ops)
        oper.push(ops);
    };

    //NEED TO FIX THIS JUNK
    function clearer() {
        console.log("before run:", run);
        run.pop();
        console.log("after run: ", run);
        if (oper.length === 0) {
            ele1.pop();
            $("#screen").html("");
            $("#screen").append(ele1);
        } else if (oper.length === 1 && ele2.length === 0) {
            oper = [];
            $("#screen").html("");
            $("#screen").append(ele1);
        } else if (oper.length === 1 && ele2.length > 0) {
            ele2.pop();
            $("#screen").html("");
            $("#screen").append(ele1, " ", oper[0], " ", ele2);
        } else if (oper.length > 1 && ele2.join("").length === 1) {
            oper.pop();
        } // } else {
        // 	ele2.pop();
        // 	$("#screen").html("");
        // 	$("#screen").append(ele1, " ", oper[0], " ", ele2);
        // }
    };

    //LIKE THE TERMINATOR BUT BETTER...ER
    function equaler() {
        //console.log("join BEFORE.... ele1 typeOf:", typeof ele1);
        if (typeof ele1 == "object") {
            //console.log("1");
            ele1 = ele1.join("");
            ele2 = ele2.join("");
        }
        //	console.log("equal BEFORE.... ele1:", ele1, "ele2:", ele2, "ele3:", ele3, "oper:", oper, "ans:", ans, "run:", run);
        if (oper.length == 0) {
            //console.log("2");
            ans = Number(ele1);
            $("#screen").append("<p>" + ans.toFixed(2) + "</p>");
            //console.log("2.5 ele1:", ele1, "ans:", ans, "oper:", oper);
        } else {
            //console.log("3");
            lengther();
            $("#screen").append("<p>" + ans.toFixed(2) + "</p>");
            oper = [];
            ele1 = [ans.toString()];
            ele2 = [];
            ele3 = [];
            run = [];
            //console.log("4");
        }
        //console.log("equal AFTER..... ele1:", ele1, "ele2:", ele2, "ele3:", ele3, "oper:", oper, "ans:", ans, "run:", run);
    };

    //KEEP THE TEXT IN THE SCREEN
    function countScreenClear() {
        if (counter === 8) {
            $("#screen").html("");
            counter = 0;
        }

    }

    //STARTS HERE WITH THE INPUTS
    $(".btn").click(function() {
        switch (this.id) {
            case "zero":
                pushPend(0);
                break;
            case "one":
                pushPend(1);
                break;
            case "two":
                pushPend(2);
                break;
            case "three":
                pushPend(3);
                break;
            case "four":
                pushPend(4);
                break;
            case "five":
                pushPend(5);
                break;
            case "six":
                pushPend(6);
                break;
            case "seven":
                pushPend(7);
                break;
            case "eight":
                pushPend(8);
                break;
            case "nine":
                pushPend(9);
                break;
            case "dot":
                pushPend(".");
                break;
            case "add":
                counter += 1;
                countScreenClear();
                pushPendOps("+");
                break;
            case "minus":
                counter += 1;
                countScreenClear();
                pushPendOps("-");
                break;
            case "multiply":
                counter += 1;
                countScreenClear();
                pushPendOps("x");
                break;
            case "divide":
                counter += 1;
                countScreenClear();
                pushPendOps("&divide;");
                break;
            case "ac":
                $("#screen").html("");
                oper = [];
                ele1 = [];
                ele2 = [];
                ele3 = [];
                run = [];
                ans = "";
                break;
            case "ce":
                clearer();
                break;
            case "equal":
                counter += 1;
                countScreenClear();
                equaler();
                break;
        };
    });
});

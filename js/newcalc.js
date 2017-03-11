//FOR TESTING
// console.log("func || oper.length: " + oper.length + " || equalCount: " + equalCount + " || ele1.length: " + ele1.length);
//console.log("= || ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || ans: " + ans);
$(document).ready(function() {
    var run = [];
    var oper = [];
    var ele1 = [];
    var ele2 = [];
    var ele3 = [];
    var ans = "";
    var counter = 0;
    var equalCount = 0;

    //DO THE MATHS || SUM DIFF PROD
    function mather(num1, num2, operation) {
        console.log("0 MATHER ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);

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
        console.log("1 MATHER ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);

    };

    //RUN mather FUNC AS LONG AS IT NEEDS TO & CHANGE THE VARS ACCORDINGLY
    function lengther() {
        //TEST TO REMOVE
        if (equalCount === 1) {
            console.log("0 lengther ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);

            for (var c = 0; c < oper.length; c++) {
                mather(ele1, ans, oper[c])
                ele1 = [ans.toString()];
                ele2 = ele3[c.toString()];
            }
        } else {
            //IF OPERATING ON THE PREVIOUS ANSWER || BY CHECKING IF THE SECOND ELEMENT IS EMPTY
            if (ele2 === "") {
                console.log("1 lengther ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);

                for (var c = 0; c < oper.length; c++) {
                    mather(ans, ele1, oper[c])
                    ele1 = [ans.toString()];
                    ele2 = ele3[c.toString()];
                }
                //RUN mather AS LONG AS THEIR ARE OPERATIONS TO GO THROUGH || DO OPERS GO OVER 1?
            } else {
                console.log("2 lengther ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);

                for (var c = 0; c < oper.length; c++) {
                    mather(ele1, ele2, oper[c])
                    ele1 = [ans.toString()];
                    ele2 = ele3[c.toString()];
                }
            }
        }
    };

    //PUSH THE NUMBERS INTO THEIR ARRAYS AND APPEND THE HTML
    function pushPend(num) {
        run.push(num);
        //IF A PREVIOUS OPERATION WAS COMPLETED & A NEW OPERATION IS WANTED
        if (equalCount === 1 && oper.length === 0) {
            if (ele1[0] !== "") {
                ele1.push(num);
                equalCount = 0;
            } else {
                ele1.splice(0, 1);
                ele1.push(num);
            }
            //INITAL STATE, START OF APP
        } else if (oper.length === 0 || ele1.length === 0) {
            //console.log(typeof ele1);
            ele1.push(num);
            //IF AN OPERATION HAS BEEN HIT
        } else if (oper.length === 1) {
            //PUT THE NUM INO ele2
            ele2.push(num);
            //IF...
        } else if (equalCount === 0 && ele1[0] === ans) {
            //CUT THE ANS OUT OF ELE1
            ele1.splice(0, 1);
            //NOT SURE WHAT CONDITION THIS COVERS, BUT PUSH THE NUM INTO ele3
        } else {
            ele3.push(num);
        }
        $("#screen").append(num);
    };

    //PUSH THE OPERATION INTO THEIR ARRAYS AND APPEND THE HTML
    function pushPendOps(ops) {
        //IF THERES A STRING OF OPERATIONS  || EVER TRUE?
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

    //REMOVE THE LAST ENTRY || NEED TO FIX THIS JUNK
    function clearer() {
        run.pop();
        //IF NO OPERATION REMOVE FROM ele1
        if (oper.length === 0) {
            // console.log("0 CLEAR ele1: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);
            ele1.pop();
            $("#screen").html("");
            $("#screen").append(ele1);
            //IF THERES AN OPERATION BUT NO ele2
        } else if (oper.length === 1 && ele2.length === 0) {
            // console.log("1 CLEAR oper: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);
            oper = [];
            $("#screen").html("");
            $("#screen").append(ele1);
            //IF THERES 1 OPERATION AND SOMETHING IN ele2
        } else if (oper.length === 1 && ele2.length > 0) {
            // console.log("2 CLEAR ele2[0]: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);
            ele2.pop();
            $("#screen").html("");
            $("#screen").append(ele1, " ", oper[0], " ", ele2);
            //IF THERES AN OPERATION AND ele2 HAS MORE THAN ONE DIGIT || NOT WORKING?
        } else if (oper.length > 1 && ele2.join("").length === 1) {
            // console.log("3 CLEAR ele2: ele1: " + ele1 + " || ele2: " + ele2 + " || ele3: " + ele3 + " || oper: " + oper + " || ans: " + ans);
            oper.pop();
        }
    };

    //IF EQUAL IS HIT MORE THAN ONCE THE INPUT IS GETTING STUCK || LIKE THE TERMINATOR BUT BETTER...ER
    function equaler() {
        equalCount = 0;
        //ALWAYS TRUE?
        if (typeof ele1 === "object") {
            //CHANGES THEM TO STRINGS HERE || MGIHT BE BETTER TO KEEP THEM ARRAYS
            //is this where it went wrong?
            ele1 = ele1.join("");
            ele2 = ele2.join("");
        }
        //NO OPERATION || RETURN THE INPUT
        if (oper.length === 0) {
            ans = Number(ele1);
            $("#screen").append("<p>" + ans.toFixed(2) + "</p>");
            //RUN THE ELEMENTS THROUGH lengther--mather
        } else {
            lengther();
            $("#screen").append("<p>" + ans.toFixed(2) + "</p>");
            oper = [];
            ele1 = [];
            ele2 = [];
            ele3 = [];
            run = [];
            equalCount = 1;
        }
    };

    //KEEP THE TEXT IN THE SCREEN || I WANT IT TO WORK ON ALL SCREENS
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

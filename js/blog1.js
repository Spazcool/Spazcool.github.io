$(document).ready(function() {
	var timer = 0;

	function truthCheck(collection, pre) {
		console.log(pre);
		timer += 1;
		$("#output").append("<b>Test number ", timer, ":</b>");
		for (var i = 0; i < collection.length; i++) {
			if (collection[i].hasOwnProperty(pre) === false || Boolean(collection[i][pre]) === false) {
				$("#output").append("&emsp; FALSE &emsp; Not all elements have the property of ", pre, ".<br>");
				return false;
			}
		};
		$("#output").append("&emsp; TRUE &emsp; &nbsp; All elements have the property of ", pre, ".<br>");
		return true;
	}

	$("#refresh").click(function() {
		$("#output").html("");
		truthCheck([{
			"user": "Tinky-Winky",
			"sex": "male"
		}, {
			"user": "Dipsy",
			"sex": "male"
		}, {
			"user": "Laa-Laa",
			"sex": "female"
		}, {
			"user": "Po",
			"sex": "female"
		}], "sex");
		truthCheck([{
			"user": "Tinky-Winky",
			"sex": "male"
		}, {
			"user": "Dipsy"
		}, {
			"user": "Laa-Laa",
			"sex": "female"
		}, {
			"user": "Po",
			"sex": "female"
		}], "sex");
		truthCheck([{
			"user": "Tinky-Winky",
			"sex": "male",
			"age": 0
		}, {
			"user": "Dipsy",
			"sex": "male",
			"age": 3
		}, {
			"user": "Laa-Laa",
			"sex": "female",
			"age": 5
		}, {
			"user": "Po",
			"sex": "female",
			"age": 4
		}], "age");
		truthCheck([{
			"name": "Pete",
			"onBoat": true
		}, {
			"name": "Repeat",
			"onBoat": true
		}, {
			"name": "FastFoward",
			"onBoat": null
		}], "onBoat");
		truthCheck([{
			"name": "Pete",
			"onBoat": true
		}, {
			"name": "Repeat",
			"onBoat": true,
			"alias": "Repete"
		}, {
			"name": "FastFoward",
			"onBoat": true
		}], "onBoat");
		truthCheck([{
			"single": "yes"
		}], "single");
		truthCheck([{
			"single": ""
		}, {
			"single": "double"
		}], "single");
		truthCheck([{
			"single": "double"
		}, {
			"single": undefined
		}], "single");
		truthCheck([{
			"single": "double"
		}, {
			"single": NaN
		}], "single");
		timer= 0;
	})
});

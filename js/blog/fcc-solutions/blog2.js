$(document).ready(function() {
	var timer = 0,
		contacts = [{
			"firstName": "Akira",
			"lastName": "Laine",
			"number": "0543236543",
			"likes": ["Pizza", "Coding", "Brownie Points"]
		}, {
			"firstName": "Harry",
			"lastName": "Potter",
			"number": "0994372684",
			"likes": ["Hogwarts", "Magic", "Hagrid"]
		}, {
			"firstName": "Sherlock",
			"lastName": "Holmes",
			"number": "0487345643",
			"likes": ["Intriguing Cases", "Violin"]
		}, {
			"firstName": "Kristian",
			"lastName": "Vos",
			"number": "unknown",
			"likes": ["Javascript", "Gaming", "Foxes"]
		}];

	function isHeSheThere(firstName) {
		var compArr = [];
		for (var x = 0; x < contacts.length; x++) {
			compArr.push(contacts[x].firstName);
		}
		if (compArr.includes(firstName)) {
			return true;
		} else {
			return false;
		}
	}

	function lookUpProfile(firstName, prop) {
		timer += 1;
		$("#output").append("<b>Test number</b> ", timer, ": ");
		if (isHeSheThere(firstName) === false) {
			$("#output").append("&emsp;No such contact: ", firstName, "<br>");
			return "No such contact";
		} else {
			for (var i = 0; i < contacts.length; i++) {
				if (firstName === contacts[i].firstName) {
					if (contacts[i].hasOwnProperty(prop) === true) {
						switch (prop) {
							case "lastName":
								$("#output").append("&emsp;", firstName, " has lastName: ", contacts[i].lastName, "<br>");
								return contacts[i].lastName;
								 break;
							case "likes":
								$("#output").append("&emsp;", firstName, " has likes: ", contacts[i].likes.join(", "), "<br>");
								return contacts[i].likes;
								break;
							case "number":
								$("#output").append("&emsp;", firstName, " has number: ", contacts[i].number, "<br>");
								return contacts[i].number;
								break;
						}
					} else {
						$("#output").append("&emsp;", firstName, " has no such property: ", prop, "<br>");
						return "No such property";
					}
				}
			}
		}
	}

	$("#refresh").click(function() {
		$("#output").html("");
		lookUpProfile("Kristian", "lastName");
		lookUpProfile("Sherlock", "likes");
		lookUpProfile("Harry", "likes");
		lookUpProfile("Bob", "number");
		lookUpProfile("Akira", "address");
		timer = 0;
	})

});

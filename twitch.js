$(document).ready(function() {

	function load() {
		var colorHeight = $("#colorsHere").height();
		//console.log("beginning", colorHeight);
		//CLEAR THE DIVS OF CONTENT
		$("#ONHere").html("");
		$("#OFFHere").html("");
		$("#NOHere").html("");
		$(".name").html("");

		var dudes = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

		for (var dude = 0; dude < dudes.length; dude++) {

			$.ajax({
				type: "GET",
				url: 'https://api.twitch.tv/kraken/streams/' + dudes[dude],
				headers: {
					"Client-ID": "rtecrlgsnxwld3af5fhgww1lrqynip4"
				},
				success: function(data) {
					//FUGLY BUT SUPER EFFECTIVE
					if (data.stream == null) {
						console.log(data._links);
						$("#OFFHere").prepend("<div class='offline well col-xs-12 col-sm-12 col-md-12 col-lg-12'><div class='col-xs-3 col-sm-3 col-md-4 col-lg-4'><a href=https://www.twitch.tv/" + data._links.self.substr(37) + "><img src='/imgs/twitch/offline_by_spazcool-dank6j1.jpg' class='logo'></a></div><div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'><center><h1> " + data._links.self.substr(37) + "</h1></center></div><div class='offOrOn col-xs-3 col-sm-3 col-md-1 col-md-offset-3 col-lg-1 col-lg-offset-3'>OFFLINE</div><div class='dudes col-xs-12 col-sm-12 col-md-12 col-lg-12'><div class='stats col-xs-12 col-sm-12 col-md-4 col-lg-4'><div class ='viewers col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Viewers: NONE</h3></div><div class ='game col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Game: NONE</h3></div><div class ='fps col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>FPS: NONE</h3></div></div><div class='screenHold col-xs-12 col-sm-12 col-md-8 col-lg-8'><img src='/imgs/twitch/robot.sleeping.svg' class='screens'></div></div></div>");
					} else {

						$("#ONHere").prepend("<div class='online well col-xs-12 col-sm-12 col-md-12 col-lg-12' id='" + data.stream.channel.display_name + "'><div class='col-xs-3 col-sm-3 col-md-4 col-lg-4'><a href=https://www.twitch.tv/" + data._links.self.substr(37) + "> <img src=" + data.stream.channel.logo + " class='logo'></a></div><div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'><center><h1> " + data.stream.channel.display_name + "</h1></center></div><div class='offOrOn col-xs-3 col-sm-3 col-md-1 col-md-offset-3 col-lg-1 col-lg-offset-3'>ONLINE</div><div class='dudes col-xs-12 col-sm-12 col-md-12 col-lg-12'><div class='stats col-xs-12 col-sm-12 col-md-4 col-lg-4'><div class ='viewers col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Viewers: " + data.stream.viewers + "</h3></div><div class ='game col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Game: " + data.stream.game + "</h3></div><div class ='fps col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>FPS: " + data.stream.average_fps.toFixed(0) + "</h3></div></div><div class='screenHold col-xs-12 col-sm-12 col-md-8 col-lg-8'><img src=" + data.stream.channel.profile_banner + " class='screens'></div></div></div>");
					}
				},
				error: function(data) {
					//CORRECTING THE LOOP, NOT SURE HOW TO DO IT WITHOUT THIS
					dude -= 1;

					$("#NOHere").prepend("<div class='noAccount well col-xs-12 col-sm-12 col-md-12 col-lg-12' id='" + dudes[dude] + "'><div class='col-xs-3 col-sm-3 col-md-4 col-lg-4'><img src='/imgs/twitch/plug_by_spazcool-dank5mi.png' class= 'logo'></a></div><div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'><center><h1> " + dudes[dude] + "</h1></center></div><div class='offOrOn col-xs-3 col-sm-3 col-md-1 col-md-offset-3 col-lg-1 col-lg-offset-3'>ERROR</div><div class='dudes col-xs-12 col-sm-12 col-md-12 col-lg-12'><div class='stats col-xs-12 col-sm-12 col-md-4 col-lg-4'><div class ='viewers col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Viewers: NONE</h3></div><div class ='game col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>Game: NONE</h3></div><div class ='fps col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'><h3>FPS: NONE</h3></div></div><div class='screenHold col-xs-12 col-sm-12 col-md-8 col-lg-8'><img src='/imgs/twitch/dead_by_spazcool-dankrqq.png' class='screens'></div></div></div>");

				}

			});

		} //END OF FOR LOOP

	}; //END OF LOAD

	$("#refresh").ready(load)
	$("#refresh").click(load)
});

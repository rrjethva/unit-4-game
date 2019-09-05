var winScore = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/1.gif", "./assets/images/2.gif", "./assets/images/3.gif", "./assets/images/4.gif"];

// this function is made to create a random number that you must reach to win the game    
function randomWinScore () {
		winScore = Math.floor(Math.random() * 102) + 19;
	}
// this function is made to reset the crystals after a win/loss to a random value different than previous game
	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
		}
	}
// this function is made to reset all counters
	function resetCounter () {
		$(".target-number").html(winScore);
		$(".win-lose-counter").html("<br><p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p><br>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomWinScore ();
		counter = 0;
		resetCounter ();
		resetCrystals ();
	}
// calling functions into action
	randomWinScore();
	resetCounter ();
	resetCrystals ();

// function to change win/loss counter upon onlick
	function clickCrystal () {
		
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == winScore) {
			wins++;
			totalReset();
		}
		else if (counter > winScore) {
			losses++;
			totalReset();
		};
	};

// onclick event
	$(document).on("click", ".crystal", clickCrystal);

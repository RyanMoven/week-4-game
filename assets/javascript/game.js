var targetScore = Math.floor((Math.random()*101) + 19);

// Random number for ruby
var ruby = Math.floor((Math.random()*12) + 1);

// Random number for diamond
var diamond = Math.floor((Math.random()*12) + 1);

// Random numbr for topaz
var topaz = Math.floor((Math.random()*12) + 1);

// Random number for emerald
var emerald = Math.floor((Math.random()*12) + 1);

// Counters for W/L, and scores
var playerScore;
var scoreBoard;
var wins = 0;
var losses = 0;

var reset = function(){
	targetScore = Math.floor((Math.random()*101) + 19);
	ruby = Math.floor((Math.random()*12) + 1);
	diamond = Math.floor((Math.random()*12) + 1);
	topaz = Math.floor((Math.random()*12) + 1);
	emerald = Math.floor((Math.random()*12) + 1);
	playerScore = 0;
	scoreBoard = 0;
};
// created a function for W/L to be used later
var calculations = function(){
	if(playerScore === targetScore){
		wins ++;
		alert("You Won");
		$("#wins").text("Wins:" + wins);
		reset ();
	}

	else if (playerScore > targetScore){
		losses++;
		alert("You Lost");
		$("#losses").text("Losses:" + losses)
		reset();

	}

};


// funtions to give values to the crystals and score Addition
$(document).ready(function(){

	$("#targetScore").html("<h1> Collect this many!:</h1>" +targetScore);
		reset();
//clicks for ruby
	$("#ruby").click(function(){
		playerScore = playerScore + ruby;
		$("#scoreBoard").html("<h1> You have collected: </h1>" +playerScore);
		calculations();
		

	})

//clicks for diamond
	$("#diamond").click(function(){
		playerScore = playerScore + diamond;
		$("#scoreBoard").html("<h1> You have collected: </h1>" +playerScore);
		calculations();
		

	})
	

//clicks for topaz
	$("#topaz").click(function(){
		playerScore = playerScore + topaz;
		$("#scoreBoard").html("<h1> You have collected: </h1>" +playerScore);
		calculations();
		
	})

//clicks for emerald
	$("#emerald").click(function(){
		playerScore = playerScore + emerald;
		$("#scoreBoard").html("<h1> You have collected: </h1>" +playerScore);
		calculations();
		
	})
});
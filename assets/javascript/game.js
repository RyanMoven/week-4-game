	$(document).ready(function(){

// Random number for the player's target score
	function scoreBoard(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; //max value inclusive
}
	 var targetScore = scoreBoard(19, 120);

// Random number for ruby
function rngRuby(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}
	 var ruby = rngRuby(1, 12);

// Random number for diamond
	 function rngDiamond(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}
	 var diamond = rngDiamond(1, 12);

// Random numbr for topaz
function rngTopaz(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}
	 var topaz = rngTopaz(1, 12);

// Random number for Emerald
function rngEmerald(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}
	 var emerald = rngEmerald(1, 12);
		

	//Random numbers for crystals
	var wins = 0
	var losses = 0
	// counter for the wins and losses 


	$("#ruby").click(function() {

		console.log(ruby);


	});




});
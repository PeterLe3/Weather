$(document).ready(function() {
	/*
		$('body').css('background-color', '#0D343A') ;
		$('body').css('background-image', 'none');
		*/
		//$('body').addClass("rain");
	//	$('section').addClass("rainAnim");
	
		

$('#rains').click(function(){
	$('body').addClass("rain");
createRain();

})
		


		// number of drops created.
var rainDrops = 450; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<rainDrops;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rainAnim').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}




});


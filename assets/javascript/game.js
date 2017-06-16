function getRandomNum(){
	var targetNum= Math.floor(Math.random()* 120);
	return targetNum;
}

var targetNum= Math.floor(Math.random()* 120);

$(document).ready(function(targetNum) {

	//alert("Let's Play!");
	//numbers need to show in score box
	$("#targetScore").text(getRandomNum());
	 console.log("target score is " + getRandomNum());

});

 var counter = 0;
function addScore() {
	var increase = counter++;
	console.log(increase);
}

addScore();

 function getUserRandom() {
 	var maxAndMin = Math.floor(Math.random() * (1, 12));
 	return maxAndMin;
 }

// getUserRandom(1,12);

  $(".shells").on("click", function() {      
      $("#yourScore").text(getUserRandom()); 
    console.log("you guessed " + getUserRandom());
 }); 

//  function putRandomNumberInShells(){
//  	$(".shells").push(getUserRandom(1, 12));
 	//counter ++
 	//console.log(maxAndMin);
 //}
 
 //counter += getUserRandom;
   //  console.log(userRandomNumbers);
   // }

$("#yourScore").text(userRandomNumbers());
//      alert("Current score: " + counter);
// // for (var i = 0; i < numberOptions.length; i++) {
// 	 var shellImage = $("<img>");
// 	 shellImage.addClass("shell-image");

// 	shellImage.attr("http://clipartix.com/wp-content/uploads/2016/06/Transparent-seashell-clipart.png");

// 	shellImage.attr("data-shellvalue", numberOptions[i]);

// 	$(".shells").append(shellImage);

// 	$(".shell-image").on("click", function() {

var shellValue = ($(this).attr("data-shellvalue"));
    shellValue = parseInt(shellValue);		

// //if user reaches random numer, alert you win and reset
counter += shellValue;

if (counter === targetNum) {
	 alert("You win!");
    }
 
 	$("#clear").on("click", function() {
       $("#display").empty();
    });

if (counter >= targetNum) {

      //Alert with a loss.
      alert("You lose!!");
    }
;



//computer will pick a random number
// use math.random to find random number

// console.log(randomNum);

// //number displays to screen
// $(document).on("click", random);



//numbers assigned to crystals

// //user clicks a crystal 


// //if user surpasses random number, alert you lose


//wins and losses should show in appropriate boxes 
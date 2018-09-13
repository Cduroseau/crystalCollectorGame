$(document).ready(function(){

//A container that keeps track of total score

var userNum = 0
$("#userNum").text(userNum)
var wins = 0
var losses = 0
var targetNum

function restart(){
    userNum = 0
    $("#userNum").text(userNum)
    wins = 0
    losses = 0
    $("#wins-text").text("")
    $("#losses-text").text("")
    // $("body").css("background-image", "url('galaxy.jpg')")
    startGame()
}

function startGame(){    

    $(".instructions p").hide();
    $("#audio")[0].play()
//Thanos generates a random number each time the games starts, between 19 - 120   
    targetNum = Math.floor(Math.random() * 120) +19;
    $("#targetNum").text(targetNum)
    $("div").removeClass("instructions")



//Generate a random hidden value between 1 -12 on each stone
$('#mind').attr('data-value', Math.floor(Math.random() * 12) +1 )
$('#reality').attr('data-value', Math.floor(Math.random() * 12) +1 )
$('#power').attr('data-value', Math.floor(Math.random() * 12) +1 )
$('#soul').attr('data-value', Math.floor(Math.random() * 12) +1 )
$('#time').attr('data-value', Math.floor(Math.random() * 12) +1 )
$('#space').attr('data-value', Math.floor(Math.random() * 12) +1 )
}

//start button that hide instructions and start the song
$("button").click(function(){
   startGame()

//Display stone images as buttons
//Add the stone value to the player's total score when clicked


})

//Restarts the game whenever the player wins or losses
$(".button").on("click", function(){
    var imgvalue = parseInt($(this).attr('data-value'))
    userNum += imgvalue
    $("#userNum").text(userNum)
 
    console.log(userNum)
    console.log(targetNum)

 //The player wins if score matches random number and losses if scores goes above the random number
 
 if(userNum === targetNum){
     wins++
     $("#wins-text").text(wins)
     userNum = 0
     targetNum = Math.floor(Math.random() * 120) +19;
     $("#targetNum").text(targetNum)
    // $("#userNum").text(userNum)
 
     startGame()
    //  $('#mind').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#reality').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#power').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#soul').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#time').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#space').attr('data-value', Math.floor(Math.random() * 12) +1 )
     
 }
 
 else if (userNum > targetNum){
    
       losses++
     $("#losses-text").text(losses)
     userNum = 0
     targetNum = Math.floor(Math.random() * 120) +19;
     $("#targetNum").text(targetNum)
    // $("#userNum").text(userNum)
    
     startGame()
    //  $('#mind').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#reality').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#power').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#soul').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#time').attr('data-value', Math.floor(Math.random() * 12) +1 )
    //  $('#space').attr('data-value', Math.floor(Math.random() * 12) +1 )
 }
 
 if (wins===6){
     $("body").css("background-image", "url('avengers.jpg')")
     restart()
 }
 
 if (losses===6){
     $("body").css("background-image", "url('thanos.jpg')")
     restart()
 }  




})   

})

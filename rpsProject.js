var playerPick="";
var roundCounter=1;
var multiplayerCount=1;
var playerOnePick="";
var playerTwoPick="";
var playerOneActivation = 0;
var playerTwoActivation = 0;

window.onload=function()
{
    mainscreen();
    
}    

function mainscreen(){

    var title=document.createElement("h1");
    $(title).html("Rock Paper Scissors");
    $(title).attr("id", "mainTitle");
    $("header").append(title);

    var flexDiv=document.createElement("div");
    $(flexDiv).attr("id","flex");
    var newPic=document.createElement("img");
    $(newPic).attr("id","mainImage" );
    // var picDiv=document.createElement("img");
    var picDiv=document.createElement("div");
    $(picDiv).attr("id","picture");
    $(newPic).attr("src","images/homescreen_image/rps_home.jpg");
    $(picDiv).append(newPic);
    $(flexDiv).append(picDiv);
    var description=document.createElement("p");
    $(description).html("Rock paper scissors is a well known game which is quick and easy to play. To start our virtual rendition of the game, either choose single player mode or multiplayer mode. From here, you will be prompted to make a choice of rock, paper or scissors. Make your choice, and have fun!")
    var dDiscript=document.createElement("div");

    $(dDiscript).attr("id","description");
    $(dDiscript).append(description);
    $(flexDiv).append(dDiscript);
    $("#mainscreen").append(flexDiv);

   
    
    
   
    var button1=document.createElement("button");
    var button2=document.createElement("button");
    $(button1).html("SinglePlayer");
    $(button2).html("MultiPlayer");
    $(button1).click(singlePlayer);
    $(button2).click(multiPlayer);
    var buttonNav=document.createElement("nav");
     $(buttonNav).append(button1);
     $(buttonNav).append(button2);
    
     $("#buttons").append(buttonNav);
    
  
}

    var playerCounter = 0;
    var compCounter = 0

function singlePlayer(){
    
  //  var playerCounter = document.getElementById("playerCounter");
   // var compCounter = document.getElementById("compCounter");

    

    $("#mainscreen").empty();
    $("#buttons").empty();
    $("#header").empty();

    var single=document.createElement("h1");
    $(single).attr("id", "singleTitle")
    $(single).html("Player Screen");
    $(header).append(single);

    var singleExplanation = document.createElement("p");
    $(singleExplanation).attr("id", "singleExplanation")
     $(singleExplanation). html("Each game has 3 rounds; once the 3 rounds are over, just click any of the buttons again to see who wins the game!");
     $(header).append(singleExplanation);

    
    var rockButton = document.createElement("img");
    $(rockButton).attr("id","rockButton");
    var paperButton = document.createElement("img");
    $(paperButton).attr("id","paperButton");
    var scissorsButton = document.createElement("img");
    $(scissorsButton).attr("id","scissorsButton");
    $(rockButton).attr("src","images/rps_icons/rps_rock.png");
    $(rockButton).click(rock);
    $(scissorsButton).attr("src", "images/rps_icons/rps_scissors.png");
    $(scissorsButton).click(scissors);
    $(paperButton).attr("src", "images/rps_icons/rps_paper.png");
    $(paperButton).click(paper);
       
    var rpsButtonNav = document.createElement("nav");
    $(rpsButtonNav).attr("id", "singlePlayerNav")
     $(rpsButtonNav).append(rockButton);
     $(rpsButtonNav).append(paperButton);
     $(rpsButtonNav).append(scissorsButton);

     


    var innerContainer = document.createElement("div");
    $(innerContainer).attr("id", "singleInner");

    var navContainer = document.createElement("div");
    $(navContainer).attr("id", "singleContainer");

    var infoContainer = document.createElement("div");
    $(infoContainer).attr("id", "infoContainer");

    var innerPageContainer = document.createElement("div");
    $(innerPageContainer).attr("id", "innerPageContainer");

    var pageContainer = document.createElement("div");
    $(pageContainer).attr("id", "pageContainer");
    
    $(innerContainer).append(rpsButtonNav);
    $(navContainer).append(innerContainer);
    $(innerPageContainer).append(infoContainer);
    $(innerPageContainer).append(navContainer);
    $(pageContainer).append(innerPageContainer)
    $(singleChoice).append(pageContainer);
     
}

function rock(){

    playerPick = "rock";
    roundWinner(playerPick);

}

function paper(){

    playerPick = "paper";
    roundWinner(playerPick);
}

function scissors(){

    playerPick = "scissors";
    roundWinner(playerPick);
}

function computerPlay(){
    var computerChoice=["rock","paper","scissors"]
    var computerMove=computerChoice[Math.round(Math.random()*2)]; //3, so it counts 0, 1 and 2 as options since math.random does the numbers below the one written
    return computerMove;
}


function roundWinner(){

    
    
    /*var innerContainer = document.createElement("div");
    $(innerContainer).attr("id", "singleInner");
    var navContainer = document.createElement("div");
    $(navContainer).attr("id", "singleContainer");
    $(innerContainer).append(rpsButtonNav)
    $(navContainer).append(innerContainer); potential code for adding the column to the right side of the screen*/
    
   comPick=computerPlay();
    
    if(roundCounter <= 3){
    var output = document.createElement("p");
    $(output).attr("id", "output")
    $(infoContainer).append(output);
 


    console.log(playerPick);


    if(playerPick==comPick){
        $(output).html("tie");
    }else if(playerPick=="rock" && comPick=="scissors" || playerPick=="paper" && comPick=="rock" || playerPick=="scissors" && comPick=="paper"){
        //player wins 
        $(output).html("player wins");
        playerCounter = playerCounter + 1;
    }else{
     //computer wins
        $(output).html("computer wins");
        compCounter = compCounter + 1;
    } 

    roundCounter = roundCounter + 1;

    if(roundCounter > 3){

        $(singleExplanation). html("Game Ended!")
    }
    
    }else{

        $(infoContainer).empty();
        gameWinner(compCounter, playerCounter);

        $(singleExplanation).html("game ended")

        var goBack = document.createElement("button")
        $(goBack).attr("id", "restartButton");
        $(goBack).html("restart");
        $(goBack).click(redo);
        

        var homeButton = document.createElement("button")
        $(homeButton).attr("id", "homeButton");
        $(homeButton).html("home");
        $(homeButton).click(home);
        

        var postGameNav = document.createElement("div")
        $(postGameNav).attr("id", "postGameNav")
        $(postGameNav).append(goBack);
        $(postGameNav).append(homeButton)
        $(infoContainer).append(postGameNav);

    }

}



function home(){

    $(singleChoice).empty();
    $(header).empty();
    mainscreen()
    roundCounter = 1;
    compCounter = 0;
    playerCounter = 0;
}



function redo(){


    $(singleChoice).empty();
    $(header).empty();
    singlePlayer();
    roundCounter = 1;
    compCounter = 0;
    playerCounter = 0;
}






function gameWinner(){
   
    if(compCounter > playerCounter){
        alert("You lost, computer won");
      
        
    }else if(playerCounter > compCounter){
           alert("You won, computer lost");
      
    }else{
        alert("its a tie")

    }
}






var playerOneCounter = 0;
var playerTwoCounter = 0; 

function multiPlayer(){
    
    $("#mainscreen").empty();
    $("#buttons").empty();
    $("#header").empty();
    
    var multiP=document.createElement("h1");
    $(multiP).attr("id", "multiTitle")
    $(multiP).html("Multiplayer");
    $(header).append(multiP);


    var singleExplanation = document.createElement("p");
    $(singleExplanation).attr("id", "singleExplanation")
     $(singleExplanation). html("Each player submits their choice reach round; this will happen for 3 rounds; make sure to click any button an extra time and the winner will be displayed; <span>player one may begin!</span>");
     $(header).append(singleExplanation);


    var rockButton = document.createElement("img");
    $(rockButton).attr("id","rockButton");
    var paperButton = document.createElement("img");
    $(paperButton).attr("id","paperButton");
    var scissorsButton = document.createElement("img");
    $(scissorsButton).attr("id","scissorsButton");
    $(rockButton).attr("src","images/rps_icons/rps_rock.png");
    $(rockButton).click(multiRock);
    $(scissorsButton).attr("src", "images/rps_icons/rps_scissors.png");
    $(scissorsButton).click(multiScissors);
    $(paperButton).attr("src", "images/rps_icons/rps_paper.png");
    $(paperButton).click(multiPaper);
       
    var rpsButtonNav = document.createElement("nav");
    $(rpsButtonNav).attr("id", "singlePlayerNav")
     $(rpsButtonNav).append(rockButton);
     $(rpsButtonNav).append(paperButton);
     $(rpsButtonNav).append(scissorsButton);


    var innerContainer = document.createElement("div");
    $(innerContainer).attr("id", "singleInner");

    var navContainer = document.createElement("div");
    $(navContainer).attr("id", "singleContainer");

    var infoContainer = document.createElement("div");
    $(infoContainer).attr("id", "infoContainer");

    var innerPageContainer = document.createElement("div");
    $(innerPageContainer).attr("id", "innerPageContainer");

    var pageContainer = document.createElement("div");
    $(pageContainer).attr("id", "pageContainer");

    // var submit = document.createElement("button");
    // $(submit).html("Submit")
    // $(submit).click(multiPlay)
    // $(submit).attr("id", "submit")
    // $(infoContainer).append(submit);

    
    $(innerContainer).append(rpsButtonNav);
    $(navContainer).append(innerContainer);
    $(innerPageContainer).append(infoContainer);
    $(innerPageContainer).append(navContainer);
    $(pageContainer).append(innerPageContainer)
    $(singleChoice).append(pageContainer);
    
}

function multiRock(){

    playerPick = "rock";
    playerOneOrTwo(playerPick);

}

function multiPaper(){

    playerPick = "paper";
    playerOneOrTwo(playerPick);
}

function multiScissors(){

    playerPick = "scissors";
    playerOneOrTwo(playerPick);
}



function playerOneOrTwo(){

    if(multiplayerCount <=6){

        if((multiplayerCount % 2) == 0){

                playerTwoActivation = playerTwoActivation + 1;
           
               $(singleExplanation).html("Player One's Turn");
           
               playerTwoPick = playerPick;
           
               console.log(playerTwoPick)
           
            
        }else{

                playerOneActivation = playerOneActivation + 1;
        
                $(singleExplanation).html("Player Two's Turn");
            

                playerOnePick = playerPick;

                console.log(playerOnePick)


        }

                var output = document.createElement("p");
                $(output).attr("id", "output")
                $(infoContainer).append(output);
                

                if(playerTwoActivation == playerOneActivation){
                    if(playerOnePick==playerTwoPick){
                        $(output).html("tie");
                
                    }else if(playerOnePick=="rock" && playerTwoPick=="scissors" || playerOnePick=="paper" && playerTwoPick=="rock" || playerOnePick=="scissors" &&playerTwoPick=="paper"){
                        //player wins 
                        $(output).html("player 1 wins");
                        playerOneCounter = playerOneCounter + 1;
                    }else{
                    //computer wins
                        $(output).html("player 2 wins");
                        playerTwoCounter = playerTwoCounter + 1;
                    } 
                }    

                multiplayerCount = multiplayerCount + 1;

                if(multiplayerCount > 6){
                    $(singleExplanation).html("Game Ended!");

                }
    

    }else {

        $(infoContainer).empty();
        gameWinnerMulti(playerOneCounter, playerTwoCounter);

        var goBack = document.createElement("button")
        $(goBack).attr("id", "restartButton");
        $(goBack).html("restart");
        $(goBack).click(multiRedo);
        

        var homeButton = document.createElement("button")
        $(homeButton).attr("id", "homeButton");
        $(homeButton).html("home");
        $(homeButton).click(multiHome);
        

        var postGameNav = document.createElement("div")
        $(postGameNav).attr("id", "postGameNav")
        $(postGameNav).append(goBack);
        $(postGameNav).append(homeButton)
        $(infoContainer).append(postGameNav);

    }

}



function gameWinnerMulti(){
   
    if(playerOneCounter > playerTwoCounter){
        alert("Player One wins!");
      
        
    }else if(playerTwoCounter > playerOneCounter){
           alert("Player Two wins!");
      
    }else{
        alert("its a tie")

    }
}


function multiHome(){

    $(singleChoice).empty();
    $(header).empty();
    mainscreen()
    multiplayerCount = 1;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    playerOneActivation = 0;
    playerTwoActivation = 0;
}



function multiRedo(){


    $(singleChoice).empty();
    $(header).empty();
    multiPlayer()
    multiplayerCount = 1;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    playerOneActivation = 0;
    playerTwoActivation = 0;

}

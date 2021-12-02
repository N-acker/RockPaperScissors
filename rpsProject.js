var playerPick=""
var roundCounter=3;
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

   
    var choice=0;
    var singleDev = document.createElement("div");

    $("#mainscreen").empty();
    $("#buttons").empty();
    $("#header").empty();

    var single=document.createElement("h1");
    $(single).attr("id", "singleTitle")
    $(single).html("Player Screen");
    $(header).append(single);
    
    var rockButton = document.createElement("img");
    $(rockButton).attr("id","rockButton");
    var paperButton = document.createElement("img");
    $(paperButton).attr("id","paperButton");
    var scissorsButton = document.createElement("img");
    $(scissorsButton).attr("id","scissorsButton");
    $(rockButton).attr("src","images/rps_icons/rps_rock.png");
    $(rockButton).click(roundWinner);
    $(scissorsButton).attr("src", "images/rps_icons/rps_scissors.png");
    $(scissorsButton).click(roundWinner);
    $(paperButton).attr("src", "images/rps_icons/rps_paper.png");
    $(paperButton).click(roundWinner);
       
    // function rock(){
    //     playerPick="rock"
    //     roundWinner();
    //     gameWinner()
    
    // }

    // function paper(){
    //     playerPick="paper"
    //  roundWinner();
    //     gameWinner()
    // }
    
    // function scissors(){
    //     playerPick="scissors"
    //      roundWinner();
    //     gameWinner()
    // }
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
    $(infoContainer) = document.createElement("div");
    var pageContainer = document.createElement("div");
    $(pageContainer).attr("id", "pageContainer");
    $(innerContainer).append(rpsButtonNav);
    $(navContainer).append(innerContainer);
    $(pageContainer).append(infoContainer);
    $(pageContainer).append(navContainer);
    $(singleChoice).append(pageContainer);
     
}

function roundWinner(){

    // $("#singleContainer").empty();
    // $("#header").empty();
    
    /*var innerContainer = document.createElement("div");
    $(innerContainer).attr("id", "singleInner");
    var navContainer = document.createElement("div");
    $(navContainer).attr("id", "singleContainer");
    $(innerContainer).append(rpsButtonNav)
    $(navContainer).append(innerContainer); potential code for adding the column to the right side of the screen*/
    
   comPick=computerPlay();
    var playerPick= document.createElement("p");

    if (document.getElementbyId("paperButton").clicked==true){
        $(playerPick).html("paper");
        $(singleChoice).append(playerPick);
    }else if(document.getElementbyId("rockButton").clicked==true){
        $(playerPick).html("rock");
        $(singleChoice).append(playerPick);
    }else if(document.getElementbyId("scissorsButton").clicked==true){
        $(playerPick).html("scissors");
        $(singleChoice).append(playerPick);
    }
    if(playerPick==comPick){
        return "tie";
    }else if(playerPick=="rock" && comPick=="scissors" || playerPick=="paper" && comPick=="rock" || playerPick=="scissors" && comPick=="paper"){
        //player wins 
        playerCounter+=1;
        return "player";
    }else{
     //computer wins
        compCounter+=1;
        return "computer";
    }   
}



function gameWinner(){
   
    if(compCounter==2){
        alert("You lost, computer won");
      
        
    }else if(playerCounter==2){
           alert("You won, computer lost");
      
    }else if(playerCounter==1 && compCounter==1 && roundCounter==0){
        alert("its a tie")

    }
}



function multiPlayer(){
    var multiDev = document.createElement("div");
    $("#mainscreen").empty();
    $("#buttons").empty();
    $("#header").empty();
    
    var multiP=document.createElement("h1");
    $(multiP).attr("id", "multiTitle")
    $(multiP).html("Player One Screen");
    $(header).append(multiP);

    var rockButton = document.createElement("img");
    $(rockButton).attr("id","rockButton");
    var paperButton = document.createElement("img");
    $(paperButton).attr("id","paperButton");
    var scissorsButton = document.createElement("img");
    $(scissorsButton).attr("id","scissorsButton");
    $(rockButton).attr("src","images/rps_icons/rps_rock.png");
    $(rockButton).click(roundWinner);
    $(scissorsButton).attr("src", "images/rps_icons/rps_scissors.png");
    $(scissorsButton).click(roundWinner);
    $(paperButton).attr("src", "images/rps_icons/rps_paper.png");
    $(paperButton).click(roundWinner);
    

    var rpsButtonNav = document.createElement("nav");
    $(rpsButtonNav).attr("id", "singlePlayerNav")
     $(rpsButtonNav).append(rockButton);
     $(rpsButtonNav).append(paperButton);
     $(rpsButtonNav).append(scissorsButton);


    var innerContainer = document.createElement("div");
    $(innerContainer).attr("id", "singleInner");
    var navContainer = document.createElement("div");
    $(navContainer).attr("id", "singleContainer");
    var singleCounter = document.createElement("div");
    $(singleCounter).attr("id", "counterBox");
    $(innerContainer).append(rpsButtonNav)
    $(navContainer).append(innerContainer);
    $(singleChoice).append(navContainer);
    $(singleCounter).append(innerContainer);
    
    // var p1=document.createElement("span");
    // $(p1).attr("id", "player1")
    // $(p1).html("Player One");
    // $(multiP).append(p1);

    // var p2=document.createElement("span");
    // $(p2).attr("id", "player2")
    // $(p2).html("Player Two");
    // $(multiP).append(p2);

    
}

function computerPlay(){
    computerChoice=["rock","paper","scissors"]
    computerMove=computerChoice[Math.round(Math.random()*2)]; //3, so it counts 0, 1 and 2 as options since math.random does the numbers below the one written
    return computerMove;
    

}

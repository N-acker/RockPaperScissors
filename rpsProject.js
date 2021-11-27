
window.onload=function()
{
    mainscreen();
    
}    

function mainscreen(){
    var flexDiv=document.createElement("div");
    $(flexDiv).attr("id","flex");
    var newPic=document.createElement("img");
    // var picDiv=document.createElement("img");
    var picDiv=document.createElement("div");
    $(picDiv).attr("id","picture");
    $(newPic).attr("src","images/homescreen_image/rps_home.jpg");
    $(picDiv).append(newPic);
    $(flexDiv).append(picDiv);
    var discrition=document.createElement("p");
    $(discrition).html("Rock paper scissors is a well known game which is quick and easy to play. To start our virtual rendition of the game, either choose single player mode or multiplayer mode. From here, you will be prompted to make a choice of rock, paper or scissors. Make your choice, and have fun!")
    var dDiscript=document.createElement("div");

    $(dDiscript).attr("id","description");
    $(dDiscript).append(discrition);
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


function singlePlayer(){
    var choice=0;
    var singleDev = document.createElement("div");
    $("#mainscreen").empty();
    $("#buttons").empty();
    
    
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
    $(rpsButtonNav).attr("id", "singlePlayerNav");
    $(rpsButtonNav).attr("id", "divisionLine");
     $(rpsButtonNav).append(rockButton);
     $(rpsButtonNav).append(paperButton);
     $(rpsButtonNav).append(scissorsButton);

    var navContainer = document.createElement("div")
    $(navContainer).append(rpsButtonNav);

    
     $("#singleChoice").append(rpsButtonNav);
     $("#singleChoice").append(navContainer);

     var playerCounter = document.getElementById("counterOne");
     var compCounter = document.getElementById("counterTwo");

     var playerCounter = 0;
     var compCounter = 0;
     
    
}
function roundWinner(){
   comPick=computerPlay();
    playerPick="";
    if (document.getElementbyId("paperButton").clicked==true){
        playerPick="paper";
    }else if(document.getElementbyId("rockButton").clicked==true){
         playerPick="rock"
    }else if(document.getElementbyId("scissorsButton").clicked==true){
          playerPick="scissors"
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
   
    
}




function multiPlayer(){
    var multiDev = document.createElement("div");
    $("#mainscreen").empty();
    $("#buttons").empty();
    

    
}

function computerPlay(){
    computerChoice=["rock","paper","scissors"]
    computerMove=computerChoice[Math.round(Math.random()*2)];
    return computerMove;
    

}
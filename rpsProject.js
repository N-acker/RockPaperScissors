
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
    var paperButton = document.createElement("img");
    var scissorsButton = document.createElement("img");
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
    
     $("#singleChoice").append(rpsButtonNav);

     var counterOne = document.getElementById("counterOne");
     var counterTwo = document.getElementById("counterTwo");

     var counterOne = 0;
     var counterTwo = 0;
     
    
}

function rock(){
 var choice=1
 alert("1")
    
}

function paper(){
    var choice=2
    alert("2")
}

function scissors(){
    var choice=3
    alert("3")
}



function multiPlayer(){
    var multiDev = document.createElement("div");
    $("#mainscreen").empty();
    $("#buttons").empty();
    

    
}

function computerPlay(){
    //Gets number 0-2
    //0 representing rock
    //1 representing paper
    //2 repersenting siscors
    var computerMove=Math.round(Math.random()*2)

}

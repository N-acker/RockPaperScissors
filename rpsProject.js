
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
    $(newPic).attr("src","images/homescreen_image/rps_homescreen.jpg");
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
    $(rockButton).attr("src","");
    $(rockButton).click(rock);
    


    var rpsButtonNav = document.createElement("nav");
     $(rpsButtonNav).append(rockButton);
     $(rpsButtonNav).append(paperButton);
     $(rpsButtonNav).append(scissorsButton);
    
     $("#singleChoice").append(rpsButtonNav);
    
}

function rock{
 var choice=1
 alert("1")
    
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

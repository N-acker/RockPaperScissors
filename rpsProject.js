
window.onload=function()
{
    mainscreen();
    
    
}
function mainscreen(){
    var flexDiv=document.createElement("div");
    var newPic=docment.createElement("img");
    $(newPic).attr("src","images/homescreen_image/rps_homescreen.jpg")
    $(flexDiv).append(newPic);
    var discrition=docment.createElement("p");
    $(discrition).html("Rock paper scissors is a well known game which is quick and easy to play. To start our virtual rendition of the game, either choose single player mode or multiplayer mode. From here, you will be prompted to make a choice of rock, paper or scissors. Make your choice, and have fun!")
    var dDiscript=docmuent.createElement("div");
    $(dDiscript).append(discrition)
    $(flexDiv).append(dDiscript);
    $("#mainscreen").append(flexDiv);
  
}


function singlePlayer(){

    
}


function multiPlayer(){

    
}
function computerPlay(){
    //Gets number 0-2
    //0 representing rock
    //1 representing paper
    //2 repersenting siscors
    var computerMove=Math.round(Math.random()*2)

}

var pattern=[];
var j=0;
var level=0;
$(".box").click(checkclass);

$(document).on("keypress",function(event){
    if (event.key=="s"){
        //if anyone clicks s in the middle of the game 
        // the should restart from begin
        //so we should make variables empty
        j=0;
        level=0;
        pattern=[];
        startgame();
    }
});


function startgame(){
    level++;
    $("h1").text("Level "+level);
    //after displaying the level we need to give animation.
    setTimeout(function (){
    var rand=Math.random()*4+1;
    rand=Math.floor(rand);
    pattern.push("box"+rand);
    animate("box"+rand);
    },1000);
      

}

function checkclass(){  
    var button;
    if(this.classList.contains("box1")){
        button= "box1";
    }
    if(this.classList.contains("box2")){
        button="box2";
    }
    if(this.classList.contains("box3")){
        button="box3";
    }
    if(this.classList.contains("box4")){
        button="box4";
    }
    animate2(button);
    if(pattern.length==0){//if any user clicks without starting game.
        return;
    }
    if(pattern[j]==button){
        j++;      
    }
    else{
        gameover();
        return;
    }
    if(pattern.length==j){
        // console.log(j);
        // console.log(pattern);
        j=0;
        setTimeout(startgame,1000);
        
    }

}
function gameover(){
    pattern=[];
    j=0;
    level=0;
    var audio=new Audio("sounds/beep-05.mp3");
    setTimeout(function(){
        audio.play();
        $("body").addClass("bg");
        $("h1").text("Game Over")
    },200);
    setTimeout(function(){
        $("body").removeClass("bg");
        $("h1").text("Click s to restart");
    },1000);

    
    
}

function animate(classname){

    $("."+classname).addClass("effect");
    var audio=new Audio("sounds/beep-07a.mp3");
    audio.play();
    setTimeout(function (){
        $("."+classname).removeClass("effect");
    },300);
}
function animate2(classname){

    $("."+classname).addClass("effect2");
   
    setTimeout(function (){
        $("."+classname).removeClass("effect2");
        
    },200);
  

    
}
// main branch
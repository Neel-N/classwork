var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var rover_width=100;
var rover_height=90;

var background_image="mars.jpg";
var rover_image="rover.png";

var rover_x=10;
var rover_y=10;

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;


    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;

if(keyPressed=='37'){
    left();
}
if(keyPressed=='38'){
    up();
}
if(keyPressed=='39'){
    right();
}
if(keyPressed=='40'){
    down();
}

}
function up(){
    if(rover_y>=0){
 rover_y=rover_y-10;
   console.log("x="+rover_x+"y="+rover_y);
    uploadBackground();
    uploadRover();
}
}
function down(){
    if(rover_y<400){
rover_y=rover_y+10;
console.log("x="+rover_x+"y="+rover_y);
uploadBackground();
uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }

}

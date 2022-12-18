function preload(){

}

function setup(){
canvas = createCanvas(450,350);
canvas.position(100, 250);
video = createCapture(VIDEO);
video.hide();
tint_colour = "";

}

 function draw(){
image(video, 0, 0, 450, 350);
tint(tint_colour);
 }

 function take_snapshot(){
     save("My filtered image.jpg");

 }

 function filter_colour(){
     tint_colour = document.getElementById("colour_name").value;
 }
video="";


function preload(){
    video= createVideo('video.mp4');
    video.hide();    
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function begin(){
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="Status : Detected";
}
function modelLoaded(){
    console.log("The Devil Fruit has arrived");
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0)
}
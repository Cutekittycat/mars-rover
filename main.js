canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

nasa_array=["NASA1.jpg","Nasa2.jpg","nasa3.jpg","NaSa4.jpg"];
ran=Math.floor(Math.random()*4);

background_image = nasa_array[ran];
rover_image = "rover.png";

function add() {
    background_imagTag = new Image();
    background_imagTag.onload = uploadBackground;
    background_imagTag.src = background_image;


    rover_imagTag = new Image();
    rover_imagTag.onload = uploadrover;
    rover_imagTag.src = rover_image;


}

function uploadBackground() {
    ctx.drawImage(background_imagTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imagTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == '38') {
        up();
        console.log("UP pressed");
    }

    if (keyPressed == '40') {
        down();
        console.log("Down pressed");
    }

    if (keyPressed == '37') {
        left();
        console.log("Left pressed");
    }

    if (keyPressed == '39') {
        right();
        console.log("Right pressed");
    }

}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
    }
}
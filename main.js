canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

   

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed  == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed  == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed  == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed  == '39')
    {
        right();
        console.log("right");
    }
}

function aplhabetkey()
{
	

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	

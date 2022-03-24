var mouse_event="empty";
var last_position_of_x , last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2D");
color= "black";
width= 1;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
mouse_event="mouseDown";

}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseLeave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if(
    mouse_event=="mouseDown"
)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("last postion of x and y cordinates = ");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x and y = ");
    console.log("x="+current_x+"y="+current_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();


}
last_position_of_x=current_x;
last_position_of_y=current_y;
}


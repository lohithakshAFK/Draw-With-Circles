var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;

canvas.addEventListener("mousedown" , my_mouse_down);


function my_mouse_down(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouse_up);


function my_mouse_up(e){
    mouseEvent = "mouseUp";
}


canvas.addEventListener("mouseleave" , my_mouse_leave);


function my_mouse_leave(e){
    mouseEvent = "mouseLeave";
}



canvas.addEventListener("mousemove" , my_mouse_move);


function my_mouse_move(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of the X and Y cordinates are");
        console.log("x=" + last_position_x + ", y=" + last_position_y);

        console.log("Curent POsition Of X and Y cordinates are:")
        console.log("x=" + current_position_of_x + ", y=" + current_position_of_y);
        ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI);
        ctx.stroke();
    }

        last_position_x = current_position_of_x;
        last_position_y = current_position_of_y; 
}



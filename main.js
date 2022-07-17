//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
//Give specific height and width to the car image
greencar_width =75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x =5;
greencar_y=225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.oinload = greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x ,greencar_y, greeencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '87')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '83')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '65')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '68')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y>= 0) {
		greencar_y= greencar_y-10
		uploadBackground()
		uploadgreencar()
	}
}
   
function down()
{
	
	if (greencar_y<=400) {
		greencar_y= greencar_y+10
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	
	if (greencar_x>= 0) {
		greencar_x= greencar_x-10
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	if (greencar_x <= 800) {
		greencar_x= greencar_x+10
		uploadBackground()
		uploadgreencar()
	}
	//Define function to move the car right side
}

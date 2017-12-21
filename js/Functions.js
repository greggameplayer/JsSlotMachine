var count = 1;
var countimg = 1;
var countimgfinal = 1;
var functionanimdebut;
var slotexec = 1;
var ms = 100;
var win = new Audio('sounds/win.wav');
var lose = new Audio('sounds/lose.mp3');
var jackpot = new Audio('sounds/jackpot.wav');
function winlosenotif()
{
if((slot1 === slot2 || slot1 === slot3 || slot2 === slot3) && (slot1 !== slot2 || slot1 !== slot3 || slot2 !== slot3)){
				win.play();
				window.alert("Vous avez gagné 2 fois la mise !");
				credit = credit + (bet * 2);
				document.getElementById("credit").innerHTML = "Crédit: " + credit;	
}else{		
		if(slot1 === slot2 && slot1 === slot3 && slot2 === slot3){
			jackpot.play();
			window.alert("Vous avez gagné 10 fois la mise !");
			credit = credit + (bet * 10);
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
		}else{
			lose.play();
			window.alert("vous avez perdu !");
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
		}
	}
}
function drawImages(canvasslot, imgsrc, topspin)
{	
    var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);	
	var img = new Image();
    img.onload = function () {
		context.drawImage(img, 65,topspin,img.width,img.height,65,topspin,150,75);
	}
	img.src = imgsrc ;   
	img.id = canvasslot + "img";
}
function ClearCanvas(canvasslot)
{
	var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);
}
function ImgAnim1(imgstop1, imgstop2, imgstop3){
	if(slotexec === 1){
	if(countimg === 1){
	drawImages('canvasslot1', "images/lucky-seven.png", (-25 + count));
	}else if(countimg === 2){
	drawImages('canvasslot1', "images/Slot_Grapes.png", (-25 + count));
	}else if(countimg === 3){
	drawImages('canvasslot1', "images/clover.png", (-25 + count));
	}else if(countimg === 4){
	drawImages('canvasslot1', "images/bells-32.png", (-25 + count));
	}else if(countimg === 5){
			drawImages('canvasslot1', "images/cherry.png", (-25 + count));	
	}
	if(count <= 95){
	count++;	
	}else{
	count = 1;
	countimg++;
	}
	if(countimg > 5){
		    if(imgstop1 === 1){

			drawImages('canvasslot1', "images/lucky-seven.png", (-25 + count));
			

			}else if(imgstop1 === 2){

			drawImages('canvasslot1', "images/Slot_Grapes.png", (-25 + count));	

			
			
			}else if(imgstop1 === 3){

			drawImages('canvasslot1', "images/clover.png", (-25 + count));	

			

			}else if(imgstop1 === 4){

			drawImages('canvasslot1', "images/bells-32.png", (-25 + count));	
			

			}else if(imgstop1 === 5){
		
			drawImages('canvasslot1', "images/cherry.png", (-25 + count));	
			
			
			}
			countimgfinal++;
			if(countimgfinal > 60){
				count = 1;
				countimg = 1;
				countimgfinal = 1;
				slotexec = 2;
			}
		
	}
	} else if(slotexec === 2){
			if(countimg === 1){
	drawImages('canvasslot2', "images/lucky-seven.png", (-25 + count));
	}else if(countimg === 2){
	drawImages('canvasslot2', "images/Slot_Grapes.png", (-25 + count));
	}else if(countimg === 3){
	drawImages('canvasslot2', "images/clover.png", (-25 + count));
	}else if(countimg === 4){
	drawImages('canvasslot2', "images/bells-32.png", (-25 + count));
	}else if(countimg === 5){
			drawImages('canvasslot2', "images/cherry.png", (-25 + count));	
	}
	if(count <= 95){
	count++;	
	}else{
	count = 1;
	countimg++;
	}
	if(countimg > 5){
		    if(imgstop2 === 1){
			drawImages('canvasslot2', "images/lucky-seven.png", (-25 + count));
			}else if(imgstop2 === 2){
			drawImages('canvasslot2', "images/Slot_Grapes.png", (-25 + count));				
			}else if(imgstop2 === 3){
			drawImages('canvasslot2', "images/clover.png", (-25 + count));				
			}else if(imgstop2 === 4){
			drawImages('canvasslot2', "images/bells-32.png", (-25 + count));				
			}else if(imgstop2 === 5){
			drawImages('canvasslot2', "images/cherry.png", (-25 + count));				
			}
			countimgfinal++;
			if(countimgfinal > 60){
				count = 1;
				countimg = 1;
				countimgfinal = 1;
				slotexec = 3;
				
			}
		
	}
	}else if(slotexec === 3){
	if(countimg === 1){
	drawImages('canvasslot3', "images/lucky-seven.png", (-25 + count));
	}else if(countimg === 2){
	drawImages('canvasslot3', "images/Slot_Grapes.png", (-25 + count));
	}else if(countimg === 3){
	drawImages('canvasslot3', "images/clover.png", (-25 + count));
	}else if(countimg === 4){
	drawImages('canvasslot3', "images/bells-32.png", (-25 + count));
	}else if(countimg === 5){
			drawImages('canvasslot3', "images/cherry.png", (-25 + count));	
	}
	if(count <= 95){
	count++;	
	}else{
	count = 1;
	countimg++;
	}
	if(countimg > 5){
		    if(imgstop3 === 1){
			drawImages('canvasslot3', "images/lucky-seven.png", (-25 + count));
			}else if(imgstop3 === 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", (-25 + count));				
			}else if(imgstop3 === 3){
			drawImages('canvasslot3', "images/clover.png", (-25 + count));				
			}else if(imgstop3 === 4){
			drawImages('canvasslot3', "images/bells-32.png", (-25 + count));				
			}else if(imgstop3 === 5){
			drawImages('canvasslot3', "images/cherry.png", (-25 + count));				
			}
			countimgfinal++;
			if(countimgfinal > 60){
				
					winlosenotif();
					document.getElementById('spinbutton').disabled = false;	
				    clearInterval(functionanimdebut);
				
			}
		
	}
	}
			
}
function ImgAnim(imgstop1, imgstop2, imgstop3){
	count = 1;
	countimg = 1;
	countimgfinal = 1;
	slotexec = 1;
	functionanimdebut = setInterval(ImgAnim1, 10,imgstop1, imgstop2, imgstop3);



}

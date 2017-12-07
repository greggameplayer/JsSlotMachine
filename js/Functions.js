function winlosenotif()
{
if((slot1 == slot2 || slot1 == slot3 || slot2 == slot3) && (slot1 != slot2 || slot1 != slot3 || slot2 != slot3)){
			
				window.alert("Vous avez gagné 2 fois la mise !");
				credit = credit + (bet * 2);
				document.getElementById("credit").innerHTML = "Crédit: " + credit;
			
		} 
		if(slot1 == slot2 && slot1 == slot3 && slot2 == slot3){
			window.alert("Vous avez gagné 10 fois la mise !");
			credit = credit + (bet * 10);
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
		}
		if(slot1 != slot2 && slot1 != slot3 && slot2 != slot3){	
			window.alert("vous avez perdu !");
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
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
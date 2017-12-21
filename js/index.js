var credit = 50;
var bet = 5;
var slot1;
var slot2;
var slot3;
var loop1;
var loop2;
var loop3;
var nbrebutton = 0;
var imgsrcsave;
var nbrefunction = 0;
function Spin()
{
	document.getElementById('spinbutton').disabled = true;
	if(credit < bet){ // test si crédit inférieur à 5
	    document.getElementById('spinbutton').disabled = false;
		window.alert("Vous n'avez pas assez de crédit !");
	}
	if(credit >= bet){ //test si crédit supérieur ou égale à 5
	    
		credit = credit - bet;
		document.getElementById("credit").innerHTML = "Crédit: " + credit;
		slot1 = Math.floor((Math.random() * 5) + 1);//
		slot2 = Math.floor((Math.random() * 5) + 1);//
		slot3 = Math.floor((Math.random() * 5) + 1);//génération des nombres associé au image et des nombre de tours
		loop1 = Math.floor((Math.random() * 3) + 1);//
		loop2 = Math.floor((Math.random() * 3) + 1);//
		loop3 = Math.floor((Math.random() * 3) + 1);//
		ClearCanvas('canvasslot1');//
        ClearCanvas('canvasslot2');//efface les canvas 1,2 et 3
        ClearCanvas('canvasslot3');//		
		ImgAnim(slot1, slot2, slot3);
	}
}
/*function winlosenotif()
{
if(slot1 == slot2 || slot1 == slot3 || slot2 == slot3){
			if(slot1 != slot2 || slot1 != slot3 || slot2 != slot3){
				window.alert("Vous avez gagné 2 fois la mise !");
				credit = credit + (bet * 2);
				document.getElementById("credit").innerHTML = "Crédit: " + credit;
			}else{
			
			}
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
}*/
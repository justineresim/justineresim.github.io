function enter() {
	  
	  var page1 = document.getElementById("page1");

	TweenMax.to(page1, 1.5, {opacity:0, repeat:0, yoyo:true, onComplete:page2});


	function page2(){

	   document.getElementById("page1").className='hidden';
		document.getElementById("all").className='unhidden';
		document.body.style.background= 'url(images/background.jpg)no-repeat top';
		
		var wired = document.getElementById("wired");
	
		TweenLite.from(wired, 3, {scaleX:.1, scaleY:.1, x: -3, y:-5, ease:Sine.easeIn});
	
		var page2 = document.getElementById("all");
	
		TweenMax.to(page2, 1.5, {opacity:1, repeat:0, yoyo:true});
	}
}


function exit(){

	var wired = document.getElementById("all");

	TweenMax.to(wired, 1.5, {opacity:0, repeat:0, yoyo:true, onComplete:main});

	function main(){
 		document.getElementById("page1").className='unhidden';
    	document.getElementById("all").className='hidden';
	
		document.body.style.background= 'url(images/room.jpg)no-repeat center center fixed';

		var main = document.getElementById("page1");

		TweenMax.to(main, 1.5, {opacity:1, repeat:0, yoyo:true});

	}
}


function imageChange(id){
	
	document.getElementById("firstimage").innerHTML=  "<img src=\"images/link.png\" onmouseover=\"this.src='images/link2.png'\"  onmouseout=\"this.src='images/link.png'\" alt=\"link\">";
	var image = document.getElementById("ipad3");
	TweenMax.to(image, 1.5, {opacity:0, repeat:0, yoyo:true, onComplete:changeImage});

	function changeImage(){
	
		document.getElementById("ipad3").innerHTML =   "<img src=\"images/"+id+".png\" alt=\"ipad\">";
		var image = document.getElementById("ipad3");
		TweenMax.to(image, 1.5, {opacity:1, repeat:0, yoyo:true});

	}
}







// JavaScript Document
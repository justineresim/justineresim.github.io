// JavaScript Document
var number;


function showText(id){
	
	"use strict";
	
	if(id == 1){
		
		document.getElementById("featuresText").style.opacity = 0;	
		
		document.getElementById("feature1").innerHTML = " <a href = \"#;\"><img src=\"images/editGreen.png\" alt=\"icon\"> <h1> Edit </h1></a>";
		document.getElementById("feature2").innerHTML = " <a href = \"#;\" onClick = \"showText('2')\"><img src=\"images/search.png\" alt=\"icon\"><h1> Search</h1></a>";
		document.getElementById("feature3").innerHTML = " <a href = \"#;\" onClick = \"showText('3')\"><img src=\"images/email.png\" alt=\"icon\"><h1> Email </h1> </a>";
		document.getElementById("feature4").innerHTML = " <a href = \"#;\" onClick = \"showText('4')\"><img src=\"images/setting.png\" alt=\"icon\"><h1> Settings </h1> </a>";
		document.getElementById("feature5").innerHTML = " <a href = \"#;\" onClick = \"showText('5')\"><img src=\"images/checkmark.png\" alt=\"icon\"><h1>To-Dos</h1> </a>";
		
		setTimeout(function() {	
		
	document.getElementById("featuresText").innerHTML = "<p><b>Editing projects, lists and to-dos is quick and easy using Portage.</b> You are able to change titles, due dates and who the task is assigned to.</p>";
		
		document.getElementById("featuresText").style.opacity = 1;
				
		}, 200);	
	}	
		
	if(id == 2){
		
		document.getElementById("featuresText").style.opacity = 0;	
		
		document.getElementById("feature1").innerHTML = " <a href = \"#;\" onClick = \"showText('1')\"><img src=\"images/edit.png\" alt=\"icon\"><h1> Edit </h1> </a>";
		document.getElementById("feature2").innerHTML = " <a href = \"#;\"><img src=\"images/searchGreen.png\" alt=\"icon\"><h1> Search</h1></a>";
		document.getElementById("feature3").innerHTML = " <a href = \"#;\" onClick = \"showText('3')\"><img src=\"images/email.png\" alt=\"icon\"><h1> Email </h1> </a>";
		document.getElementById("feature4").innerHTML = " <a href = \"#;\" onClick = \"showText('4')\"><img src=\"images/setting.png\" alt=\"icon\"><h1> Settings </h1> </a>";
		document.getElementById("feature5").innerHTML = " <a href = \"#;\" onClick = \"showText('5')\"><img src=\"images/checkmark.png\" alt=\"icon\"><h1>To-Dos</h1> </a>";
		
		setTimeout(function() {			
			document.getElementById("featuresText").innerHTML = "<p>Portage comes with full search functionality. Search through your to-dos, lists and comments all with one click. <b>Portage makes it easy to find what you are looking for.</b></p>";
			document.getElementById("featuresText").style.opacity = 1;
				
		}, 200);			
	}
		if(id == 3){
		
		document.getElementById("featuresText").style.opacity = 0;	
		
		document.getElementById("feature1").innerHTML = " <a href = \"#;\" onClick = \"showText('1')\"><img src=\"images/edit.png\" alt=\"icon\"><h1> Edit </h1> </a>";
		document.getElementById("feature2").innerHTML = " <a href = \"#;\" onClick = \"showText('2')\"><img src=\"images/search.png\" alt=\"icon\"><h1> Search</h1></a>";
		document.getElementById("feature3").innerHTML = " <a href = \"#;\"><img src=\"images/emailGreen.png\" alt=\"icon\"><h1> Email </h1> </a>";
		document.getElementById("feature4").innerHTML = " <a href = \"#;\" onClick = \"showText('4')\"><img src=\"images/setting.png\" alt=\"icon\"><h1> Settings </h1> </a>";
		document.getElementById("feature5").innerHTML = " <a href = \"#;\" onClick = \"showText('5')\"><img src=\"images/checkmark.png\" alt=\"icon\"><h1>To-Dos</h1> </a>";
		
		setTimeout(function() {		
			document.getElementById("featuresText").innerHTML = "<p> <b> Portage makes it easy for everyone to stay connected.</b> Emailing comments to users is built right in. You can change settings and decide who you want your comments emailed to.</p>";
			document.getElementById("featuresText").style.opacity = 1;
				
		}, 200);			
		
	}
	
		if(id == 4){
		document.getElementById("featuresText").style.opacity = 0;	
		
		document.getElementById("feature1").innerHTML = " <a href = \"#;\" onClick = \"showText('1')\"><img src=\"images/edit.png\" alt=\"icon\"> <h1> Edit </h1></a>";
		document.getElementById("feature2").innerHTML = " <a href = \"#;\" onClick = \"showText('2')\"><img src=\"images/search.png\" alt=\"icon\"><h1> Search</h1></a>";
		document.getElementById("feature3").innerHTML = " <a href = \"#;\" onClick = \"showText('3')\"><img src=\"images/email.png\" alt=\"icon\"><h1> Email </h1> </a>";
		document.getElementById("feature4").innerHTML = " <a href = \"#;\"><img src=\"images/settingGreen.png\" alt=\"icon\"><h1> Settings </h1> </a>";
		document.getElementById("feature5").innerHTML = " <a href = \"#;\" onClick = \"showText('5')\"><img src=\"images/checkmark.png\" alt=\"icon\"><h1>To-Dos</h1> </a>";
		
		setTimeout(function() {
			document.getElementById("featuresText").innerHTML = "<p>Portage is completly customizable to each users preferences. Decide which lists and to-dos you want to see and how you want to see them. <b>With Portage keeping organized is simple.</b></p>";
			document.getElementById("featuresText").style.opacity = 1;
				
		}, 200);	
	}
	
	if(id == 5){
		
		document.getElementById("featuresText").style.opacity = 0;	
		
		document.getElementById("feature1").innerHTML = " <a href = \"#;\" onClick = \"showText('1')\"><img src=\"images/edit.png\" alt=\"icon\"><h1> Edit </h1> </a>";
		document.getElementById("feature2").innerHTML = " <a href = \"#;\" onClick = \"showText('2')\"><img src=\"images/search.png\" alt=\"icon\"><h1> Search</h1></a>";
		document.getElementById("feature3").innerHTML = " <a href = \"#;\" onClick = \"showText('3')\"><img src=\"images/email.png\" alt=\"icon\"><h1> Email </h1> </a>";
		document.getElementById("feature4").innerHTML = " <a href = \"#;\" onClick = \"showText('4')\"><img src=\"images/setting.png\" alt=\"icon\"><h1> Settings </h1> </a>";
		document.getElementById("feature5").innerHTML = " <a href = \"#;\"><img src=\"images/checkmarkGreen.png\" alt=\"icon\"><h1>To-Dos</h1> </a>";
		
		setTimeout(function() {		
			document.getElementById("featuresText").innerHTML = "<p><b>Manage your To-Do Lists on-the-go.</b> Portage comes with all functions of Basecamp To-Do Lists including creating lists, creating do-tos, editing lists, adding comments, previewing files, completing tasks and more.</p>";
			document.getElementById("featuresText").style.opacity = 1;
				
		}, 200);	
	}
}

function move1(){
	"use strict";
	
	number = 1;
	
	document.getElementById("image1").style.top = "80px";
	document.getElementById("image1").style.left = "2%";
	document.getElementById("image1").style.zIndex = "2";
	document.getElementById("imageOne").style.width = "100%";
	document.getElementById("image1").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image2").style.top = "10px";
	document.getElementById("image2").style.left = "-12%";
	document.getElementById("image2").style.zIndex = "3";
	document.getElementById("imageTwo").style.width = "150%";
	document.getElementById("image2").style.webkitFilter = "none";
	
	document.getElementById("image3").style.top = "80px";
	document.getElementById("image3").style.left = "-16%";
	document.getElementById("image3").style.zIndex = "2";
	document.getElementById("imageThree").style.width = "100%";
	document.getElementById("image3").style.webkitFilter = "blur(1px)";
	
	document.getElementById("image4").style.top = "150px";
	document.getElementById("image4").style.left = "-24%";
	document.getElementById("image4").style.zIndex = "1";
	document.getElementById("imageFour").style.width = "50%";
	document.getElementById("image4").style.webkitFilter = "blur(1px)";
	
	document.getElementById("image5").style.left = "-80%";
	document.getElementById("image5").style.zIndex = "0";
	document.getElementById("image5").style.top = "150px";
	document.getElementById("imageFive").style.width = "50%";
	document.getElementById("image5").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("next").innerHTML = "<a href = \"#;\" onClick=\"move2()\"><img src=\"images/iconnext.png\" alt=\"next\"  id = \"iconNext\"></a>";
	document.getElementById("back").innerHTML = "<a href = \"#;\" onClick=\"move5()\"><img src=\"images/iconback.png\" alt=\"back\"  id = \"iconBack\"></a>";
	
	document.getElementById("changingText").innerHTML = "<h2>Select Projects</h2> <p>Portage's simple design allows users to navigate through their Basecamp Projects with ease.</p>"; 
	
	document.getElementById("iPhoneImage").innerHTML = "<img src=\"images/screen2.png\" alt=\"screen shot\">";
	
}

function move2(){
	"use strict";
	
	number = 2;
	
	document.getElementById("image5").style.top = "80px";
	document.getElementById("image5").style.left = "-78%";
	document.getElementById("image5").style.zIndex = "2";
	document.getElementById("imageFive").style.width = "100%";
	document.getElementById("image5").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image1").style.top = "10px";
	document.getElementById("image1").style.left = "8%";
	document.getElementById("image1").style.zIndex = "3";
	document.getElementById("imageOne").style.width = "150%";
	document.getElementById("image1").style.webkitFilter = "none";	
	
	document.getElementById("image2").style.top = "80px";
	document.getElementById("image2").style.left = "4%";
	document.getElementById("image2").style.zIndex = "2";
	document.getElementById("imageTwo").style.width = "100%";
	document.getElementById("image2").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image3").style.top = "150px";
	document.getElementById("image3").style.left = "-4%";
	document.getElementById("image3").style.zIndex = "1";
	document.getElementById("imageThree").style.width = "50%";
	document.getElementById("image3").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("image4").style.left = "-60%";
	document.getElementById("image4").style.zIndex = "0";
	document.getElementById("image4").style.top = "150px";
	document.getElementById("imageFour").style.width = "50%";
	document.getElementById("image4").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("next").innerHTML = "<a href = \"#;\" onClick=\"move3()\"><img src=\"images/iconnext.png\" alt=\"next\"  id = \"iconNext\"></a>";
	document.getElementById("back").innerHTML = "<a href = \"#;\" onClick=\"move1()\"><img src=\"images/iconback.png\" alt=\"back\"  id = \"iconBack\"></a>";
	
	document.getElementById("changingText").innerHTML = "<h2>To-Do Lists</h2> <p>View all of your to-do lists on one screen, and quickly see where recent changes have been made.</p>"; 
	
		document.getElementById("iPhoneImage").innerHTML = "<img src=\"images/screen3.png\" alt=\"screen shot\">";
		
}	

function move3(){
	"use strict";
	
	number = 3;
	
	document.getElementById("image4").style.top = "80px";
	document.getElementById("image4").style.left = "-58%";
	document.getElementById("image4").style.zIndex = "2";
	document.getElementById("imageFour").style.width = "100%";
	document.getElementById("image4").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image5").style.top = "10px";
	document.getElementById("image5").style.left = "-72%";
	document.getElementById("image5").style.zIndex = "3";
	document.getElementById("imageFive").style.width = "150%";
	document.getElementById("image5").style.webkitFilter = "none";	
	
	document.getElementById("image1").style.top = "80px";
	document.getElementById("image1").style.left = "24%";
	document.getElementById("image1").style.zIndex = "2";
	document.getElementById("imageOne").style.width = "100%";
	document.getElementById("image1").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image2").style.top = "150px";
	document.getElementById("image2").style.left = "16%";
	document.getElementById("image2").style.zIndex = "1";
	document.getElementById("imageTwo").style.width = "50%";
	document.getElementById("image1").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("image3").style.left = "-40%";
	document.getElementById("image3").style.zIndex = "0";
	document.getElementById("image3").style.top = "150px";
	document.getElementById("imageThree").style.width = "50%";
	document.getElementById("image3").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("next").innerHTML = "<a href = \"#;\" onClick=\"move4()\"><img src=\"images/iconnext.png\" alt=\"next\"  id = \"iconNext\"></a>";
	document.getElementById("back").innerHTML = "<a href = \"#;\" onClick=\"move2()\"><img src=\"images/iconback.png\" alt=\"back\"  id = \"iconBack\"></a>";
	
	document.getElementById("changingText").innerHTML = "<h2>To-Dos</h2> <p> Check out the to-dos from each list by selecting the list. You instantly know how many commments have been made, if there are new comments and when the due date is. </p>"; 
	
		document.getElementById("iPhoneImage").innerHTML = "<img src=\"images/screen4.png\" alt=\"screen shot\">";	
	
}


function move4(){
	"use strict";
	
	number = 4;
	
	document.getElementById("image3").style.top = "80px";
	document.getElementById("image3").style.left = "-38%";
	document.getElementById("image3").style.zIndex = "2";
	document.getElementById("imageThree").style.width = "100%";
	document.getElementById("image3").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image4").style.top = "10px";
	document.getElementById("image4").style.left = "-52%";
	document.getElementById("image4").style.zIndex = "3";
	document.getElementById("imageFour").style.width = "150%";
	document.getElementById("image4").style.webkitFilter = "none";	
	
	document.getElementById("image5").style.top = "80px";
	document.getElementById("image5").style.left = "-56%";
	document.getElementById("image5").style.zIndex = "2";
	document.getElementById("imageFive").style.width = "100%";
	document.getElementById("image5").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image1").style.top = "150px";
	document.getElementById("image1").style.left = "36%";
	document.getElementById("image1").style.zIndex = "1";
	document.getElementById("imageOne").style.width = "50%";
	document.getElementById("image1").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("image2").style.left = "-20%";
	document.getElementById("image2").style.zIndex = "0";
	document.getElementById("image2").style.top = "150px";
	document.getElementById("imageTwo").style.width = "50%";
	document.getElementById("image2").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("next").innerHTML = "<a href = \"#;\" onClick=\"move5()\"><img src=\"images/iconnext.png\" alt=\"next\"  id = \"iconNext\"></a>";
	document.getElementById("back").innerHTML = "<a href = \"#;\" onClick=\"move3()\"><img src=\"images/iconback.png\" alt=\"back\"  id = \"iconBack\"></a>";
	
	document.getElementById("changingText").innerHTML = "<h2>Comments</h2> <p>View, search or filter comments with Portage. You are also able to preview files and post comments of your own.</p>"; 
	
		document.getElementById("iPhoneImage").innerHTML = "<img src=\"images/screen5.png\" alt=\"screen shot\">";
}

function move5(){
	"use strict";
	
	number = 5;
	
	document.getElementById("image2").style.top = "80px";
	document.getElementById("image2").style.left = "-18%";
	document.getElementById("image2").style.zIndex = "2";
	document.getElementById("imageTwo").style.width = "100%";
	document.getElementById("image2").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("image3").style.top = "10px";
	document.getElementById("image3").style.left = "-32%";
	document.getElementById("image3").style.zIndex = "3";
	document.getElementById("imageThree").style.width = "150%";
	document.getElementById("image3").style.webkitFilter = "none";	
	
	document.getElementById("image4").style.top = "80px";
	document.getElementById("image4").style.left = "-36%";
	document.getElementById("image4").style.zIndex = "2";
	document.getElementById("imageFour").style.width = "100%";
	document.getElementById("image4").style.webkitFilter = "blur(1px)";	
	
	document.getElementById("image5").style.top = "150px";
	document.getElementById("image5").style.left = "-44%";
	document.getElementById("image5").style.zIndex = "1";
	document.getElementById("imageFive").style.width = "50%";
	document.getElementById("image5").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("image1").style.left = "0%";
	document.getElementById("image1").style.zIndex = "0";
	document.getElementById("image1").style.top = "150px";
	document.getElementById("imageOne").style.width = "50%";
	document.getElementById("image1").style.webkitFilter = "blur(2px)";	
	
	document.getElementById("next").innerHTML = "<a href = \"#;\" onClick=\"move1()\"><img src=\"images/iconnext.png\" alt=\"next\"  id = \"iconNext\"></a>";
	document.getElementById("back").innerHTML = "<a href = \"#;\" onClick=\"move4()\"><img src=\"images/iconback.png\" alt=\"back\"  id = \"iconBack\"></a>";
	
	document.getElementById("changingText").innerHTML = " <h2>Easy Access</h2> <p> Sign into your Basecamp account through Portage and manage all functions of your to-do lists right from your iPhone.</p> </div>"; 
	
		document.getElementById("iPhoneImage").innerHTML = "<img src=\"images/screen1.png\" alt=\"screen shot\">";
}
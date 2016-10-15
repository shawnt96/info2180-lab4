
var option = false;
var numBoundaries1;
window.onload = function(){
	document.getElementById("end").onmouseover = myFunction2;
	numBoundaries1 = document.querySelectorAll("#maze .boundary");
	
	for(var num = 0; num < numBoundaries1.length; num++ )
		numBoundaries1[num].onmouseover = myFunction;
	
}

function myFunction(){
	
	for(var num = 0; num < numBoundaries1.length; num++){		
		numBoundaries1[num].className ="boundary youlose";
		option = true;
	}
		
}
	
function myFunction2(){
	if(!option)
		alert("You Win!");
}


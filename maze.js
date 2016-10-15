/*window.onload = function(){


document.getElementById("boundary1").onmouseover = myfunction;

}

function myfunction(){
	document.getElementById("boundary1").className="boundary youlose";
}*/

<<<<<<< HEAD
window.onload = function(){
=======
/*window.onload = function(){
>>>>>>> refs/remotes/origin/master
	var numBoundaries1 = document.querySelectorAll("#maze .boundary");
	for(var num = 0; num < numBoundaries1.length; num++ )
		numBoundaries1[num].onmouseover = myfunction;
}

function myfunction(){
<<<<<<< HEAD
	var numBoundaries2 = document.querySelectorAll("#maze .boundary");
	for(var num = 0; num < numBoundaries2.length; num++)
		numBoundaries2[num].className ="boundary youlose";
=======
	var option = true;
	var numBoundaries2 = document.querySelectorAll("#maze .boundary");
	for(var num = 0; num < numBoundaries2.length; num++){		
		numBoundaries2[num].className ="boundary youlose";
		
	}
}*/
var option =false;
var numBoundaries1;
window.onload = function(){
	document.getElementById("end").onmouseover = myFunction2;
	numBoundaries1 = document.querySelectorAll("#maze .boundary");
	
	for(var num = 0; num < numBoundaries1.length; num++ )
		numBoundaries1[num].onmouseover = myFunction;
	
>>>>>>> refs/remotes/origin/master
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


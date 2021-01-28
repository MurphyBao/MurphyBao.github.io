window.addEventListener("load", function() {
var oInp = document.getElementById("about");
var oDiv = document.getElementsByClassName("info1")[0];
var oInp2 = document.getElementById("email");
var oDiv2 = document.getElementsByClassName("info2")[0];
var oInp3 = document.getElementById("account");
var oDiv3 = document.getElementsByClassName("info3")[0];



oInp.onmouseover = function (){
    oDiv.style.display = "block";
    oInp.style.cursor = "pointer";
}
			
oInp.onmouseout = function (){
    oDiv.style.display = "none";
}

oInp2.onmouseover = function (){
    oDiv2.style.display = "block";
    oInp2.style.cursor = "pointer";
}
			
oInp2.onmouseout = function (){
    oDiv2.style.display = "none";
}

oInp3.onmouseover = function (){
    oDiv3.style.display = "block";
    oInp3.style.cursor = "pointer";
}
		
oInp3.onmouseout = function (){
    oDiv3.style.display = "none";
}
/*contactpage*/















});

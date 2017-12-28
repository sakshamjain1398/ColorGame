var square=document.querySelectorAll(".square");
document.querySelector("body").style.backgroundColor = "#232323";
var isEasy=false;
var easy=document.querySelector("#EASY");
var hard=document.querySelector("#HARD");
hard.classList="hover";
var picked=pickColor();
function pickColor(){
	var r1=parseInt(Math.random()*256,10);
	var str="rgb(";
	str+=r1+", ";
	r1=parseInt(Math.random()*256,10);
	str+=r1+", ";
	r1=parseInt(Math.random()*256,10);
	str+=r1+")"
	return str;
}
var k=parseInt(Math.random()*6, 10);
var m=document.querySelector("#message");
document.querySelector("#rgb").textContent=document.querySelector("#rgb").textContent.slice(0, 3)+picked.slice(3);
for(var i=0;i<square.length;i++)
{
	if(i==k)
	square[i].style.backgroundColor = picked;
	else
		square[i].style.backgroundColor = pickColor();
	square[i].addEventListener("click",function(){
		var colorclicked=this.style.backgroundColor;
		if(colorclicked===picked)
		{
			document.querySelector(".heading").style.backgroundColor = picked;
			var l=square.length;
			if(isEasy)
				l/=2;
			for(var j=0;j<l;j++)
			{
				square[j].style.backgroundColor = picked;
			}
			m.textContent="CORRECT!!";
			nc.textContent="Play Again!";
		}
		else
			{	this.style.backgroundColor = "#232323";
		m.textContent="Try Again";
	}
	});
}
var nc=document.getElementById("newCol");
nc.addEventListener("click",function(){
	if(isEasy)
		forEasy();
	else
		forHard();
});
function forHard(){
	nc.textContent="New Colors!";
	m.textContent="";
	picked=pickColor();
	k=parseInt(Math.random()*6, 10);
	document.querySelector(".heading").style.backgroundColor = "#4682B4";
	document.querySelector("#rgb").textContent=document.querySelector("#rgb").textContent.slice(0, 3)+picked.slice(3);
	for(var i=0;i<square.length;i++)
	{
		if(i==k)
	square[i].style.backgroundColor = picked;
	else
		square[i].style.backgroundColor = pickColor();
	}
}
function forEasy() {
	nc.textContent="New Colors!";
	picked=pickColor();
	k=parseInt(Math.random()*3, 10);
	document.querySelector(".heading").style.backgroundColor = "#4682B4";
	document.querySelector("#rgb").textContent=document.querySelector("#rgb").textContent.slice(0, 3)+picked.slice(3);
	for(var i=0;i<square.length/2;i++)
	{
		if(i==k)
	square[i].style.backgroundColor = picked;
	else
		square[i].style.backgroundColor = pickColor();
	}
	for(var i=square.length/2;i<square.length;i++)
	{
		square[i].style.backgroundColor = "#232323";
	}
}
easy.addEventListener("click",function(){
	isEasy=true;
	easy.classList="hover";
	hard.classList.remove("hover");
	forEasy();
});
hard.addEventListener("click",function(){
	isEasy=false;
	hard.classList="hover";
	easy.classList.remove("hover");
	forHard();
})
nc.addEventListener("mouseover",function(){
	nc.classList="hover";
});
nc.addEventListener("mouseout",function(){
	nc.classList.remove("hover");
});
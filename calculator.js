var btns=document.getElementsByClassName("buttons");
var display=document.getElementById("display");
var operator=document.getElementById("operator");
var var1;
var var2;
var op;
var calci=document.getElementsByTagName("body");
calci[0].addEventListener("keypress",function(event){
	if(event.keyCode===49)
	{
		display	.innerText=display.innerText+1;
	}
})
btns[0].addEventListener("click",function(){
	operator.innerText="";
	display.innerText="";
	var1=undefined;
	var2=undefined;
	op=undefined;
})
function delet(){
	var newval="";
	for(var i=0;i<display.innerText.length-1;i++)
	{
		newval=newval+display.innerText[i];
	}
	display.innerText=newval;
}
function seven(){
	display.innerText=display.innerText+""+7;
}
function eight(){
	display.innerText=display.innerText+""+8;
}
function nine(){
	display.innerText=display.innerText+""+9;
}function four(){
	display.innerText=display.innerText+""+4;
}
function five(){
	display.innerText=display.innerText+""+5;
}
function six(){
	display.innerText=display.innerText+""+6;
}
function one(){
	display.innerText=display.innerText+""+1;
}
function two(){
	display.innerText=display.innerText+""+2;
}
function three(){
	display.innerText=display.innerText+""+3;
}
function zero(){
	display.innerText=display.innerText+""+0;
}
btns[1].addEventListener("click",delet)
btns[4].addEventListener("click",seven)
btns[5].addEventListener("click",eight)
btns[6].addEventListener("click",nine)
btns[8].addEventListener("click",four)
btns[9].addEventListener("click",five)
btns[10].addEventListener("click",six)
btns[12].addEventListener("click",one)
btns[13].addEventListener("click",two)
btns[14].addEventListener("click",three)
btns[17].addEventListener("click",zero)
btns[15].addEventListener("click",function(){
	if(var1==undefined && display.innerText!="")
	{
		var1=parseInt(display.innerText);
		display.innerText="";
		operator.innerText="+";
		op='+';
	}
	
})
btns[11].addEventListener("click",function(){
	if(var1==undefined && display.innerText!="")
	{
		var1=parseInt(display.innerText);
		operator.innerText="-";
		display.innerText="";
		op='-';
	}
	
})
btns[7].addEventListener("click",function(){
	if(var1==undefined && display.innerText!="")
	{
		var1=parseInt(display.innerText);
		display.innerText="";
		operator.innerText="*";
		op='*';
	}
	
})
btns[2].addEventListener("click",function(){
	if(var1==undefined)
	{
		var1=parseInt(display.innerText);
		display.innerText="";
		operator.innerText="%";
		op='%';
	}
	
})
btns[3].addEventListener("click",function(){
	if(var1==undefined && display.innerText!="")
	{
		var1=parseInt(display.innerText);
		display.innerText="";
		operator.innerText="/";
		op='/';
	}
	
})
btns[19].addEventListener("click",function(){
	var2=parseInt(display.innerText);
	if(op=='+')
	{
		display.innerText=var1+var2;
		return;
	}
	if(op=='-')
	{
		display.innerText=var1-var2;
		return;
	}
	if(op=='*')
	{
		display.innerText=var1*var2;
		return;
	}
	if(op=='%')
	{
		display.innerText=var1%var2;
		return;
	}
	if(op=='/')
	{
		display.innerText=var1/var2;
		return;
	}
	var1=undefined;
	var2=undefined;
	op=undefined;
	operator.innerText="";
	
})
btns[16].addEventListener("click",function(){
	if(var1==undefined && display.innerText!="")
	{
		var1=parseInt(display.innerText);
		display.innerText=Math.sqrt(var1);
		return;
	}
	
})
var you=0,cpu=0,b=10;
var s,c=1;
function putimg(c){
	$("#selected").attr('src',s);
	if(c==1)
	$("#selected1").attr('src',"img/stone.png");
	else if(c==2)
	$("#selected1").attr('src',"img/paper.png");
	else
	$("#selected1").attr('src',"img/scissor.png");
}
function youscore(){
	      you=you+1;
		  $("#result").html("You = "+you+" cpu= "+cpu);
		  $("#display").html("You scored");
		  if(you == b){
		    $("#container").html("YOU WIN");
			 $("#display").hide();
		  }
		      
	
}

function cpuscore(){
	      cpu=cpu+1;
		   $("#result").html("You ="+you+"  cpu= "+cpu);
		    $("#display").html("OOPS cpu scored");
		    if(cpu == b){
		    $("#container").html("CPU WINs");
			 $("#display").hide();
		  }
	
}
function pclick( a){
	var c=Math.floor(Math.random()*3)+1;
	putimg(c);
	
	if(a==1){
		if(c==3)
		youscore();
	   else if(c==2)
	    cpuscore();
		else
		 $("#display").html("Draw");
	}
	if(a==2){
		if(c==1)
	youscore();
	   else if(c==3)
		 cpuscore();
		else
		$("#display").html("Draw");
	}
	if(a==3){
		if(c==2)
	youscore();
	   else if(c==1)
		 cpuscore();
		else
		$("#display").html("Draw");
	}
	}

$(function(){
		   var a;
		   
	$("#stone").click(function(){
							  s = $(this).attr("src");
							   a=1;
							   pclick(a);
			});

$("#paper").click(function(){
						    s = $(this).attr("src");
							   a=2;
							  pclick(a);
			});

$("#scissor").click(function(){
							  s = $(this).attr("src");
							   a=3;
							  pclick(a);
			});
$("#btname").click(function(){
							b=$("#name").val();
							console.log(b);
							});
							

	});


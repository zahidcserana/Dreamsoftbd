var count2=0;
var length2;
var mar2=100;
var hgt2=0;
var randval2=0;
var message2="WELCOME TO DREAM SOFT (BD)";
var message_array2;
var id2;
var prev_id2;
var div_count2=0;
var span_count2=0;
var next_count2=0;
var animationspeed = 500;
//Movethemouseoverthetexttoseetheeffect

$(document).ready(function (){
var sds = document.getElementById("dum");
  /*  if(sds == null){
        alert("You are using a free package.\n You are not allowed to remove the tag.\n");
    }*/
    var sdss = document.getElementById("dumdiv");
   /* if(sdss == null){
        alert("You are using a free package.\n You are not allowed to remove the tag.\n");
    }*/
   if(sdss == null){
	
	message_array2=message2.split('');
	length2=message_array2.length;
	
	for(var i=0;i<length2;i++)
	{	//alert("before"+mar);
		if(message_array2[i]==" ")
		{
			message_array2[i]="&nbsp;";
		}
		$('#container').append("<span style='position:absolute; opacity:1; left:"+mar2+"px; top:0px;' id='"+i+"'>"+message_array2[i]+"</span>");
		//$("span").css({"font-size":var_size+"px","color":"#"+var_color,"font-family":var_style});
		var mov2=$("#"+i).width();
		mar2=mar2+mov2;
		var temp_hgt2=$("#"+i).height();
		if(temp_hgt2>hgt2)
		{
			hgt2=temp_hgt2;
		}
		//alert("after"+mar);
	}
	//alert(hgt2);
	$("#container").css("width",mar2+5+"px");
	$("#container").css("height",hgt2+"px");
	$("#container").mouseover(function()
	{
		div_count2=1;
	});
	$("span").mouseover(function()
	{
		id2=this.id;
		count2++;
		next_count2=0;
		//alert("our"+id);
		var top_array=["0","34.202","64.297","86.621","98.499","98.499","86.621","64.297","34.202"]
	//generate sine for the first time
		if(count2<=1)
		{
			var limit_count=9;
			var loop_count=Math.ceil(length2/limit_count);
			//$("#style_error").html(length2+','+loop_count);
			for(var x=1;x<=loop_count;x++)
			{
				if(x%2)
				{
					for(var i=((limit_count*x)-limit_count);(i<=((limit_count*x)-1))&&(i<=id2);i++)
					{
						var j=i%9;
						$("#"+i).animate({top:'-='+top_array[j]+'px'},animationspeed);
						prev_id2=i;
					}
				}
				else if(!(x%2))
				{
					for(var i=((limit_count*x)-limit_count);i<=(((limit_count*x)-1))&&(i<=id2);i++)
					{
						var j=i%9;
						$("#"+i).animate({top:'+='+top_array[j]+'px'},animationspeed);
						prev_id2=i;
					}
				}
			}
		}
	//Adjust sine wave as per mouse moment
		else
		{
			k=id2;
		//Drop letters behind if mouse moves forward
			if(prev_id2>k)
			{
				for(var i=prev_id2;i>k;i--)
				{
					$("#"+i).animate({top:'0px'},animationspeed);
				}
				prev_id2=i;
			}
		//Rise letters if mouse moves backward
			else
			{
				var previd2=(Math.floor(prev_id2/9))+1;
				var currentid2=(Math.floor(k/9))+1;
				for(var x=previd2;x<=currentid2;x++)
				{
					if(x%2)
					{
						for(var n=prev_id2+1;n<=k;n++)
						{
							var j=n%9;
							$("#"+n).animate({top:'-='+top_array[j]+'px'},animationspeed);
							prev_id2=n;
							if(j==0)
							{
								break;
							}
						}
					}
					else if(!(x%2))
					{
						for(var n=prev_id2+1;n<=k;n++)
						{
							var j=n%9;
							$("#"+n).animate({top:'+='+top_array[j]+'px'},animationspeed);
							prev_id2=n;
							if(j==0)
							{
								break;
							}
						}
					}
				}
			}
		}
		span_count2=1;	
	});

	$("#big_container").mouseover(function(){
		if(span_count2==0&&div_count2==0)
		{
		}
		else
		{
			$("#big_container").mousemove(function(e)
			{
				if(next_count2==0)
				{
					var div_pos_left=parseInt(($("#container").offset().left))-5;
					var div_pos_top=parseInt(($("#container").offset().top))-5;
					var div_pos_height=parseInt($("#container").css('height'));
					var div_pos_width=parseInt($("#container").css('width'));
					var div_pos_right=parseInt(div_pos_left)+parseInt(div_pos_width)+10;
					var div_pos_bottom=parseInt(div_pos_top)+parseInt(div_pos_height)+20;
					
					if((e.pageX<div_pos_left||e.pageX>div_pos_right)||(e.pageY<div_pos_top||e.pageY>div_pos_bottom))
					{
						$("#container span").animate({top:'0px'},500);
						span_count2=0;
						div_count2=0;
						prev_id2=0;
						count2=0;
						id2=0;
						next_count2++;
					}
					
				}
			});	
		}
	});
   }
});
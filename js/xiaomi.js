$(function(){
	/*intup 选项卡*/
	$(".wbk-text").click(function(){
		$(".wbk-box1").css("display","none")
		$(".wbk-box2").css("display","none")
		$(".wbk-text").css("border-color","red")
		$(".button").css("border-color","red")
		$(".wbk-tts").css("display","block")
		$(".wbk-tts li").mouseenter(function(){
			$(this).css("background","#f4f4f4")
		}).mouseleave(function(){
			$(this).css("background","#fff")
		})
		$(".wbk-text").blur(function(){
			$(".wbk-tts").css("display","none")
			$(".wbk-box1").css("display","block")
			$(".wbk-box2").css("display","block")
			$(".wbk-text").css("border-color","#e0e0e0")
			$(".button").css("border-color","#e0e0e0")
		})
	})
	/*搜索隐藏栏*/
	$(".souli a").hover(function(){
		$(".hidden").css("display","none")
		$(this).next(".hidden").css("display","block")
	})
	$(".souso").hover(function(){
		$(this).find(".hidden").css("display","none")
	})
	
	
		
	/*侧边隐藏栏*/
	$(".nulbox a").hover(function(){
		$(".asider-hidden").css("display","none")
		$(this).next(".asider-hidden").css("display","block")
	})
	$(".nulbox").hover(function(){},function(){
		$(".asider-hidden").css("display","none")
	})


	/*轮播图*/
	//自动轮播
	var t=setInterval(fn,3000);
	var num=0;
	function fn(){
		num++;
		if(num==6){
			num=0;
		}
		$(".banner-img>li").each(function(index,element){
			element.style.display='none';
		})
		$(".ui-spot>li").each(function(index,element){
			element.style.background='rgba(0,0,0,0.5)';
		})
		$(".banner-img>li")[num].style.display='block';
		$(".ui-spot>li")[num].style.background='rgba(255,255,255,0.5)';
	}
	//鼠标移入移除效果
	$(".banner-main").mouseenter(function(){
		clearInterval(t);
	});
	$(".banner-main").mouseleave(function(){
		t=setInterval(fn,3000);
	});
	//点击按钮
	$("#prev").click(function(){
		fn();
	})
	$("#next").click(function(){
		num--;
		if(num<0){
			num=5;
		}
		$(".banner-img>li").each(function(index,element){
			element.style.display='none';
		})
		$(".ui-spot>li").each(function(index,element){
			element.style.background='rgba(0,0,0,0.5)';
		})
		$(".banner-img>li")[num].style.display='block';
		$(".ui-spot>li")[num].style.background='rgba(255,255,255,0.5)';
	})
	//点击圆点
	var dian=$(".ui-spot>li");
	for(var i=0; i<dian.length; i++){
		dian.eq(i).click(function(){
			$(".banner-img>li").eq(num).hide();
			$(".banner-img>li").eq(i).show();
			dian.eq(num).css({background:"rgba(0,0,0,0.5)"});
			dian.eq(i).css({background:"rgba(255,255,255,0.5)"});
			num=i;
		})
	}



	/*小米明星单品轮播*/
	var num1=0;
	$(".box2-left").click(function(){
		if(num1==0){
			return;
		}
		num1--;
		$(".star-box").css({left:0});
	})
	$(".box2-right").click(function(){
		if(num1==1){
			return
		}
		num1++;
		$(".star-box").css({left:-1226});
	})
	var flag1=true;
	var t1=setInterval(move,3000);
	function move(){
		if(flag1){
			if(num1==1){
				flag1=false;
				return;
			}
			num1++;
		}else{
			if(num1==0){
				flag1=true;
				return;
			}
			num1--;
		}
		$(".star-box").css({left:-1226});
	}
	$(".star-box").mouseenter(function(){
		clearInterval(t1);
	})
	$(".star-box").mouseleave(function(){
		t1=setInterval(move,3000);
	})


	/*家电*/
	var cali=$(".catboxR li");
	var tabt=$(".tab-content")
	for (let i = 0; i < cali.length; i++) {
		cali.eq(i).mouseenter(function() {
			for (let j = 0; j < tabt.length; j++) {
				tabt.eq(j).css({display:"none"});
			}
			tabt.eq(i).css({display:"block"});
		})
		cali.eq(i).mouseleave(function(){
			tabt.eq(i).css({display:"block"});
		})
	}
	








})




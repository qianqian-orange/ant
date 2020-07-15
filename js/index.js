// 封装函数
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}
var show = byId("notice"),
	close = byId("close-text");
	// ball = byId("ball").getElementsByTagName("ball");
	// func = byId("func-div2").getElementsByTagName("func-div2");

// 公告的显示和关闭
function notice_show(){
				show.style.display = "block";
	}
function notice_close(){
				show.style.display = "none";
}
//背景变换
	var slide = $('#img_div').find('.slide'),
	pics = ById('img_div').getElementsByClassName("slide"),
	myDate = new Date(),
	date = myDate.getDate(),
	size = pics.length,
	random =0;
	// 全局变量index
	index=0;
	flag=0;

	function ById(id){
		return typeof (id)==="string" ? document.getElementById(id):id;
	}

	$(document).ready(function(){
			clickCgScore();
			 startplay();
			 beginPlant();
			 sign();
			 changeScore();
			 openbag();
			 // createBall();
	})
	
//控制index的值对应图片下标
	function startplay(){
		timer = setInterval(function(){
				index++;
				if(index>=size)
					index =0;
			createNum();
			changeImg();	
			// console.log(index);
	},2000)
	}

	
//创建随机数，切换背景
	function changeImg(){
		for(var i=0;i<size;i++){
			pics[i].style.display="none";
		}
		if(random>=0&&random<=3){
			pics[0].style.display="block";
			index=0;
		}
			
			// pics[0].classList.add("active");
		else if(random>3&&random<=7){
			pics[1].style.display="block";
			index =1;
		}
			// pics[1].classList.add("active");
		else if(random>7&&random<=8){
			pics[2].style.display="block";
			index=2;
		}
			// pics[2].classList.add("active");
		else
		{
			pics[3].style.display="block";
			index=3;
		}
			// pics[3].classList.add("active");
	}

	function createNum(){
		random = parseInt(Math.random()*10);
		// console.log(random);
	}

// 种树点击效果
		var div = byId("img_div");

		function beginPlant(){
			var div2 = document.createElement('div');
			div2.setAttribute("href","css/demo.css");
			div2.setAttribute("class","div2");
			var text = document.createTextNode('开始植树啦!');
			$('#plant_img').one("click",function click(){
				flag = 1;
				div2.appendChild(text);
				div.appendChild(div2);
				// console.log(div);
				setTimeout(function(){div.removeChild(div2);},4000);
				$('#tree').addClass('Sapling');
				addIntegral();
				operation();
			})
		}
//浇水显示文字细节
		function detailShow(string){
			var div2 = document.createElement('div');
			div2.setAttribute("href","css/demo.css");
			div2.setAttribute("class","div2");
			var text = document.createTextNode(string);
				div2.appendChild(text);
				div.appendChild(div2);
				setTimeout(function(){div.removeChild(div2);},5000);
	}
//树的变换
	// 全局变量碳积分
	integral=0;
	pre_integral =0;
	scVal = $("#score").val();
	score =Math.round(Number($("#score").val().substring(0,scVal.length-1))*100)/100;
//index等于0 1 2 3分别对应 多云，晴天，雷天，干旱
//自动累加成长值
	function addIntegral(){
		setInterval(function(){
			if(index ==0){
			integral+=1;
		}else if(index ==1){
			integral+=2;
		}else if(index ==2){
			if(integral >= 1)
				integral-=0.5;
			else
				integral = integral;
		}else
			integral = integral;
		changeNum();
		// console.log(index);
		// console.log(integral);
		changeTree();
		}
		,2000)
	}

//创造气泡，这个需要一个增长量，没有想到如何获取前后之间的数值差，留给后人造==
	// var creat;
	// var begin;
	// var ball = "<div class='ball ball0' onclick='flow()'' id='ball' readonly='readonly'><span>1g</span></div>"
	// function createBall(){
	// 	// setInterval(function(){
	// 	// 	console.log(integral);
	// 	// },2000)
	// 	begin = setInterval(function(){
	// 		switch(integral){
	// 			case 2:
	// 				// alert(1);
	// 				break;
	// 			case 10:
	// 				// alert(2);
	// 				break;
	// 		}
	// 		return;
	// 	},2000);
	// 	// setTimeout(function(){
	// 	// 	clearTimeout(creat);
	// 	// },4000);
	// }
// 改变成长值
	function changeNum(){
		$("#integral").val(integral+'g');
	}

// 改变不同的数
	var tree = byId('tree');
	function changeTree(){
		if(integral <=5){
			tree.className="Sapling";
		}else if(integral <=10){
			tree.className="tree-s";
		}else if(integral <=15){
			tree.className="tree-m";
		}else{
			tree.className="tree-b";
		}
	}

	

	// function watering(){
	// 			$("#kettle").click(function(){
	// 					$(".show1").css("display","block");
	// 			});
	// 			setInterval(function(){
	// 				$(".show1").css("display","none");
	// 			},8000);
	// 	}

	// function fertilize(){
	// 	$("#fertilizer").click(function(){
	// 					$(".show2").css("display","block");
	// 			});
	// 			setInterval(function(){
	// 				$(".show2").css("display","none");
	// 			},8000);
	// }

	// 浇水和施肥
	var type,flag2 = 0;
	function operation(){
		if(flag == 1)
			{
						$("#kettle").click(function(){
										type = 1;
										changeXnum("#times1");
										// buyTool("#times1",0.02,"img/bag/kettle.png");
										operation_show("#times1",0.02,"img/bag/kettle.png");
										if(flag2 == 0){
											changeDay();	
										}else{
											// $("#plant-day").val(Number(day));
											return;
										}
										flag2 = 1;
							}
							);
							$("#fertilizer").click(function(){
									type = 2;
									changeXnum("#times2");
									// buyTool("#times2",0.03,"img/bag/fertilizer.png");
									operation_show("#times2",0.03,"img/bag/fertilizer.png");	
							});
							$("#needle").click(function(){
										type = 3;
										changeXnum("#times3");
										// buyTool("#times3",0.01,"img/bag/needle.svg");
										operation_show("#times3",0.01,"img/bag/needle.svg");
										
							});
			}else{
							return;
					}

		// if(flag == 1)
		// 	{
		// 				$("#kettle").one("click",function(){
		// 								type = 1;
		// 								changeDay();
		// 								changeXnum("#times1");
		// 								buyTool("#times1");
		// 								operation_show();
		// 					}
		// 					);
		// 					$("#fertilizer").one("click",function(){
		// 							type = 2;
		// 							changeXnum("#times2");
		// 							buyTool();
		// 							operation_show();
		// 					});
		// 					$("#needle").one("click",function(){
		// 								type = 3;
		// 								changeXnum("#times3");
		// 								buyTool();
		// 								operation_show();
		// 					});
		// 	}else{
		// 					return;
		// 			}
		}

		var Xnum;
		var val;

	function changeXnum(id){
		val = $(id).val();
		Xnum = Number($(id).val().charAt(val.length-1));
		if(Xnum > 0){
			$(id).val("X"+(Xnum-1));
		}else
			return this.$(id).val();
	}
// 改变碳积分
	// var timeout = null;
	// function changeScore(){
	// 	clearInterval(timeout);
	// 	timeout = setInterval(function(){
	// 		$("#score").val(score+'g');
	// 	},1000);
	// }
//购买工具
	// function buyTool(id,price,src){
	// 	if(Xnum == 0){
				// $("#toolImg").attr("src",src);
				// $(".content").css("display","block");
				// $("#ok").click(function(){
				// 	if(score >= price)
				// 	{
				// 		$(id).val("X"+(Xnum+1));
				// 		$(".content").css("display","none");
				// 		score = Number($(id).val().charAt(val.length-1)) - price;
				// 		console.log(score);
				// 		// changeScore();
				// 	}else{
				// 		console.log("积分不足");
				// 	}
				// });
				// $("#no").click(function(){
				// 	$(".content").css("display","none");	
					
				// });
	// 		}
	// 	}
// 改变浇水天数
	var day;
	function changeDay(){
		if(Xnum>0){
			day = $("#plant-day").val();
			$("#plant-day").val(Number(day)+1);
		}else		
			return;
	}
// 显示工具对应动画
	var timeout1=null,timeout2=null,timeout3=null,timeout4=null;
	var buy = 0;
	function operation_show(id,price,src){
			if(Xnum >0 ){	
				switch(type){
				case 1:{
						$(".show1").css("display","block");
						clearTimeout(timeout1);
						timeout1 = setInterval(function(){
							$(".show1").css("display","none");
						},5000);
						detailShow('成长值 +2.5g');
						integral += 2.5;
					}
					break;
				case 2:{
						$(".show2").css("display","block");
						clearTimeout(timeout2);
						timeout2 = setInterval(function(){
							$(".show2").css("display","none");
						},5000);
						detailShow('成长值 +3.5g');
						integral += 3.5;
					}
					break;
				case 3:{
						$(".show3").css("display","block");
						clearTimeout(timeout3);
						timeout3 = setInterval(function(){
							$(".protect").css("display","block");
						},1000);
						detailShow('小树受到保护');
						integral = integral;
					}
					break;
				}		
			}else{
				$("#toolImg").attr("src",src);
				$(".buyShow").css("display","block");
				$("#ok").one("click",function(){
					if(score >= price)
					{
						// debugger;
						// 这里出现一个bug，每次点击减去的数值会一次加一
						// 已解决，
						if(buy == 0){
							score = Math.round(score*100)/100 - Number(price);
							$("#score").val(score+'g');
							$(id).val("X"+(Xnum+1));
							$(".buyShow").css("display","none");
							buy = 1;
							console.log(score);
							console.log(price);
						}else{
							$(".buyShow").css("display","none");
							timeout4 = setTimeout(function(){
								detailShow("购买失败\r\n一个种类每天只能购买一次");
							},500);
						}
					}else{
						timeout4 = setInterval(function(){
							detailShow("积分不足");
						},1000);
						//这里有一个bug
						//****************************************************************input框显示NAN
						//已解决，
					}
				});
				$("#no").click(function(){
					clearInterval(timeout4);
					$(".buyShow").css("display","none");	
					// console.log(typeof(score));
				});
			}	
		}
	
//点击签到
	// var img = ById("div-circle").getElementsByClassName("img");
	function sign(){
		var now = new Date();
  		 var day = now.getDay();
  		 	switch(day){
  		 	case 0:
  		 		$(".c7").click(function(){
				$(".img7").attr("src","img/sign/bighook.svg");
			});	
  		 		break;
			case 1:
				$(".c1").click(function(){
				$(".img1").attr("src","img/sign/bighook.svg");
			});
				break;
			case 2:
				$(".c2").click(function(){
				$(".img2").attr("src","img/sign/bighook.svg");
			});
				break;
			case 3:
				$(".c3").click(function(){
				$(".img3").attr("src","img/sign/bighook.svg");
			});
				break;
			case 4:
				$(".c4").click(function(){
				$(".img4").attr("src","img/sign/bighook.svg");
			});
				break;
			case 5:
				$(".c5").click(function(){
				$(".img5").attr("src","img/sign/bighook.svg");
			});
				break;
			case 6:
				$(".c6").click(function(){
				$(".img6").attr("src","img/sign/bighook.svg");
			});
		
  		 }
		    // localStorage.clear();
			console.log(localStorage)
	}
// 切换碳积分和成长值
	function clickCgScore(){
		$(".sp1").click(function(){
				$(".sp1").css({"display":"none"});
				$(".sp2").css({"display":"block"});
			});
		$(".sp2").click(function(){
				$(".sp1").css({"display":"block"});
				$(".sp2").css({"display":"none"});
			});
	}

//兑换碳积分
	var timeout5 =null;
	function changeScore(){
		$("#sub1").click(function(){
			$(".changeShow").css("display","block");
		})
		$("#sub2").click(function(){
			$(".changeShow").css("display","block");
		})
		$("#submit").click(function(){
			if(integral >= 10){
				integral -= 10;
				changeNum();
				score +=1;
				$("#score").val(score+'g');
				timeout5 = setTimeout(function(){
					detailShow("兑换成功");
				},500);
				$(".changeShow").css("display","none");
			}else{
				timeout5 = setTimeout(function(){
					detailShow("成长值不足");
				},2000);
			}
		})
		$("#cancle").click(function(){
			clearTimeout(timeout5);
			$(".changeShow").css("display","none");
		});
	}

	function fnAjax(url,succFn){
	var xmlhttp,data = null;
	if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
	// xmlhttp.open("post",url,true);
	// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// xmlhttp.send();
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)//当 readyState 等于 4 且状态为 200 时，表示响应已就绪
    {	
     	data = JSON.parse(xmlhttp.responseText);
     	succFn(data);
		// var img = data.img,url = img.url;
  //       	$("#img").attr("src",url);
  		// console.log(data);
    }else{
    	console.log("error");
    }
  }
}
	fnAjax("index.json",function(str){
		var img = str.img,url = img.url;
        	$("#img").attr("src",url);
	});

	var bag =byId("bag_div");
	function openbag(){
			$(".open-bag").click(function(){
			if(bag.style.display == "block"){
				$(".bag-div").css("display","none");
				$(".open-bag").addClass("open");
			}
			else{
				$(".bag-div").css("display","block");
				$(".open-bag").removeClass("open");
			}	
		});
	}
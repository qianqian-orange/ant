var slide = $('#img_div').find('.slide'),
	pics = ById('img_div').getElementsByClassName("slide"),
	myDate = new Date(),
	date = myDate.getDate(),
	size = pics.length,
	index,random =0;
	

	function ById(id){
		return typeof (id)==="string" ? document.getElementById(id):id;
	}

	$(document).ready(function(){
			 startplay();
	})
	
	function startplay(){
		timer = setInterval(function(){
			index++;
			if(index>=size)
				index =0;
			createNum();
			changeImg();
	},3000)
	}

	function changeImg(){
		for(var i=0;i<size;i++){
			pics[i].style.display="none";
		}
		if(random>=0&&random<=3)
			pics[0].style.display="block";
			// pics[0].classList.add("active");
		else if(random>3&&random<=7)
			pics[1].style.display="block";
			// pics[1].classList.add("active");
		else if(random>7&&random<=8)
			pics[2].style.display="block";
			// pics[2].classList.add("active");
		else
			pics[3].style.display="block";
			// pics[3].classList.add("active");
	}

	function createNum(){
		random = parseInt(Math.random()*10);
		console.log(random);
	}
// 		function addHandler(element, type, handler) {
// 		    if (element.addEventListener) {
// 		        element.addEventListener(type, handler, false);
// 		    }
// 		    else if (element.attachEvent) {
// 		        element.attachEvent('on' + type, handler);
// 		    }
// 		    else {
// 		        element['on' + type] = handler;
// 		    }
// 		}

// 		var index = 0,
// 			pics = byId(img_div).getElementsByTagName("slide"),
// 			size = pics.length;

// 		function startAutoPlay(){
// 		   timer = setInterval(function(){
// 		       index++;
// 		       if(index >= size){
// 		          index = 0;
// 		       }
// 		       changeImg();
// 		   },3000)
// 		}

// 		function changeImg(){
// 			for(var i=0;i<size;i++){
// 				pics[i].style.display="none";
// 			}
// 			pics[index].style.display = "block";
// 		}

// 		function slideImg(){
// 			var main = byId("frame");
//     		startAutoPlay();
//     		addHandler(main,"mouseout",startAutoPlay);
//     	}

// addHandler(window,"load",slideImg);
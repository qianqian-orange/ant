function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var kettle = byId("kettle"),
	// click = byId("plant_img")
	
function watering(){
	if(flag == 1){
		$("#kettle").bind("click",function(){
			alert("click");
		})
	}else{
		return ;
	}
}
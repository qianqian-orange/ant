function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var ball = byId("ball");
function flow(){
	ball.style.display = "none";
}
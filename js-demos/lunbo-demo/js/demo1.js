// 获取左右两个箭头对象
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// 获得图片容器对象
var container = document.getElementById("md-container");
// move变量用于记录当前图片的位置，偏移量
var offset=0;
// 为两个按钮添加click事件
arrowLeft.addEventListener("click",function(arrowType){movePicture("arrowLeft")},false);
arrowRight.addEventListener("click",function(arrowType){movePicture("arrowRight")},false);
// 定时器：setInterval()
var Interval = setInterval("arrowRight.click()",3000);
container.onmouseover = function(){
	clearInterval(Interval);
}
container.onmouseout = function(){
	Interval = setInterval("arrowRight.click()",3000);
}
// 图片移动函数，参数箭头类型，用于分辨左右箭头
function movePicture(arrowType){
	var dp = document.getElementById("demo1Panel");
	var picLists = dp.getElementsByTagName("li");
	// 左箭头时执行
	// 判断是否是最前一张
	if(arrowType == "arrowRight"){
		if(offset==(picLists.length-1)*-800){
			offset = 0;
		}
		else{
			offset -=800;	
		}
		
	}
	// 右箭头时执行
	// 判断是否到了最后一张
	if(arrowType == "arrowLeft"){
		if(offset == 0){
			offset = (picLists.length-1)*-800;
		}
		else{
			offset +=800;
		}
	}
	// 通过改变ul框的left来实现移动
	dp.style.left=offset+"px";
}

/*本次收获：
on事件句柄 与 addeventlistener区别
addeventlisterner中的fn传参数写法
*/
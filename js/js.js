



function sliderImg(){
	var cilent=document.body.clientWidth;
	var move=(1920-cilent)/2;
	var imgNode=document.querySelector('.main-silder-img').getElementsByTagName('img')[0];
	imgNode.style.marginLeft=-move+'px';
}
//sliderImg();
window.onresize=function(){
//	sliderImg();
}


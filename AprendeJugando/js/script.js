$(document).ready(function(){
	
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		/*Guarda la distancia en px*/
		scroll = $(window).scrollTop();

		/*Si scroll es mayor a Xpx*/
		if(scroll > 50){
			/*hacer pequeña la imagen*/
			$("#logo").css({"width": "100px", "height": "100px"});
			
		}else{
			/*Regresar la imagen al tamaño normal*/
			$("#logo").css({"width": "616px", "height": "261px"});
		}
	});
})
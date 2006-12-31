//fix mobile nav menu automatic collapse
$(function(){ //mitovy amin'ny documen.addEventListener("DOMContentLoaded",....)
	$(".navbar-toggler").blur( function(event){
	//mitovy amin'ny document.querySelector("#navbar-toggler").addEventListener("blur",....)
		var screenwidth=window.innerWidth;
		
		if(screenwidth<758){
			console.log("ready");
			$("#main-nav").collapse('hide');
		}
	});
});

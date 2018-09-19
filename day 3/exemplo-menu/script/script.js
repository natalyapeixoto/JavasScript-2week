const menuBtn = document.querySelector(".sidebar-menu__button");

let click = 1;
menuBtn.addEventListener("click", function(e){
	document.querySelector(".sidebar-menu").style.left = "-435px";
	click++
	if (click % 2 !== 0 ){
		document.querySelector(".sidebar-menu").style.left = "0px";
	}
})
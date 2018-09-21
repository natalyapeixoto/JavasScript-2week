const menuBtn = document.querySelector(".sidebar-menu__button");
const menu = document.querySelector(".sidebar-menu");


menuBtn.addEventListener("click", function(e){
	e.preventDefault();
	console.log(menu.classList)
	if(menu.classList.contains("sidebar-menu__visible")){
		menu.classList.remove("sidebar-menu__visible")
		menu.classList.add("sidebar-menu__hidden")
	}else{
		menu.classList.remove("sidebar-menu__hidden")
		menu.classList.add("sidebar-menu__visible");
	}
})


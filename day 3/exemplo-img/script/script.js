const links = document.querySelector(".gallery__nav");
console.log(links.children)

for (const item of links.children){
		item.addEventListener("click", function(e){
		const img = this.dataset.image;
		document.querySelector(".gallery__image")
		.src= img;
	})
}

// for (let i = 0; i < links.children.length; i ++){
// 	console.log(links.children[i]);

// 	links.children[i].addEventListener("click", function(e){

// 	})
// }
// 
// 
// //PARA PASSAR VARIOS VALORES CSS WITH JAVASCRIPT
//nomeDoElemento.setAttribute("style", "font-size: 100px; font-style: italic;");
////nodelist - .childNodes  -> retorna todos os nós
//HTML collection  - .childes -> todos os tag elements html
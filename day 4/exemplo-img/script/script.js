const links = document.querySelector(".gallery__nav");
console.log(links.children)

for (const item of links.children){
	console.log(item)
		item.addEventListener("click", function(e){
		const img = this.dataset.image;
		document.querySelector(".gallery__image")
		.src= img;
		
		document.querySelector("figcaption").innerHTML = this.dataset.title;
	})
}


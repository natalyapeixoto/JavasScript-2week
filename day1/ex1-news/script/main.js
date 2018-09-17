const title = document.getElementById("title");

// console.log(title);

// const title2 =  document.querySelector(".news__title");
// console.log(title2);


const btn =  document.querySelector(".news__button");
const input = document.getElementById("newsInputEmail");

btn.addEventListener("click", function(e){
	e.preventDefault();
	
	const resposta = document.createElement("span");
	const respostaMsg = document.createTextNode("Email cadastrado com sucesso");
	resposta.appendChild(respostaMsg)

	const newsForm = document.querySelector(".news__form");
	console.log(newsForm)
	console.log(newsForm.childNodes)
	newsForm.insertBefore(resposta, newsForm.childNodes[0]);

	

});

// btn.addEventListener("click", function(e){
// 	e.preventDefault()
	
// 	const newsLabel = document.querySelector(".news__label");
// 	newsLabel.innerHTML += `email cadastrado com sucesso`;

// });

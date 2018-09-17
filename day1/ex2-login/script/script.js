const btn = document.querySelector(".login__button");

const input = document.querySelector(".login__input");

const login =  document.querySelector(".login__subtitle");

// btn.addEventListener("click", function(e){
// 	e.preventDefault()
// 	const email = input.value;
// 	alert(`Olá, ${email}! Seja bem-vinda!`)
// })

btn.addEventListener("click", function(e){
	e.preventDefault()

	const email = input.value;
	const form = document.querySelector(".login__form");

	const resposta = document.createElement("span");
	const respostaMsg = document.createTextNode(`Oi ${input.value} Seja bem-vinda!`);

	resposta.appendChild(respostaMsg);
	form.insertBefore(resposta, form.childNodes[0]);

	resposta.style.fontSize = "25px";
	resposta.style.color ="pink"
})
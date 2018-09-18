const nome = document.querySelector("#cadastroInputNome");
const email = document.querySelector("#cadastroInputEmail");
const emailConf = document.querySelector("#cadastroInputEmailConfirm");
const senha = document.querySelector("#cadastroInputPassword");
const senhaConf = document.querySelector("#cadastroInputPasswordConfirm");
const tel = document.querySelector("#cadastroInputPhone");
const area = document.querySelector("#cadastroInputArea");
const inputJunior = document.querySelector("#cadastroInputLevelJunior");
const inputPleno = document.querySelector("#cadastroInputLevelPleno");
const inputSenior = document.querySelector("#cadastroINputLevelSenior");
const background = document.querySelector(".wrapper");
const button = document.querySelector(".cadastro__button");

const inputLevel = document.getElementsByName("level");

const inputNews = document.getElementById("cadastroInputNews");
//console.log(inputArea.options[inputArea.selectedIndex].value);

button.addEventListener("click", function(e){
	e.preventDefault();

let radioItem;
for (let i =0; i<inputLevel.length; i++) {
	if(inputLevel[i].checked) {
		let radioItem = inputLevel[i];
		console.log(radioItem.value)
		if(radioItem.value === "Junior"){
		const input = document.querySelector("#cadastroInputLevelJunior");
		console.log("junior: 0 - 2 anos de experiência");
		}
		else if(radioItem.value === "Pleno"){
		const input = document.querySelector("#cadastroInputLevelPleno");
		console.log("pleno: 2 - 5 anos de experiência");
		}
		else if(radioItem.value === "Senior"){
		const input = document.querySelector("#cadastroInputLevelSenior");
		console.log("senior 5+ anos de experiência");
		}
	}
}

	if(/[a-zA-Z]+/g.test(nome.value) === false) {
		nome.focus()
		alert("Escreva seu nome");
		return false;
	}
	else if(email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
		email.focus()
		alert("Escreva um email válido")
		return false;
	}
	else if(emailConf.value !== email.value){
		emailConf.focus()
		alert("Deve ser igual ao primeiro e-mail!")
		return false;
	}
	else if(senha.value.length < 7){
		senha.focus()
		alert("senha deve ter mais 6 dígitos ou mais")
		return false;
	}
	else if(senhaConf.value !== senha.value){
		senhaConf.focus();
		alert("A senha deve ser igual a fornecida acima");
		return false;
	}
	else if (/[\d]/g.test(tel.value) === false) {
		tel.focus()
		alert("digite um numero válido");
		return false
	}
	
	else if (inputNews.checked === false) {
		inputNews.focus()
		alert("da o check aqui!");
		return false
	}
	else {
		const final = document.querySelector(".cadastro__form");
		final.innerHTML = "Deu certo! <3"
		final.style.color ="white";
		final.style.fontSize = "36px"
		return true
	}
})


const inputArea = document.querySelector("#cadastroInputArea");
inputArea.addEventListener("change", function(e){
	e.preventDefault()
	const optionSelect = inputArea.options[inputArea.selectedIndex].value

	if(optionSelect === "Front-End") {
		background.style.backgroundColor = 'green'
		background.style.padding = '20px';
		return true
	}
	 if(optionSelect === "Back-End") {
		background.style.backgroundColor = 'purple'
		background.style.padding = '20px';
		return true
	}
	 if(optionSelect === "UX Designer") {
		background.style.backgroundColor = 'orange'
		background.style.padding = '20px';
		return true
	}
	 if(optionSelect === "UI Design") {
		background.style.backgroundColor = 'salmon'
		background.style.padding = '20px';
		return true
	}
})



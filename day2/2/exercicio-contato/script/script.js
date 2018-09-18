const name =  document.getElementById("contatoInputNome");
const email = document.querySelector("#contatoInputEmail");
const tel = document.querySelector("#contatoInputPhone");
const msg = document.querySelector("#contatoInputMessage");

const button = document.querySelector(".contato__button");

button.addEventListener("click", function(e){
	e.preventDefault();

	if(name.value === '' || name.value === " " || name.value === undefined || name.value === null){
		alert("please enter your name!")
		name.focus();
		return false;
	}
  else if(email.value === "" || email.value.indexOf("@") === -1 || email.value === undefined || email.value === null){
		alert("please enter a valid email!")
		email.focus()
		return false;
	}
	else if(typeof tel.value !==  "number" && tel.value.length < 8){
		alert("please enter a valid number!")
		tel.focus()
		return false;
	}
	else if(msg.value === ""){
		alert("please write a message")
		msg.focus()
		return false;
	}

	const display = document.querySelector(".wrapper");
	display.innerHTML = "Deu certo! <3";
	display.style.color = "purple"
	return true;
})
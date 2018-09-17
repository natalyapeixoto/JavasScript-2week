
const btn =  document.querySelector(".transacao__button");

const input1 = document.querySelector("#transacaoInputName");
const input2 = document.querySelector("#transacaoInputMoney");
const input3 = document.querySelector("#transacaoInputDate");

const tabela = document.querySelector(".extrato__table");

const linha = document.createElement("tr");

const coluna1 = document.createElement("td");
const coluna2 = document.createElement("td");
const coluna3 = document.createElement("td");


btn.addEventListener("click", function(e){
	e.preventDefault();
	
  coluna1.innerHTML = input1.value;
  coluna2.innerHTML = input2.value;
  coluna3.innerHTML = input3.value;

	
	linha.appendChild(coluna1);
	linha.appendChild(coluna2);
	linha.appendChild(coluna3);

	tabela.appendChild(linha);
	
})

// const resposta = document.createElement("span");
// 	const respostaMsg = document.createTextNode("Email cadastrado com sucesso");
// 	resposta.appendChild(respostaMsg)
